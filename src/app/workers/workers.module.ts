import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkersRoutingModule } from './workers-routing.module';
import { WorkersComponent } from './workers.component';
import { WorkerTableComponent } from './worker-table/worker-table.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyfilterPipe } from '../shared/pipes/myfilter.pipe';

@NgModule({
  declarations: [WorkersComponent, WorkerTableComponent, WorkerEditComponent, MyfilterPipe],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class WorkersModule { }
