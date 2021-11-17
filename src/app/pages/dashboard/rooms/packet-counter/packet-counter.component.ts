import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { delay, map, takeUntil, takeWhile, timeout,switchMap } from 'rxjs/operators';
import { Observable, Subject, of, BehaviorSubject, interval,Subscription } from 'rxjs';
import { DialogComponent, ResizeDirections } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'ngx-packet-counter',
  templateUrl: './packet-counter.component.html',
  styleUrls: ['./packet-counter.component.scss']
})
export class PacketCounterComponent implements OnInit {

  private alive=true;

  public showCloseIcon: Boolean = true;
  
  @ViewChild('ejDialogTX') ejDialogTX: DialogComponent;

  constructor(
    private http: HttpClient,
    private api: HttpService,
  ) { }

  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef;
  // The Dialog shows within the target element.
  public targetElement: HTMLElement;
  // This will resize the dialog in all the directions.
  // public resizeHandleDirection: ResizeDirections[] = ['All'];
  public visible: Boolean = true;
  public hidden: Boolean = false;
  public position: object={ X: 'left', Y: 'top' };
  public initialPage: Object;

  ngOnInit(): void {
  }

   // Initialize the Dialog component's target element.
   public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
    // this.resizeHandleDirection = ['All'];
      }

      public hideDialog: EmitType<object> = () =>  {
        this.ejDialogTX.hide();
    }

    ClicTX() {
      // this.opentest(13);
      
      this.ejDialogTX.show()
      // this.close();
    }

    ngOnDestroy() {
      this.alive = false;
    }

}
