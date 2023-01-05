import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
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
      setTimeout(() => this.error = false, 3200);
      this.errorText = 'Ingresa un PIN antes de jugar';
      this._snackBar.open(this.errorText, 'x', {
        duration: 7000,
        panelClass: ['app-notification-error'],
      });
    }
  }

  removeError() {
    this.error = false;
  }
}
