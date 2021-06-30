/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { takeUntil, takeWhile} from 'rxjs/operators';

import { NbToastrService } from '@nebular/theme';

import {User, UserData} from '../../../@core/interfaces/common/users';
import {EMAIL_PATTERN, NgxResetPasswordComponent, NUMBERS_PATTERN} from '../../../@auth/components';
import {NbAuthOAuth2JWTToken, NbTokenService} from '@nebular/auth';
import {UserStore} from '../../../@core/stores/user.store';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import {ApiGetService} from '../../../@auth/components/register/apiGet.services';
import { NbAccessChecker } from '@nebular/security';


interface Roles {
  id?: number;
  name: string;
}


export enum UserFormMode {
  VIEW = 'View',
  EDIT = 'Editar',
  ADD = 'Agregar',
  EDIT_SELF = 'Editar propio',
}

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class UserComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  selectedRole;
  listaRoles:Roles[]=[];
  public select = false;
  private alive = true;
  mostrar: Boolean;

  protected readonly unsubscribe$ = new Subject<void>();

  get firstName() { return this.userForm.get('firstName'); }

  get lastName() { return this.userForm.get('lastName'); }

  get login() { return this.userForm.get('login'); }
  
  get role() { return this.userForm.get('role'); }

  get email() { return this.userForm.get('email'); }

  get age() { return this.userForm.get('age'); }

  get street() { return this.userForm.get('address').get('street'); }

  get city() { return this.userForm.get('address').get('city'); }

  get zipCode() { return this.userForm.get('address').get('zipCode'); }

  mode: UserFormMode;
  setViewMode(viewMode: UserFormMode) {
    this.mode = viewMode;
  }

  constructor(
              public accessChecker: NbAccessChecker,
              private usersService: UserData,
              private router: Router,
              private route: ActivatedRoute,
              private tokenService: NbTokenService,
              private userStore: UserStore,
              private toasterService: NbToastrService,
              private fb: FormBuilder,
              private httpService: HttpService,
              private apiGetComp: ApiGetService,
              public resetPassword: NgxResetPasswordComponent) {
                this.apiGetComp.GetJson(this.httpService.apiUrlMatbox+'/userrole/getroles').subscribe((res: any) => {
                  this.listaRoles=res;
                });
                this.accessChecker.isGranted('edit', 'users').subscribe((res: any) => {
                  if(res){ 
                    this.select = false;
                    this.mostrar = false;
                  }else {
                    this.select=true;
                    this.mostrar=true;
                  }
                  
                });
  }

  ngOnInit(): void {
    this.initUserForm();
    this.loadUserData();
  }

  initUserForm() {
    this.userForm = this.fb.group({
      id: this.fb.control(''),
      role: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20),Validators.required]),
      firstName: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      lastName: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      login: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      age: this.fb.control('', [ Validators.min(1),
        Validators.max(120), Validators.pattern(NUMBERS_PATTERN)]),
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern(EMAIL_PATTERN),
      ]),
      address: this.fb.group({
        street: this.fb.control(''),
        city: this.fb.control(''),
        zipCode: this.fb.control(''),
      }),
    });
  }

  get canEdit(): boolean {
    return this.mode !== UserFormMode.VIEW;
  }

  

  loadUserData() {
    const id = this.route.snapshot.paramMap.get('id');
    const isProfile = this.route.snapshot.queryParamMap.get('profile');
    if (isProfile) {
      this.setViewMode(UserFormMode.EDIT_SELF);
      this.loadUser();
    } else {
      if (id) {
        const currentUserId = this.userStore.getUser().id;
        this.setViewMode(currentUserId.toString() === id ? UserFormMode.EDIT_SELF : UserFormMode.EDIT);
        this.loadUser(id);
      } else {
        this.setViewMode(UserFormMode.ADD);
      }
    }
  }

  loadUser(id?) {
    const loadUser = this.mode === UserFormMode.EDIT_SELF
      ? this.usersService.getCurrentUser() : this.usersService.get(id);
    loadUser
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        this.apiGetComp.GetJson(this.httpService.apiUrlMatbox+'/userrole/getrolebyuser?idUser='+user.id).subscribe((res: any) => {
          user.role=res.name;
        
        this.userForm.setValue({
          id: user.id ? user.id : '',
          role: user.role ? user.role : '',
          firstName: user.firstName ? user.firstName : '',
          lastName: user.lastName ? user.lastName : '',
          login: user.login ? user.login : '',
          age: user.age ? user.age : '',
          email: user.email,
          address: {
            street: (user.address && user.address.street) ? user.address.street : '',
            city: (user.address && user.address.city) ? user.address.city : '',
            zipCode: (user.address && user.address.zipCode) ? user.address.zipCode : '',
          },
        });
      });
        // this is a place for value changes handling
        // this.userForm.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {   });
      });
  }


  convertToUser(value: any): User {
    const user: User = value;
    return user;
  }

  changepass(){
    // this.resetPassword.userId=this.userForm.value.id;
    this.router.navigate(['/auth/reset-password/'+this.userForm.value.id]);
  }

  save() {
    const user: User = this.convertToUser(this.userForm.value);

    let observable = new Observable<User>();
    if (this.mode === UserFormMode.EDIT_SELF) {
      this.usersService.updateCurrent(user)
      .pipe(takeWhile(() => this.alive))
      .subscribe((result: any) => {
        var userRole = {
          IdUser:user.id,
          Role:user.role
        };
        this.apiGetComp.PostJson(this.httpService.apiUrlMatbox + '/userrole/postupdateroleuser',userRole)
        .pipe(takeWhile(() => this.alive))
        .subscribe();
          this.tokenService.set(new NbAuthOAuth2JWTToken(result, 'email', new Date()));
          this.handleSuccessResponse();
        },
        err => {
          this.handleWrongResponse();
        });
    } else {
      observable = user.id
        ? this.usersService.update(user)
        : this.usersService.create(user);
    }

    observable
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        var userRole = {
          IdUser:user.id,
          Role:user.role
        };
        this.apiGetComp.PostJson(this.httpService.apiUrlMatbox + '/userrole/postupdateroleuser',userRole)
        .pipe(takeWhile(() => this.alive))
        .subscribe();
       
        this.handleSuccessResponse();
      },
      err => {
      this.handleWrongResponse();
    });
  }

  handleSuccessResponse() {
    this.toasterService.success('', `Item ${this.mode === UserFormMode.ADD ? 'created' : 'updated'}!`);
    this.back();
  }

  handleWrongResponse() {
    this.toasterService.danger('', `¡Este correo electrónico ya se tomó!`);
  }

  back() {
    // this.mostrar= false;
    this.router.navigate(['/pages/users/list']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.alive = false;
  }
}
