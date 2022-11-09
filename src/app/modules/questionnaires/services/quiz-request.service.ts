import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizRequestService {

  titleQuiz: string = '';
  description: string = '';

  constructor() { }
}
