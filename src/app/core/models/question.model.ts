import { Response } from '@core/models/response.model';

export class Question {
    titulo: string;
    puntos: number;
    segundos: number;
    listRespuestas: Response[];

    constructor(titulo: string, puntos: number, segundos: number, listRespuestas: Response[]){
        this.titulo = titulo;
        this.puntos = puntos;
        this.segundos = segundos;
        this.listRespuestas = listRespuestas;
    }
}
