import { TableComponent } from './table/table.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, children: [
    { path: "", component: InicioComponent},
    { path: "reportes", component: ReportesComponent},
    { path: "table", component: TableComponent},
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
