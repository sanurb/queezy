import { Component, inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { QuizRequestService } from '@modules/questionnaires/services/quiz-request.service';
import { Response } from '@core/models/response.model';
import { Question } from '@core/models/question.model';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit {

  private fb =  inject(NonNullableFormBuilder)

  addQuestionForm = this.fb.group({
    title: ['', Validators.required],
    seconds: [10, Validators.required],
    points: [1000, Validators.required],
    response1: this.fb.group({
      title: ['', Validators.required],
      isCorrect: [false, Validators.required]
    }),
    response2: this.fb.group({
      title: ['', Validators.required],
      isCorrect: [false, Validators.required]
    }),
    response3: this.fb.group({
      title: '',
      isCorrect: false
    }),
    response4: this.fb.group({
      title: '',
      isCorrect: false
    }),
  })

  constructor(
    private _quizService: QuizRequestService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log('🚀 ~ file: create-questions.component.ts - title', this._quizService.titleQuiz)
    console.log('🚀 ~ file: create-questions.component.ts - descripcion', this._quizService.description)
  }

  get seconds() {
    return this.addQuestionForm.get('seconds')?.value!;
  }

  get points() {
    return this.addQuestionForm.get('points')?.value!;
  }

  addQuestion(){

    if(this.addQuestionForm.invalid || this.todasIncorrectas()) {
      this._snackBar.open('Porfavor ingrese todos los campos', 'x', {
        duration: 6000,
        panelClass: ['mat-toolbar', 'mat-warn'],
      });
      return;
    }

    let listRespuestas: Response[] = [];

    const rtaTitulo1 = this.addQuestionForm.get('response1')?.get('title')?.value!;
    const esCorrecta1 = this.addQuestionForm.get('response1')?.get('isCorrect')?.value!;
    // Obtenemos response 1
    const respuesta1: Response = {
      description: rtaTitulo1,
      isCorrect: esCorrecta1,
    }

    listRespuestas.push(respuesta1);

    // Obtenemos respuesta 2
    const rtaTitulo2 = this.addQuestionForm.get('response2')?.get('title')?.value!;
    const esCorrecta2 = this.addQuestionForm.get('response2')?.get('isCorrect')?.value!;

    const respuesta2: Response = {
      description: rtaTitulo2,
      isCorrect: esCorrecta2,
    }

    listRespuestas.push(respuesta2);


    // Obtenemos respuesta 3
    const rtaTitulo3= this.addQuestionForm.get('response3')?.get('title')?.value!;
    const esCorrecta3 = this.addQuestionForm.get('response3')?.get('isCorrect')?.value!;

    const respuesta3: Response = {
      description: rtaTitulo3,
      isCorrect: esCorrecta3,
    }

    if(rtaTitulo3 !== ''){
      listRespuestas.push(respuesta3);
    }

    // Obtenemos respuesta 4
    const rtaTitulo4 = this.addQuestionForm.get('response4')?.get('title')?.value!;
    const esCorrecta4 = this.addQuestionForm.get('response4')?.get('isCorrect')?.value!;

    const respuesta4: Response = {
      description: rtaTitulo4,
      isCorrect: esCorrecta4,
    }

    if(rtaTitulo4 !== ''){
      listRespuestas.push(respuesta4);
    }

    // Creamos pregunta
    const tituloPregunta = this.addQuestionForm.get('title')?.value!;
    const segundos = this.addQuestionForm.get('seconds')?.value!;
    const puntos = this.addQuestionForm.get('points')?.value!;

    const pregunta: Question = {
      titulo: tituloPregunta,
      segundos: segundos,
      puntos: puntos,
      listRespuestas: listRespuestas
    }

    this._quizService.agregarPregunta(pregunta);
    this.reset();
  }

  reset() {
    this.addQuestionForm.patchValue({
      title: '',
      seconds: 10,
      points: 1000,
      response1: {
        title: '',
        isCorrect: false
      },
      response2: {
        title: '',
        isCorrect: false
      },
      response3: {
        title: '',
        isCorrect: false
      },
      response4: {
        title: '',
        isCorrect: false
      },
    })
  }

  todasIncorrectas() {
    const array = ['response1','response2','response3','response4'];

    for (let i = 0; i < array.length; i++) {
        if(this.addQuestionForm.get(array[i])?.get('isCorrect')?.value == true) {
          return false;
        }
    }

    return true;
  }

  sumarRestarSegundos(numero: number) {

    if(this.seconds <= 5 ) {
      return;
    }

    this.addQuestionForm.patchValue({
      seconds: this.seconds + numero
    })
  }

  esCorrecta(index: string) {
    let stringRta = 'response';
    let nroRespuesta = stringRta.concat(index);
    this.setFalseRespuestas(nroRespuesta)

    const estadoRta = this.obtenerEstadoRespuesta(nroRespuesta)

    this.addQuestionForm.get(nroRespuesta)?.patchValue({
      isCorrect: !estadoRta
    })
  }

  obtenerEstadoRespuesta(nroRespuesta: string): boolean {
    return this.addQuestionForm.get(nroRespuesta)?.get('isCorrect')?.value;
  }

  setFalseRespuestas(nroRespuestas: string) {
    const array = ['response1','response2','response3','response4'];

    // Recorremos el array y seteamos TOAS las respuestas como false MENOS la que el usuario selecciono
    for (let i = 0; i < array.length; i++) {
      if(array[i] !== nroRespuestas) {
        this.addQuestionForm.get(array[i])?.patchValue({
          isCorrect: false
        })
      }

    }

  }

}
