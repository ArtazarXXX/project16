import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { WorkersComponent } from './workers/workers.component';

const routes: Routes = [
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'workers',
    loadChildren: () =>
      import('./workers/workers.module').then((m) => m.WorkersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
