import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaire } from '@core/models/questionnaire.model';
import { ResponseQueezyService } from '@modules/play/services/response-queezy.service';

@Component({
  selector: 'app-take-quiz-page',
  templateUrl: './take-quiz-page.component.html',
  styleUrls: ['./take-quiz-page.component.scss'],
})
export class TakeQuizPageComponent implements OnInit, OnDestroy {
  cuestionario!: Questionnaire;
  nombreParticipante = '';
  indexPregunta = 0;
  segundos = 0;
  setInterval: any;
  loading = false;

  // Respuesta usuario
  opcionSeleccionada: any;
  indexSeleccionado: any;
  cantidadCorrectas = 0;
  cantidadIncorrectas = 0;
  puntosTotales = 0;
  listRespuestaUsuario: any[] = [];

  constructor(
    private _responseQueezyService: ResponseQueezyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cuestionario = this._responseQueezyService.cuestionario;
    this.nombreParticipante = this._responseQueezyService.nombreParticipante;
    this.validateRefresh();
    this.iniciarContador();
  }

  ngOnDestroy(): void {
    clearInterval(this.setInterval);
  }

  validateRefresh() {
    if (this.cuestionario === undefined) {
      this.router.navigate(['/']);
    }
  }

  obtenerSegundos(): number {
    return this.segundos;
  }

  obtenerTitulo(): string {
    return this.cuestionario.listPreguntas[this.indexPregunta].titulo;
  }

  iniciarContador() {
    this.segundos = this.cuestionario.listPreguntas[this.indexPregunta].segundos;

    this.setInterval = setInterval(() => {
      if (this.segundos === 0) {
        this.agregarRespuesta();
      }

      this.segundos = this.segundos - 1;
    }, 1000);
  }

  respuestaSeleccionada(respuesta: any, index: number) {
    this.opcionSeleccionada = respuesta;
    this.indexSeleccionado = index;
  }

  addClassOption(respuesta: any): string {
    if (respuesta === this.opcionSeleccionada) {
      return 'classSeleccionada';
    } else {
      return '';
    }
  }

  siguiente() {
    clearInterval(this.setInterval);
    this.agregarRespuesta();
    this.iniciarContador();
  }

  agregarRespuesta() {
    // Incrementamos contadores(Correcta y incorrecta)
    this.contadorCorrectaIncorrecta();

    // Creamos objeto respuesta y lo agregamos al array
    const respuestaUsuario: any = {
      titulo: this.cuestionario.listPreguntas[this.indexPregunta].titulo,
      puntosObtenidos: this.obtenemosPuntosPregunta(),
      segundos: this.obtenemosSegundos(),
      indexRespuestaSeleccionada: this.obtenemosIndexSeleccionado(),
      listRepuestas: this.cuestionario.listPreguntas[this.indexPregunta].listRespuestas,
    };
    this.listRespuestaUsuario.push(respuestaUsuario);

    this.opcionSeleccionada = undefined;
    this.indexSeleccionado = undefined;

    // Validamos si es la ultima pregunta
    if (this.cuestionario.listPreguntas.length - 1 === this.indexPregunta) {
      // guardamos las respuestas en firebase
      this.guardamosRespuestaCuestionario();
    } else {
      this.indexPregunta++;
      this.segundos = this.cuestionario.listPreguntas[this.indexPregunta].segundos;
    }
  }

  obtenemosPuntosPregunta(): number {
    // si el usuario no selecciono ninguna pregunta..
    if (this.opcionSeleccionada === undefined) {
      return 0;
    }

    const puntosPregunta =
      this.cuestionario.listPreguntas[this.indexPregunta].puntos;

    // Validamos si la pregunta es correcta
    if (this.opcionSeleccionada.esCorrecta == true) {
      // incrementamos la variable puntosTotales..
      this.puntosTotales = this.puntosTotales + puntosPregunta;
      return puntosPregunta;
    } else {
      return 0;
    }
  }

  obtenemosSegundos(): string {
    // Validamos si el usuario no respondio la pregunta
    if (this.opcionSeleccionada === undefined) {
      return 'NO RESPONDIO';
    } else {
      const segundosPregunta = this.cuestionario.listPreguntas[this.indexPregunta].segundos;
      const segundosRespondidos = segundosPregunta - this.segundos;

      return segundosRespondidos.toString();
    }
  }

  obtenemosIndexSeleccionado(): any {
    if (this.opcionSeleccionada === undefined) {
      return '';
    } else {
      return this.indexSeleccionado;
    }
  }

  contadorCorrectaIncorrecta() {
    // Validamos si el usuario selecciono pregunta
    if (this.opcionSeleccionada === undefined) {
      this.cantidadIncorrectas++;
      return;
    }

    // Preguntamos si la opcion es INCORRECTA
    if (this.opcionSeleccionada.esCorrecta === false) {
      this.cantidadIncorrectas++;
    } else {
      this.cantidadCorrectas++;
    }
  }

  guardamosRespuestaCuestionario() {
    const respuestaCuestionario: any = {
      idCuestionario: this.cuestionario.id,
      nombreParticipante: this.nombreParticipante,
      fecha: new Date(),
      cantidadPreguntas: this.cuestionario.cantPreguntas,
      cantidadCorrectas: this.cantidadCorrectas,
      cantidadIncorrectas: this.cantidadIncorrectas,
      puntosTotales: this.puntosTotales,
      listRespuestaUsuario: this.listRespuestaUsuario,
    };

    this.loading = true;
    // Alamacenamos la respuesta en firebase
    this._responseQueezyService.setRespuestaUsuario(respuestaCuestionario).then(
      (data) => {
        console.log(data);

        // redireccionamos al proximo componente
        this.router.navigate(['/play/userResponse', data.id]);
      },
      (error) => {
        console.log(error);
        this.router.navigate(['/']);
      }
    );
  }
}
