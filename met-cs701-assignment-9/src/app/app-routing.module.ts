import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { OfficesComponent } from './offices/offices.component';




const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'offices', component: OfficesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
