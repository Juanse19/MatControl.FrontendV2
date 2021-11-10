import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { GridComponent, SortService, PageSettingsModel, FilterSettingsModel, CommandClickEventArgs, 
  EditService, CommandColumnService, CommandModel, ToolbarService, PageService,
   ToolbarItems, 
   QueryCellInfoEventArgs} from '@syncfusion/ej2-angular-grids';
import { Tooltip } from '@syncfusion/ej2-popups';

interface Stage {
    Id: number,
    FileName: string,
    Patch: string,
    Date: string,
    Type: string,
    State: number,
    Description: string,
}

@Component({
  selector: 'ngx-stage',
  templateUrl: './stage.component.html',
  providers: [ToolbarService, EditService, PageService, SortService, CommandColumnService],
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  private alive = true;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  public toolbarOptions: ToolbarItems[];

  public toolbar: ToolbarItems[] | object;

  public commands: CommandModel[];

  public editSettings: Object;

  public initialSort: Object; 

  public dataStage: Stage[];

  @ViewChild('grid')
    public grid: GridComponent;

  constructor(
    public apiGetComp: ApiGetService,
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

   this.ChargeDataStage();

   this.toolbar = [
    'Search'
  ];

  this.commands = [
    { type: 'Edit', buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' } },
    // { type: 'Delete', buttonOption: { cssClass: 'e-flat', iconCss: 'fas fa-check' } },
    { type: 'Save', buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' } },
    { type: 'Cancel', buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' } }];
    
  }

  created($event): void {
    document.getElementById(this.grid.element.id + "_searchbar").addEventListener('keyup', () => {
            this.grid.search((event.target as HTMLInputElement).value)
    });
}

  onChange(args: any) {
    console.log("Change event triggered",args); //undefined
  }

  actionBegin(args) {
    console.log('Type args: ', args);
    
    
  }

  dataBound(args) {
    console.log('args', args);
    
    // if (args.rowData.State == -3) {
    //     args.row.css("backgroundColor", "red").css("color", "black");/*custom css applied to the row */
    // }
    // if (args.rowData.State == 0) {
    //     args.row.bgColor("backgroundColor", "azure").css("color", "black");/*custom css applied to the row */
    // }
    // else if (args.rowData.State == 1) {
    //     args.row.css("backgroundColor", "teal").css("color", "white");/*custom css applied to the row */
    // }
    // else if (args.rowData.State == 2) {
    //     args.row.css("backgroundColor", "orange").css("color", "black");/*custom css applied to the row */
    // }
    // else if (args.rowData.State == 3) {
    //     args.row.css("backgroundColor", "green").css("color", "black");/*custom css applied to the row */
    // }
}

tooltip(args: QueryCellInfoEventArgs) {
  const tooltip: Tooltip = new Tooltip({
      content: args.data[args.column.field].toString()
  }, args.cell as HTMLTableCellElement);
}

  ChargeDataStage() {
    this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/Inductions/Interfaz').subscribe((res: any) => {
      this.dataStage = res;
      // console.log("Stage:", this.dataStage);
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
