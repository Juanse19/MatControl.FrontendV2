import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { takeWhile } from 'rxjs/operators';

interface allWave {
  WaveNumber: number
}

interface wordLoad{
  DestinationNumber: string,
  Pendientes: number,
  Inducidos: number,
  Faltantes: number,
  Porcentaje: number,
}

@Component({
  selector: 'ngx-workload',
  templateUrl: './workload.component.html',
  styleUrls: ['./workload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkloadComponent implements OnInit {

  private alive = true;

  public airForm: FormGroup;

  public dataWordLoad: wordLoad[];
  public dataAllWave: allWave[]

  @ViewChild('checkbox')
    public mulObj: MultiSelectComponent;
    @ViewChild('selectall')
    public checkboxObj: CheckBoxComponent;
    @ViewChild('dropdown')
    public dropdownObj: CheckBoxComponent;
    @ViewChild('select')
    public reorderObj: CheckBoxComponent;
    public mode: string;
    public filterPlaceholder: string;

  constructor(
    public apiGetComp: ApiGetService,
    private api: HttpService,
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  
  // map the groupBy field with category column
  public checkFields: Object = { text: 'text', value: 'value' };
  // set the placeholder to the MultiSelect input
  public checkWaterMark: string = 'Buscar Wave';
  // set the MultiSelect popup height
  public popHeight: string = '350px';

  ngOnInit(): void {
    this.mode = 'CheckBox';
    this.filterPlaceholder = 'Buscar Wave       ';
    this.ChargeAllWave();
    this.initForm();
  }

  initForm() {
    this.airForm = this.fb.group({
      StartTime: ['', Validators.required]
      // EndTime: ['', Validators.required],
    });
  }

  public onChange(): void {
    // enable or disable the select all in Multiselect based on CheckBox checked state
    this.mulObj.showSelectAll = this.checkboxObj.checked;
  }
  public onChangeDrop(): void {
    // enable or disable the dropdown button in Multiselect based on CheckBox checked state
    this.mulObj.showDropDownIcon = this.dropdownObj.checked;
  }
  public onChangeReorder(): void {
    // enable or disable the list reorder in Multiselect based on CheckBox checked state
    this.mulObj.enableSelectionOrder = this.reorderObj.checked;
  }

  ChargeAllWave() {
    this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/GetAllWave').subscribe((res: any) => {
      this.dataAllWave = res;
      console.log('dataAllWave', this.dataAllWave);
      
    });
  }

  date(StartTime: string, ){
    // debugger

    const fechaFormateada = StartTime

    console.log('fecha inicio: ', fechaFormateada );    
    

    // console.log('test: ', StartTime);

    if (fechaFormateada == null ) {
      // this.toastrService.warning('', 'No pusiste la fecha.');
    } else {
      console.log('Si hay data');
      debugger
      this.http.get(this.api.apiUrlNode + '/api/GetWordLoadForWave?waveNumber='+ StartTime)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      if (res.length == 0){
        // console.log("se encuentra vacío el arreglo")
        // this.toastrService.danger('', 'No ha data.');
        }else {
        // console.log("no lo esta")
        }
      this.dataWordLoad=res;
      console.log('Socket:', this.dataWordLoad );
      
    });
    }

  }

  // ChargeWordLoad(StartTime: string) {
  //   this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/GetWordLoadForWave?waveNumber='+ StartTime).subscribe((res: any) => {
  //     this.dataWordLoad = res;
  //     console.log('dataWordLoad', this.dataWordLoad);
  //   });
  // }

  ngOnDestroy() {
    this.alive = false;
  }

}
