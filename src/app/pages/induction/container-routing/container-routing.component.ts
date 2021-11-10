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

@Component({
  selector: 'ngx-container-routing',
  templateUrl: './container-routing.component.html',
  providers: [ToolbarService, EditService, PageService, SortService, CommandColumnService],
  styleUrls: ['./container-routing.component.scss']
})
export class ContainerRoutingComponent implements OnInit {

  private alive = true;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  public toolbarOptions: ToolbarItems[];

  public toolbar: ToolbarItems[] | object;

  public commands: CommandModel[];

  public editSettings: Object;

  public initialSort: Object;

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

   this.toolbar = [
    'Search'
  ];

  }

  created($event): void {
    document.getElementById(this.grid.element.id + "_searchbar").addEventListener('keyup', () => {
            this.grid.search((event.target as HTMLInputElement).value)
    });
}

ngOnDestroy() {
  this.alive = false;
}

}
