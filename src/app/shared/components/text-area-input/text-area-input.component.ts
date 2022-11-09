import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaInputComponent),
      multi: true,
    },
  ],
})
export class TextAreaInputComponent{

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public label: string = '';

  @Input()
  public placeholder: string = '';

  @Input()
  public isRequired!: boolean; // Para poner los * en css a los campos obligatorios

  @Input()
  public isDisabled!: boolean;

  @Input()
  public cols: number =  1;

  @Input()
  public rows: number =  1;

  public value: string = '';

  public changed!: (value: string) => void;

  public touched!: () => void;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl;
  }

  constructor() {}

  public writeValue(value: string): void {
    this.value = value;
  }

  public onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;

    this.changed(value);
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public setRequiredState(isRequired: boolean): void {
    this.isDisabled = isRequired;
  }

}
