import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
