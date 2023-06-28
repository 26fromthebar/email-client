import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label = 'Initial label';
  // @Input() control: FormControl = new FormControl();
  @Input() control: any;
  @Input() inputType: string = 'text';

  constructor() {}

  ngOnInit(): void {}

  showInputErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}