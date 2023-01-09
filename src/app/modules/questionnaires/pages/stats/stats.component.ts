import { ResponseQueezyService } from './../../../play/services/response-queezy.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit, OnDestroy {
  id: string;
  loading = false;
  listRespuestasUsuario: any[] = [];
  respuestasQuizz: Subscription = new Subscription();

  constructor(
    private aRoute: ActivatedRoute,
    private _userResponseService: ResponseQueezyService,
    private toast: HotToastService,
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getRespuestaByIdCuestionario();
  }

  ngOnDestroy(): void {
    this.respuestasQuizz.unsubscribe();
  }

  getRespuestaByIdCuestionario() {
    this.loading = true;

    this.respuestasQuizz = this._userResponseService
      .getRespuestaByIdCuestionario(this.id)
      .subscribe(
        (data) => {
          this.loading = false;
          this.listRespuestasUsuario = [];
          data.forEach((element: any) => {
            this.listRespuestasUsuario.push({
              id: element.payload.doc.id,
              ...element.payload.doc.data(),
            });
          });
          console.log(this.listRespuestasUsuario);
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
  }

  eliminarRespuestaUsuario(id: string) {
    this.loading = true;

    this._userResponseService.deleteRespuestaUsuario(id).then(
      () => {
        this.loading = false;
        this.toast.info('La respuesta fue eliminada');
      },
      (error) => {
        console.log(error);
        this.toast.error('Opss.. ocurrio un error');
      }
    );
  }
}
