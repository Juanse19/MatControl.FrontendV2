import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/interfaces/common/smart-table';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { NbToastrService } from '@nebular/theme';
import { switchMap, takeWhile } from 'rxjs/operators';
import { NbAccessChecker } from '@nebular/security';
import { UserStore } from '../../../@core/stores/user.store';
import { GridComponent, SortService, PageSettingsModel, FilterSettingsModel, CommandClickEventArgs, 
  EditService, CommandColumnService, CommandModel, ToolbarService, PageService,
   ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'; 

interface Alarmas {
  id: number;
  message: string;
  level: string;
  exception: string;
  userId: string;
  STD: string;
  ETD: string;
  UserIdAcknow: string;
  NameDevice: string;
  DescriptionDevice: string;
}

interface LogEvent{
  ID: number,
  Date: string,
  Thread: string,
  Context: string,
  Level: string,
  Logger: string,
  Method: string,
  Parameters: string,
  Message: string,
  Exception: string,
  ExecutionTime: string,
  UserName: string,
  Module: string,
}

let ALARMAS: Alarmas[] = [


];

@Component({
  selector: 'ngx-alarms',
  templateUrl: './alarms.component.html',
  providers: [ToolbarService, EditService, PageService, SortService, CommandColumnService],
  styleUrls: ['./alarms.component.scss'] 
})
export class AlarmsComponent implements OnDestroy {

  public select = false;
  private alive = true;
  mostrar: Boolean;

  subscription: Subscription;

  intervalSubscriptionChargealarms: Subscription;

  intervalSubscriptionHistoryalarms: Subscription;

  public pageSettings: PageSettingsModel;

  public Alarm: Alarmas[];

  public editSettings: Object;
    // public toolbar: string[];
    public toolbar: ToolbarItems[] | object;
 
  public historyAlarmData: Alarmas[];
  public editparams: Object;
  public commands: CommandModel[];
  public filterOptions: FilterSettingsModel;
  public initialSort: Object;

  public dataLogEvent: LogEvent[];

  alarmas = ALARMAS;

  
  public Alarms: Alarmas[];

  constructor(
    public accessChecker: NbAccessChecker,
    private toastrService: NbToastrService,
    public apiGetComp: ApiGetService,
    private api: HttpService,
    private http: HttpClient,
    private userStore: UserStore,
  ) {
    this.alive;
    this.accessChecker.isGranted('edit', 'ordertable')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
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
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      allowEditOnDblClick: false
    };
    
    this.pageSettings = { pageSizes: true, pageSize: 10 };
    this.filterOptions = {
      type: 'Menu',
   };

    // this.Chargealarms();
    // this.ChargeHistoryalarms();
    this.ChargeaLogEvent();

    this.toolbar = [
      //  {text: 'Delete', prefixIcon: 'fas fa-check'},
     { text: 'Reconocer alarmas', tooltipText: 'Click', prefixIcon: 'fas fa-check-double', id: 'Click' }];

     this.commands = [
      // { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
      { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'fas fa-check' } },
      { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
      { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }];
  }

  // onedit($event: any) {
  //     this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Alarms/postalarm?IdAlarm' + $event.data.id).subscribe((res: any) => {
  //       //REPORTOCUPATION=res;
  //       console.log("alarmId", res);
  //       // this.Alarm = res;
  //       // this.source.load(res);
  //     });
    
  // }

  clickHandler(args: ClickEventArgs): void {
    if (args.item.id === 'Click') {
      // console.log('click: ', args);
      // debugger
      this.reconocer();
        // alert('Custom Toolbar Click...');
    }
  }

  actionBegin(args) {
    if (( args.requestType === 'delete')) {
      // const Id = 'Id';
      // console.log('Type Delete: ', args.data[0].Id);
      this.accessChecker.isGranted('edit', 'ordertable')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if(res){ 
          const currentUserId = this.userStore.getUser().id;
          var respons = 
            {
            IdAlarm: args.data[0].Id,
            UserIdAcknow: currentUserId
            };
          // let alarm = {IdAlarm: event.data.Id};
          this.apiGetComp.PostJson(this.api.apiUrlNode + '/api/acknow', respons)
          .pipe(takeWhile(() => this.alive))
          .subscribe((res: any) => {
        //  console.log("alarmId", res);
         if (res) {
          this.toastrService.success('', '¡Alarma solucionada!'); 
          this.Chargealarms();
          this.AlarmsCharge();
        } else {
          this.toastrService.danger('', 'Algo salio mal.');
        }
      });
          // args.rowData.Id.resolve();
          this.select = false;
          this.mostrar = false;
          args.cancel = true;
        }else {
          this.select=true;
          this.mostrar=true;
          args.cancel = true;
        }
      });
    }
  
  }

  onDeleteConfirm(event): void {

    this.accessChecker.isGranted('edit', 'ordertable')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if(res){ 
          let alarm = {idAlarm: event.data.id};

  //         const currentUserId = this.userStore.getUser().firstName;
  //         // console.log("este es el usuario: ",this.userStore.getUser().firstName);
  //         var respons = 
  //         {
  //           user: currentUserId,
  //           message:"Reconoció una alarma"
  //         };

  // this.apiGetComp.PostJson(this.api.apiUrlMatbox + '/Alarms/postSaveAlarmUser', respons)
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res: any) => {
  //       //  console.log("Envió: ", res);
  //     });

      const currentUserId = this.userStore.getUser().id;
      var respons = 
            {
            IdAlarm: event.data.Id,
            UserIdAcknow: currentUserId
            };    
            

      this.apiGetComp.PostJson(this.api.apiUrlNode + '/api/acknow', respons)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        //  console.log("alarmId", res);
         if (res) {
          this.toastrService.success('', '¡Alarma solucionada!'); 
         
        } else {
          this.toastrService.danger('', 'Algo salio mal.');
        }
      });
      event.confirm.resolve();
          this.select = false;
          this.mostrar = false;
        }else {
          this.select=true;
          this.mostrar=true;
        }
      });
    //  console.log("Evento: ", event);
      
    
  }

  reconocer() {

  
    this.accessChecker.isGranted('edit', 'ordertable')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      if(res){ 
      Swal.fire({
      title: 'Desea reconocer alarmas?',
      text: `¡Reconocerá todas las alarmas!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Reconocer!'
    }).then(result => {
      debugger 
      if (result.value) {
      const currentUserId = this.userStore.getUser().id;
          var respons = 
            {
              UserIdAcknow: currentUserId
            };

      this.apiGetComp.PostJson(this.api.apiUrlNode + '/api/acknowall', respons)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
       this.Chargealarms();
       this.AlarmsCharge();
      });
   
         Swal.fire('¡Se Reconocieron Exitosamente', 'success');
         this.Chargealarms();
         this.AlarmsCharge();
     }
   });  
         this.select = false;
         this.mostrar = false;
       }else {
         this.select=true;
         this.mostrar=true;
       }
     });
     
  }

  public AlarmsCharge(){

    if (this.intervalSubscriptionChargealarms) {
      this.intervalSubscriptionChargealarms.unsubscribe();
    }
    
    this.intervalSubscriptionChargealarms = interval(10000)
    .pipe(
      takeWhile(() => this.alive),
      switchMap(() => this.http.get(this.api.apiUrlNode + '/api/getAlarms')),
    )
    .subscribe((res: any) => {
      this.Alarm = res;

    });
  }

  Chargealarms() {
    this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/getAlarms')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      //REPORTOCUPATION=res;
      // console.log("Report Total Ordenes:", res);
      this.Alarm = res;
    });
    // const contador = interval(6000)
    // contador.subscribe((n) => {
    //   this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/GetAlarms')
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((res: any) => {
    //     //REPORTOCUPATION=res;
    //     this.Alarm = res;
    //   }); 
    // });
  }

  public historyAlarmsCharge(){

    if (this.intervalSubscriptionHistoryalarms) {
      this.intervalSubscriptionHistoryalarms.unsubscribe();
    }
    
    this.intervalSubscriptionHistoryalarms = interval(10000)
    .pipe(
      takeWhile(() => this.alive),
      switchMap(() => this.http.get(this.api.apiUrlNode + '/api/alarms')),
    )
    .subscribe((res: any) => {
      this.Alarms = res;

    });
  }

  ChargeHistoryalarms() {
    this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/alarms')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      // console.log("HAlarms: ", res);
      
      this.Alarms = res;
    });
    // const contador = interval(6000)
    // contador.subscribe((n) => {
    //   this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/alarms')
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((res: any) => {
    //     this.Alarms = res;
    //     this.source1.load(res);
    //   });
    // });
  }

  ChargeaLogEvent() {
    this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/LogEvent')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      //REPORTOCUPATION=res;
      // console.log("Report Total Ordenes:", res);
      this.dataLogEvent = res;
      // console.log("dataLogEvent", this.dataLogEvent);
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  

}
