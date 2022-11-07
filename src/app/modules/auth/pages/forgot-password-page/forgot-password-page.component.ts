import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  public forgotPwdForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.generateForgotPwdForm();
  }

  public generateForgotPwdForm(): void {
    this.forgotPwdForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
  }

}
