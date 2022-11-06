import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {

  @Input()
	public formField!: FormControl;

  constructor() { }

  getName(formField: FormControl): string | null {
    return Object.entries(formField.parent?.controls ?? []).find(([_, value]) => value === formField)?.[0] ?? null;
  }

}
