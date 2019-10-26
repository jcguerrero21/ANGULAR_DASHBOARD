import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
   path: '',
   component: DashboardComponent,
   children: dashboardRoutes
 },
 {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    NotFoundComponent
  ]
})
export class DashboardRoutingModule { }
