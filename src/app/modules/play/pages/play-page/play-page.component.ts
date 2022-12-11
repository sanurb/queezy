import { Component, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
  styleUrls: ['./play-page.component.scss']
})
export class PlayPageComponent{
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
