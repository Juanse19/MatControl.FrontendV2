import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InductionComponent } from './induction.component';
import { StageComponent } from './stage/stage.component';
import { ReceivedFTPComponent } from './received-ftp/received-ftp.component';
import { ReceivedSocketComponent } from './received-socket/received-socket.component';
import { ReaderefficiencyComponent } from './readerefficiency/readerefficiency.component';
import { EnergyconsumptionComponent } from './energyconsumption/energyconsumption.component';
import { WorkloadComponent } from './workload/workload.component';
import { ContainerRoutingComponent } from './container-routing/container-routing.component';

const routes: Routes = [{
  path: '',
  component: InductionComponent,
  children: [ 
    {
      path: 'Stage',
      component: StageComponent,
    },
    {
      path: 'ReceivedFTP',
      component: ReceivedFTPComponent,
    },
    {
      path: 'ReceivedSocket',
      component: ReceivedSocketComponent,
    },
    {
      path: 'Readerefficiency',
      component: ReaderefficiencyComponent,
    },
    {
      path: 'Energyconsumption',
      component: EnergyconsumptionComponent,
    },
    {
      path: 'Workload',
      component: WorkloadComponent,
    },
    {
      path: 'ContainerRouting',
      component: ContainerRoutingComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InductionRoutingModule { }
