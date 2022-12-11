import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    ForgotPasswordPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class AuthModule { }
