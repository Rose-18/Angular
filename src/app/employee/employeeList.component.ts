import { Component } from '@angular/core';
@Component({
  selector: 'list-employee',
  templateUrl:'./employeeList.component.html',
  styleUrls: ['./employeeList.component.css']
})
export class EmployeeListComponent {
  employees: any[];
  selectedEmployeeCountRadioButton: string = 'All';
  constructor() {
    this.employees = [
      { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateofBirth: '6/25/1988' },
      { code: 'emp102', name: ' Rose', gender: 'Female', annualSalary: 6500, dateofBirth: '3/19/1998' },
      { code: 'emp103', name: 'Virat', gender: 'Male', annualSalary: 9000, dateofBirth: '11/5/1988' },
      { code: 'emp104', name: ' Geeta', gender: 'Female', annualSalary: 7500, dateofBirth: '1/21/1997' }
    ];
  }
  getEmployees(): void {
    this.employees = [
      { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateofBirth: '6/25/1988' },
      { code: 'emp102', name: 'Rose', gender: 'Female', annualSalary: 6500, dateofBirth: '3/19/1998' },
      { code: 'emp103', name: 'Virat', gender: 'Male', annualSalary: 9000, dateofBirth: '11/5/1988' },
      { code: 'emp104', name: 'Geeta', gender: 'Female', annualSalary: 7500, dateofBirth: '1/21/1997' },
      { code: 'emp105', name: 'Jin', gender: 'Male', annualSalary: 9000, dateofBirth: '12/4/1992' }
    ];
  }
  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void{
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }
  getTotalEmployeesCount(): number {
    return this.employees.length;
  }
  getMaleEmployeesCount(): number {
    return this.employees.filter(e=>e.gender="Male").length;
  }
  getFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender ="Female").length;
  }

  }
  






