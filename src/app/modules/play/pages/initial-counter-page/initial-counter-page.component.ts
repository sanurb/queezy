import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-counter-page',
  templateUrl: './initial-counter-page.component.html',
  styleUrls: ['./initial-counter-page.component.scss'],
})
export class InitialCounterPageComponent implements OnInit, OnDestroy {
  counter = 3;
  setInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.playcounterInicial();
  }

  ngOnDestroy(): void {
    clearInterval(this.setInterval);
  }

  playcounterInicial() {
    this.setInterval = setInterval(() => {
      console.log('hola');
      if (this.counter === 0) {
        this.router.navigate(['/play/takeQuiz']);
      }

      this.counter = this.counter - 1;
    }, 1000);
  }
}
