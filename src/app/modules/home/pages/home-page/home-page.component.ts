import { Component } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  error = false;
  errorText = '';
  pin = '';

  constructor(private _snackBar: MatSnackBar) {}

  ingresar() {
    // Validar si el usuario no ingreso ningun caracter

    if (this.pin == '') {
      this.error = true;
      this.errorText = 'Ingresa un PIN antes de jugar';
      this._snackBar.open(this.errorText, 'x', {
        duration: 7000,
        panelClass: ['mat-toolbar', 'mat-warn'],
      });
    }
  }

  removeError() {
    this.error = false;
  }
}
