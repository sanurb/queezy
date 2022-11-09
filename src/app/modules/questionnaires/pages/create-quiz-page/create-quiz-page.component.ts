import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizRequestService } from '@modules/questionnaires/services/quiz-request.service';

@Component({
  selector: 'app-create-quiz-page',
  templateUrl: './create-quiz-page.component.html',
  styleUrls: ['./create-quiz-page.component.scss']
})
export class CreateQuizPageComponent implements OnInit {

  private fb =  inject(NonNullableFormBuilder)

  createQuizForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  })

  constructor(
    private router: Router,
    private _quizservice: QuizRequestService
  ) { }

  ngOnInit(): void {}

  get title() {
    return this.createQuizForm.get('title');
  }

  get description() {
    return this.createQuizForm.get('description');
  }

  next() {

    const { title, description } = this.createQuizForm.value;

    if (!this.createQuizForm.valid || !title || !description) {
      return;
    }


    this._quizservice.titleQuiz = title;
    this._quizservice.description = description;

    this.router.navigate(['create-question'])
  }

}
