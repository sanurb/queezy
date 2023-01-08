import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseQueezyService } from '@modules/play/services/response-queezy.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-enter-name-page',
  templateUrl: './enter-name-page.component.html',
  styleUrls: ['./enter-name-page.component.scss'],
})
export class EnterNamePageComponent implements OnInit {
  nickname = '';
  error = false;

  constructor(
    private _snackBar: MatSnackBar,
    private _responseQueezyService: ResponseQueezyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateRefresh();
  }

  enterNickname() {
    if (this.nickname === '') {
      this.displayErrorSnack('Escribe un nombre para continuar.');
      return;
    }
    this._responseQueezyService.nombreParticipante = this.nickname;
    this.router.navigate(['/play/startCounter']);
  }

  displayErrorSnack(text: string) {
    this.error = true;
    this._snackBar.open(text, 'x', {
      duration: 7000,
      panelClass: ['app-notification-error'],
    });
  }

  removeError() {
    this.error = false;
  }

  validateRefresh() {
    if (this._responseQueezyService.cuestionario === undefined) {
      this.router.navigate(['/play']);
    }
  }
}
