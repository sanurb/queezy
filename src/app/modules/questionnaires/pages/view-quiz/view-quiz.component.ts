import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questionnaire } from '@core/models/questionnaire.model';
import { QuizRequestService } from '@modules/questionnaires/services/quiz-request.service';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss'],
})
export class ViewQuizComponent implements OnInit{
  id: string;
  loading = false;
  cuestionario: Questionnaire | undefined;

  constructor(
    private _queezyService: QuizRequestService,
    private aRoute: ActivatedRoute
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id') || '';
  }
  ngOnInit(): void {
    this.obtenerQuizz();
  }

  obtenerQuizz() {
    this.loading = true;

    this._queezyService.getCuestionario(this.id).subscribe(
      (doc) => {
        this.cuestionario = doc.data();
        console.log("🚀 ~ file: ver-cuestionario.component.ts:30 ~ VerCuestionarioComponent ~ this._quizzService.getCuestionario ~ this.cuestionario", this.cuestionario)
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
