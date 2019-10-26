import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListadoComponent } from './listado/listado.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

//Modulos personalizados
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class ClientesModule { }
