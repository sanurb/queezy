import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { RouterModule } from '@angular/router';
import { TextAreaInputComponent } from './components/text-area-input/text-area-input.component';
@NgModule({
  declarations: [...fromComponents.components, TextAreaInputComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [FormsModule, ...fromComponents.components]
})
export class SharedModule { }
