/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import {  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbSpinnerModule,

} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { ChartsRoutingModule, routedComponents } from './charts-routing.module';
import { ChartjsBarComponent } from './chartjs/chartjs-bar.component';
import { ChartjsLineComponent } from './chartjs/chartjs-line.component';
import { ChartjsPieComponent } from './chartjs/chartjs-pie.component';
import { ChartjsMultipleXaxisComponent } from './chartjs/chartjs-multiple-xaxis.component';
import { ChartjsBarHorizontalComponent } from './chartjs/chartjs-bar-horizontal.component';
import { ChartjsRadarComponent } from './chartjs/chartjs-radar.component';
import { D3BarComponent } from './d3/d3-bar.component';
import { D3LineComponent } from './d3/d3-line.component';
import { D3PieComponent } from './d3/d3-pie.component';
import { D3AreaStackComponent } from './d3/d3-area-stack.component';
import { D3PolarComponent } from './d3/d3-polar.component';
import { D3AdvancedPieComponent } from './d3/d3-advanced-pie.component';
import { EchartsLineComponent } from './echarts/echarts-line.component';
import { EchartsPieComponent } from './echarts/echarts-pie.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { EchartsMultipleXaxisComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsAreaStackComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationComponent } from './echarts/echarts-bar-animation.component';
import { EchartsRadarComponent } from './echarts/echarts-radar.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { ChartsPanelReportComponent } from './charts-panel/charts-panel-report.component';
import { ChartsPanelReports2Component } from './charts-panel/charts-panel-reports2.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { RepoChartComponent } from './charts-panel/charts/repo-chart.component';
import { ChartRepoHeaderComponent } from './charts-panel/chart-panel-header/chart-repo-header.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { from } from 'rxjs';
import { ChartsReportComponent } from './charts-report/charts-report.component';
import { ChartRepots2Component } from './chart-repots2/chart-repots2.component';

const components = [
  ChartjsBarComponent,
  ChartjsLineComponent,
  ChartjsPieComponent,
  ChartjsMultipleXaxisComponent,
  ChartjsBarHorizontalComponent,
  ChartjsRadarComponent,
  D3BarComponent,
  D3LineComponent,
  D3PieComponent,
  D3AreaStackComponent,
  D3PolarComponent,
  D3AdvancedPieComponent,
  EchartsLineComponent,
  EchartsPieComponent,
  EchartsBarComponent,
  EchartsMultipleXaxisComponent,
  EchartsAreaStackComponent,
  EchartsBarAnimationComponent,
  EchartsRadarComponent,
  ECommerceChartsPanelComponent,
  ChartsPanelReportComponent,
  ChartsPanelReports2Component,
  ChartPanelHeaderComponent,
  ChartPanelSummaryComponent,
  ECommerceLegendChartComponent,
  OrdersChartComponent,
  ProfitChartComponent,
  RepoChartComponent,
  ChartRepoHeaderComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartsRoutingModule,
    NbProgressBarModule,
    NbSpinnerModule,
    Ng2SmartTableModule
  ],
  declarations: [...routedComponents, ...components, ChartRepots2Component],
})
export class ChartsModule {}
