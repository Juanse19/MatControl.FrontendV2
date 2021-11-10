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
 
interface FTP {
    Id: number,
    IdInterface: number,
    DateLoad: string,
    WaveNumber: string,
    OrderNumber: string,
    ContairnerNumber: string,
    DestinationNumber: number,
    FileName: string,
    Description: string,
}

@Component({
  selector: 'ngx-received-ftp',
  templateUrl: './received-ftp.component.html',
  providers: [ToolbarService, EditService, PageService, SortService, CommandColumnService],
  styleUrls: ['./received-ftp.component.scss']
})
export class ReceivedFTPComponent implements OnInit {

  private alive = true;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  public toolbarOptions: ToolbarItems[];

  public toolbar: ToolbarItems[] | object;

  public commands: CommandModel[];

  public editSettings: Object;

  public initialSort: Object; 

  public dataFTP: FTP[];

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

   this.ChargeDataFTP();

   this.toolbar = [
    'Search'
  ];

  }

  created($event): void {
    document.getElementById(this.grid.element.id + "_searchbar").addEventListener('keyup', () => {
            this.grid.search((event.target as HTMLInputElement).value)
    });
}
 
  tooltip(args: QueryCellInfoEventArgs) {
    const tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString()
    }, args.cell as HTMLTableCellElement);
}

  ChargeDataFTP() {
    this.apiGetComp.GetJson(this.api.apiUrlNode + '/api/Inductions/Interfazw1').subscribe((res: any) => {
      this.dataFTP = res;
      
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
