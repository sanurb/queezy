import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '@core/models/question.model';
import { Questionnaire } from '@core/models/questionnaire.model';
import { User } from '@core/interface/user.model';
import { QuizRequestService } from '@modules/questionnaires/services/quiz-request.service';
import { HotToastService } from '@ngneat/hot-toast';
import { nanoid } from 'nanoid';
@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss'],
})
export class ListQuestionsComponent implements OnInit {
  listPreguntas: Question[] = [];
  tituloCuestionario: string = '';
  descripcionCuestionario: string = '';
  loading = false;

  constructor(
    private _quizService: QuizRequestService,
    private router: Router,
    private toast: HotToastService,
  ) {
    this._quizService.getPreguntas().subscribe((data) => {
      this.listPreguntas.push(data);
      console.log(this.listPreguntas);
    });
    this.tituloCuestionario = this._quizService.titleQuiz;
    this.descripcionCuestionario = this._quizService.descripcion;
  }

  ngOnInit(): void {
    // if(this.tituloCuestionario === '' || this.descripcionCuestionario === ''){
    //   this.router.navigate([''])
    // }
  }

  eliminarPregunta(index: number) {
    this.listPreguntas.splice(index, 1);
  }

  finalizarCuestionario() {
    const codigo = this.generarCodigo();
    const usuario: User = JSON.parse(localStorage.getItem('user') || '{}');

    const cuestionario: Questionnaire = {
      uid: usuario.uid,
      titulo: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      codigo: codigo,
      cantPreguntas: this.listPreguntas.length,
      fechaCreacion: new Date(),
      listPreguntas: this.listPreguntas
    }
    console.log(cuestionario);

    this.loading = true;
    this._quizService.crearCuestionario(cuestionario).then(data => {
      this.toast.success('El Cuestionario fue registrado con exito!')
      this.router.navigate([''])
    }).catch(error => {
      this.loading = false;
      console.log(error);
    })
  }

  generarCodigo(): string {
    return nanoid(6).toUpperCase();
  }

}


