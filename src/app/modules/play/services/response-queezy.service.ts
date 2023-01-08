import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Questionnaire } from '@core/models/questionnaire.model';


@Injectable({
  providedIn: 'root'
})
export class ResponseQueezyService {

  cuestionario!: Questionnaire;
  nombreParticipante = '';

  constructor(private _firestore: AngularFirestore) { }

  searchByCode(code: string): Observable<any> {
    return this._firestore.collection('cuestionarios', ref => ref.where('codigo', '==', code)).get();
  }

  setRespuestaUsuario(respuestaUsuario: any): Promise<any> {
    return this._firestore.collection('respuestas').add(respuestaUsuario);
  }

  getRespuestaUsuario(id: string): Observable<any> {
    return this._firestore.collection('respuestas').doc(id).get();
  }

  getRespuestaByIdCuestionario(id: string): Observable<any> {
    return this._firestore.collection('respuestas', ref => ref.where('idCuestionario','==', id)).snapshotChanges()
  }

  deleteRespuestaUsuario(id: string): Promise<any> {
    return this._firestore.collection('respuestas').doc(id).delete();
  }
}
