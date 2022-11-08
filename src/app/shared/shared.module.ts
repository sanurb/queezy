import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [...fromComponents.components, PageNotFoundComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, ...fromComponents.components]
})
export class SharedModule { }
