import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { GridComponent, SortService, PageSettingsModel, FilterSettingsModel, CommandClickEventArgs, 
  EditService, CommandColumnService, CommandModel, ToolbarService, PageService,
   ToolbarItems, 
   QueryCellInfoEventArgs} from '@syncfusion/ej2-angular-grids';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { takeWhile } from 'rxjs/operators';
import { NbToastrService } from '@nebular/theme';

interface socket{
  Id: number,
  Method: string,
  Content: string,
  DateTimeAdded: string,
  State: number,
  DateAdded: string,
}

@Component({
  selector: 'ngx-received-socket',
  templateUrl: './received-socket.component.html',
  providers: [ToolbarService, EditService, PageService, SortService, CommandColumnService],
  styleUrls: ['./received-socket.component.scss']
})
export class ReceivedSocketComponent implements OnInit {

  private alive = true;

  public airForm: FormGroup;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  public toolbarOptions: ToolbarItems[];

  public toolbar: ToolbarItems[] | object;

  public commands: CommandModel[];

  public editSettings: Object;

  public initialSort: Object; 

  public dataSocket: socket[];

  @ViewChild('grid')
    public grid: GridComponent;

  constructor(
    public apiGetComp: ApiGetService,
    private fb: FormBuilder,
    private miDatePipe: DatePipe,
    private toastrService: NbToastrService,
    private api: HttpService,
    private http: HttpClient,
  ) { }

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

   this.initForm();

  }

  initForm() {
    this.airForm = this.fb.group({
      StartTime: ['', Validators.required],
      EndTime: ['', Validators.required],
    });
  }

date(StartTime: string, EndTime: string){
    // debugger

    const fechaFormateada = this.miDatePipe.transform(StartTime, 'yyyy-MM-dd');
    const fechaFormateada2 = this.miDatePipe.transform(EndTime, 'yyyy-MM-dd');

    console.log('fecha inicio: ', fechaFormateada , 'Fecha final: ', fechaFormateada2);
    

    // console.log('test: ', StartTime);

    if (fechaFormateada == null || fechaFormateada2 == null) {
      this.toastrService.warning('', 'No pusiste la fecha.');
    } else {
      console.log('Si hay data');
      // debugger
      this.http.get(this.api.apiUrlNode + '/api/Inductions/Interfazw2?dateIni='+ fechaFormateada + '&datefin=' + fechaFormateada2)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      if (res.length == 0){
        // console.log("se encuentra vacío el arreglo")
        this.toastrService.danger('', 'No ha data.');
        }else {
        // console.log("no lo esta")
        }
      this.dataSocket=res;
      console.log('Socket:', this.dataSocket );
      
    });
    }

  }

  ngOnDestroy() {
    this.alive = false;
  }

}
