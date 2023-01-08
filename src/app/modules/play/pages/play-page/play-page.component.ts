import { Component, enableProdMode } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Questionnaire } from '@core/models/questionnaire.model';
import { ResponseQueezyService } from '@modules/play/services/response-queezy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss'],
})
export class PlayPageComponent {
  error = false;
  errorText = '';
  pin = '';
  loading = false;
  suscriptionCode: Subscription = new Subscription();

  constructor(
    private _snackBar: MatSnackBar,
    private responseQueezy: ResponseQueezyService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.suscriptionCode.unsubscribe();
  }

  ingresar() {
    // Validar si el usuario no ingreso ningun caracter
    if (this.pin == '') {
      this.errorText = 'Ingresa un PIN antes de jugar';
      this.displayErrorSnack(this.errorText);
      return;
    }

    this.loading = true;
    this.suscriptionCode = this.responseQueezy
      .searchByCode(this.pin)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.loading = false;
          if (data.empty) {
            this.errorText = 'PIN invalido';
            this.displayErrorSnack(this.errorText);
          } else {
            data.forEach((element: any) => {
              const cuestionario: Questionnaire = {
                id: element.id,
                ...element.data(),
              };
              this.responseQueezy.cuestionario = cuestionario;
              // Redireccionar al proximo componente
              this.router.navigate(['play/join']);
            });
          }
        },
        error: (e) => {
          console.log(e);
          this.loading = false;
        },
      });
  }

  displayErrorSnack(text: string) {
    this.error = true;
    setTimeout(() => (this.error = false), 3200);
    this._snackBar.open(text, 'x', {
      duration: 7000,
      panelClass: ['app-notification-error'],
    });
  }

  removeError() {
    this.error = false;
  }
}
