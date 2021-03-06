import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'employee-count',
  templateUrl: './employeeCount.component.html',
  styleUrls: ['./employeeCount.component.css']
})
export class EmployeeCountComponent {
  selectedRadioButtonValue: string = 'All';
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: number|undefined;;

  @Input()
  male: number|undefined;

  @Input()
  female: number|undefined;
  OnRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
}
