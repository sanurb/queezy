import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:forwardRef(
        ()=>InputComponent
      ),
      multi:true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  private readonly controlContainer = inject(ControlContainer);

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

	public value: string = '';

	public changed!: ( value: string ) => void;

	public touched!: () => void;


	get formField (): FormControl {
		return this.controlContainer.control?.get(this.fieldName) as FormControl;
	}

	public writeValue ( value: string ): void {
		this.value = value;
	}

	public onChange ( event: Event ): void {
		const value: string =
			( <HTMLInputElement>event.target ).value;

		this.changed( value );
	}

	public registerOnChange ( fn: any ): void {
		this.changed = fn;
	}

	public registerOnTouched ( fn: any ): void {
		this.touched = fn;
	}

	public setDisabledState ( isDisabled: boolean ): void {
		this.isDisabled = isDisabled;
	}

  public setRequiredState ( isRequired: boolean ): void {
		this.isDisabled = isRequired;
	}


}
