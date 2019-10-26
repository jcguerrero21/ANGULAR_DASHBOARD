import { Routes } from '@angular/router';
import { ListadoComponent } from '../clientes/listado/listado.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const dashboardRoutes: Routes = [
    {path: '', redirectTo: 'listado' },
    {path: 'listado', component: ListadoComponent },
    {path: '404', component: NotFoundComponent }
];