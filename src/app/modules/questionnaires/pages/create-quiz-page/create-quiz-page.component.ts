import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

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

  constructor() { }

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
  }

}
