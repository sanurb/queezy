import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { InputComponent } from './components/input/input.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@NgModule({
  declarations: [...fromComponents.components, InputComponent, FieldErrorsComponent, PasswordInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, ...fromComponents.components]
})
export class SharedModule { }
