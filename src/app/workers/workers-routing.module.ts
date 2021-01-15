import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { WorkerTableComponent } from './worker-table/worker-table.component';
import { WorkersComponent } from './workers.component';

const routes: Routes = [
  {
    path: '',
    component: WorkersComponent,
    children: [
      {
        path: '',
        component: WorkerTableComponent,
      },
      {
        path: 'edit',
        component: WorkerEditComponent,
      },
      {
        path: 'edit/:id',
        component: WorkerEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkersRoutingModule { }
