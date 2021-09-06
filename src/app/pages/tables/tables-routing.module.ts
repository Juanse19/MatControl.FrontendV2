/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { OrderTableComponent } from './OrderTable/orderTable.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { SmartOrderTableComponent } from './SmartOrderTable/smartOrderTable.component';
import { AdminGuard } from '../../@auth/admin.guard';
import { UserGuard } from '../../@auth/user.guard';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'tree-grid',
      component: TreeGridComponent,
    },
    {
      path: 'OrderTable',
      component: OrderTableComponent,
    },
    {
      path: 'alarms',
      component: AlarmsComponent,
    },
    {
      path: 'SmartOrderTable',
      component: SmartOrderTableComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
  OrderTableComponent,
  SmartOrderTableComponent,
];
