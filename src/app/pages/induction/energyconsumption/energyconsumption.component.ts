import { Component, OnInit, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { takeWhile } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';
import { MarkerSettingsModel } from '@syncfusion/ej2-angular-charts';

interface consumption {
  Date: string,
  Hours: number,
  Consumo: number,
}

interface chart {
  xValue: number,
  yValue: number,
}

@Component({
  selector: 'ngx-energyconsumption',
  templateUrl: './energyconsumption.component.html',
  styleUrls: ['./energyconsumption.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnergyconsumptionComponent implements OnInit {

  public airForm: FormGroup;
  private alive = true;
  public dataConsumption: consumption[]=[];
  public dataChar: chart[]=[];

  public primaryXAxis: Object;
public chartData: Object[];
public primaryYAxis: Object;
public legendSettings: Object;
public marker: MarkerSettingsModel = {
  visible: true,
  width: 10,
  height: 10,
  fill: '#C1272D',
  border: {color: '#333333', width: 2}
};
public title: string;

  constructor(
    public apiGetComp: ApiGetService,
    private api: HttpService,
    private fb: FormBuilder,
    private miDatePipe: DatePipe,
    private toastrService: NbToastrService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    
    this.initForm();
    this.ChargeDataFTP();
    
  this.primaryYAxis = {
      title: 'KWh',
      interval: 2,
    },

    this.primaryXAxis = {
      title: 'Horas',
      interval: 1,
      min: 0,
      max: 23
    },

  this.title = 'Consumo Energético por Día';
  }
  

  initForm() {
    this.airForm = this.fb.group({
      StartTime: ['', Validators.required]
      // EndTime: ['', Validators.required],
    });
  }

  date(StartTime: string){

    const fechaFormateada = this.miDatePipe.transform(StartTime, 'yyyy-MM-dd');

    // console.log('fecha: ', fechaFormateada);
    

    // console.log('test: ', StartTime);
 
    if (fechaFormateada == null) {
      this.toastrService.warning('', 'No pusiste la fecha.');
    } else {
      this.http.get(this.api.apiUrlNode + '/api/GetEnergyConsumtion?date='+ fechaFormateada)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      if (res.length == 0){
        // console.log("se encuentra vacío el arreglo")
        this.toastrService.danger('', 'No ha data.');
        }else {
        // console.log("no lo esta")
        }
      this.dataConsumption=res;
      console.log('Consumption:', this.dataConsumption );
      
    });
    }

  }

  ChargeDataFTP() {
    this.apiGetComp.GetJson(this.api.apiUrlNode + '/test').subscribe((res: any) => {
      this.dataChar = res;
      this.chartData = this.dataChar;
      console.log('Chart:', this.dataChar );
      console.log('DataChart:', this.chartData );
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
