import { style } from '@angular/animations';
import { Component } from '@angular/core'
@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
  
})
export class EmployeeComponent {
  firstName: string='Rose' ;
  lastName: string='Alex' ;
  gender: string='Female' ;
  age: number = 23;
  columnspan: number = 2;
  showDetails: boolean = false;
  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
