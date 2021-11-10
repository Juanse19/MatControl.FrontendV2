import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbCheckboxModule,
} from '@nebular/theme';

import { InductionRoutingModule } from './induction-routing.module';
import { InductionComponent } from './induction.component';
import { StageComponent } from './stage/stage.component';
import { ReceivedFTPComponent } from './received-ftp/received-ftp.component';
import { ReceivedSocketComponent } from './received-socket/received-socket.component';
import { ThemeModule } from '../../@theme/theme.module';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ReaderefficiencyComponent } from './readerefficiency/readerefficiency.component';
import { EnergyconsumptionComponent } from './energyconsumption/energyconsumption.component';
import { WorkloadComponent } from './workload/workload.component';
import { ContainerRoutingComponent } from './container-routing/container-routing.component'; 
import { ChartModule} from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';



@NgModule({
  declarations: [InductionComponent, StageComponent, ReceivedFTPComponent, ReceivedSocketComponent, ReaderefficiencyComponent, EnergyconsumptionComponent, WorkloadComponent, ContainerRoutingComponent],
  imports: [
    CommonModule,
    InductionRoutingModule,
    NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbDatepickerModule,
  NbCheckboxModule,
  ThemeModule,
  GridModule,
  DropDownListAllModule,
  FormsModule, 
  ReactiveFormsModule,
  DatePickerModule,
  DropDownListModule,
  ChartModule,
  ],
  providers: [
    PageService, 
    SortService, 
    FilterService, 
    GroupService,
    ToolbarService,
    CategoryService, 
    LegendService, 
    TooltipService, 
    DataLabelService, 
    LineSeriesService
  ],
})
export class InductionModule { }
