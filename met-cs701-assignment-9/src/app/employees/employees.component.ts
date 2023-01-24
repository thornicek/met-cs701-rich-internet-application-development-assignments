import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../listOfEmployees';
import { Employee } from '../employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  
  employees = EMPLOYEES; 
  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
  this.selectedEmployee = employee; 
}
  constructor() { }

  ngOnInit(): void {
  }
  key: string = 'employeeNumber';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
