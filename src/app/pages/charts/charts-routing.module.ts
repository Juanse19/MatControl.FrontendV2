/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { D3Component } from './d3/d3.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ReportComponent } from './report/report.component';
import { ChartsReportComponent } from './charts-report/charts-report.component';
import { ChartRepots2Component } from './chart-repots2/chart-repots2.component';

const routes: Routes = [{
  path: '',
  component: ChartsComponent,
  children: [{
    path: 'echarts',
    component: EchartsComponent,
  }, {
    path: 'd3',
    component: D3Component,
  }, {
    path: 'chartjs',
    component: ChartjsComponent,
  },{
     path: 'report',
    component: ReportComponent,
  },{
     path: 'charts-report',
    component: ChartsReportComponent,
  },{
    path: 'charts-reports2',
   component: ChartRepots2Component,
 }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ChartsRoutingModule { }

export const routedComponents = [
  ChartsComponent,
  EchartsComponent,
  D3Component,
  ChartjsComponent,
  ReportComponent,
  ChartsReportComponent,
];
