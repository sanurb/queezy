import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from './emailvalidator';
import { UniversalValidators } from 'ngx-validators';
import { AuthService } from '@modules/auth/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { ErrorAuthService } from '@modules/auth/services/error-auth.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {

  private fb =  inject(NonNullableFormBuilder)
  public registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    email_confirmation: [
      '',
      [
        Validators.required,
        Validators.email,
        EmailValidator('email'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100),
        UniversalValidators.noWhitespace
      ],
    ],
  });

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    private _errorService: ErrorAuthService
  ) { }

  ngOnInit(): void {}

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  submit(): void {
    const { email, password } = this.registerForm.value;

    if (!this.registerForm.valid || !password || !email) {
      return;
    }

    this.authService
    .signUp(email, password)
    .pipe(
      this.toast.observe({
        loading: 'Registrando...',
        success: 'Felicitaciones! se ha registrado con exito',
        error: ({ code }) => `Error: ${ this._errorService.error(code) } `,
      })
    )
    .subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
