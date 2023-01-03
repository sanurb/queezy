// v9 compat packages are API compatible with v8 code
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
// Models
import { Question } from '@core/models/question.model';
import { Questionnaire } from '@core/models/questionnaire.model';

@Injectable({
  providedIn: 'root',
})
export class QuizRequestService {
  titleQuiz: string = '';
  descripcion: string = '';
  private pregunta$ = new Subject<Question>();

  constructor(private _firestore: AngularFirestore) {}

  agregarPregunta(pregunta: Question) {
    this.pregunta$.next(pregunta);
  }

  getPreguntas(): Observable<Question> {
    return this.pregunta$.asObservable();
  }

  crearCuestionario(cuestionario: Questionnaire): Promise<any> {
    return this._firestore.collection('cuestionarios').add(cuestionario);
  }

  getCuestionarioByIdUser(uid: string): Observable<any> {
    return this._firestore
      .collection('cuestionarios', (ref) => ref.where('uid', '==', uid))
      .snapshotChanges();
  }

  eliminarCuestionario(idCuestionario: string): Promise<any> {
    return this._firestore
      .collection('cuestionarios')
      .doc(idCuestionario)
      .delete();
  }

  getCuestionario(id: string): Observable<any> {
    return this._firestore.collection('cuestionarios').doc(id).get();
  }
}
