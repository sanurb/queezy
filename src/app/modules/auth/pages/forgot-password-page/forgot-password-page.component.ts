import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { ErrorAuthService } from '@modules/auth/services/error-auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  public forgotPwdForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private _errorService: ErrorAuthService
  ) { }

  ngOnInit(): void {
  }


  get email() {
    return this.forgotPwdForm.get('email');
  }

  submit(): void {
    const { email } = this.forgotPwdForm.value;

    if (!this.forgotPwdForm.valid || !email) {
      return;
    }

    this.authService
      .resetPassword(email)
      .pipe(
        this.toast.observe({
          success: 'Enviamos un mensaje por correo electrónico para restablecer su contraseña. ',
          loading: 'Espera...',
          error: ({ code }) => `Error: ${ this._errorService.error(code) } `,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/auth/login']);
      });
  }

}
