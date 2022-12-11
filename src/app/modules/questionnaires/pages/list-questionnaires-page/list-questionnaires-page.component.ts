import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Questionnaire } from '@core/models/questionnaire.model';
import { Subscription } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { QuizRequestService } from '@modules/questionnaires/services/quiz-request.service';

@Component({
  selector: 'app-list-questionnaires-page',
  templateUrl: './list-questionnaires-page.component.html',
  styleUrls: ['./list-questionnaires-page.component.scss'],
})
export class ListQuestionnairesPageComponent implements OnInit, OnDestroy{
  suscriptionUser: Subscription = new Subscription();
  suscriptionQuizz: Subscription = new Subscription();
  listCuestionarios: Questionnaire[] = [];
  loading = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private _quizService: QuizRequestService,
    private toast: HotToastService,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.suscriptionUser = this.afAuth.user.subscribe(user => {
      console.log(user);
      if (user) {
        // cargar los cuestionarios
        this.getCuestionarios(user.uid);

      } else {
        this.router.navigate(['/play']);
      }
    })
  }

  ngOnDestroy(): void {
    this.suscriptionUser.unsubscribe();
    this.suscriptionQuizz.unsubscribe();
  }

  getCuestionarios(uid: string) {
    this.suscriptionQuizz ==
      this._quizService.getCuestionarioByIdUser(uid).subscribe(
        (data) => {
          this.listCuestionarios = [];
          this.loading = false;
          data.forEach((element: any) => {
            this.listCuestionarios.push({
              id: element.payload.doc.id,
              ...element.payload.doc.data(),
            });
          });
        },
        (error) => {
          console.log(error);
          this.toast.error('Opss.. ocurrio un error');
          this.loading = false;
        }
      );
  }

}
