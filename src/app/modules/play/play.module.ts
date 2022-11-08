import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayPageComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule,
    FormsModule
  ]
})
export class PlayModule { }
