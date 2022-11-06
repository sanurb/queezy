import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  error = false;
  errorText = '';
  pin = '';

  constructor() { }

  ngOnInit(): void {
  }

  ingresar() {
    // Validar si el usuario no ingreso ningun caracter

    if(this.pin == '') {
      this.errorText = 'Por favor ingrese un pin'
      this.error = true;

      setTimeout(() => {
        this.error = false
      },3000);
    }
  }

}
