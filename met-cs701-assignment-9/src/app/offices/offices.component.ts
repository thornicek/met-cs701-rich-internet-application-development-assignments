import { Component, OnInit } from '@angular/core';
import { OFFICES } from '../listOfOffices';
import { Office } from '../offices';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {
  
  offices = OFFICES;
  selectedoffice?: Office;
  onSelect(office: Office): void{
    this.selectedoffice = office;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
 

}
