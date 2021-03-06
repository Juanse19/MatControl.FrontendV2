/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
  NbSpinnerModule,
  NbToggleModule,
  NbInputModule,
  NbAutocompleteModule,
  NbTooltipModule,
  NbCheckboxModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { WcsComponent } from './rooms/wcs/wcs.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SolarComponent } from './solar/solar.component';
import { PlayerComponent } from './rooms/player/player.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { FormsModule } from '@angular/forms';
import { StatusCardPlaceholderComponent } from './status-card/status-card-placeholder.component';
import { AuthModule } from '../../@auth/auth.module';
import { JacComponent} from './JacComponent/jac.component';
// import { DialogElementsExample} from './JacPopupComponent/jacpopup.component'
// import { DialogElementsExampleDialog} from './JacPopupComponent/jacpopup.component'
import { WindowComponent} from './WindowPopupComponent/windowPopup.component';
import { HttpClientModule} from '@angular/common/http';
import {ApiGetService} from './WindowPopupComponent/apiGet.services';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { WindowComponent2} from './OrderPopup/orderPopup.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { LastalarmComponent } from './lastalarm/lastalarm.component';
import { QueuedOrdersComponent } from './queued-orders/queued-orders.component';
import { ManualorderComponent } from './manualorder/manualorder.component';
import { OrmanualComponent } from './ormanual/ormanual.component';
import { PacketCounterComponent } from './rooms/packet-counter/packet-counter.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NbSpinnerModule,
    NgxEchartsModule,
    AuthModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    // FormsModule,
    NbToggleModule,
    NbInputModule,
    NbAutocompleteModule,
    Ng2SmartTableModule,
    NbTooltipModule,
    DropDownListModule,
    GridModule,
    DropDownListAllModule,
    DialogModule,
    NbCheckboxModule,
    ComboBoxModule,
    DatePickerModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    ContactsComponent,
    RoomSelectorComponent,
    WcsComponent,
    TemperatureComponent,
    RoomsComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,
    StatusCardPlaceholderComponent,
    JacComponent,
    WindowComponent,
    WindowComponent2,
    LastalarmComponent,
    QueuedOrdersComponent,
    ManualorderComponent,
    OrmanualComponent,
    PacketCounterComponent,
  ],
  providers: [
    PageService, 
    SortService, 
    FilterService, 
    GroupService,
    ToolbarService,
  ],
})
export class DashboardModule { }
