import { Question } from "./question.model";

export class Questionnaire {
    id?: string;
    uid: string;
    titulo: string;
    descripcion: string;
    codigo: string;
    cantPreguntas: number;
    fechaCreacion: Date;
    listPreguntas: Question[];

    constructor(uid: string, titulo: string, descripcion: string, codigo: string, cantPreguntas: number,
        fechaCreacion: Date, listPreguntas: Question[]) {
        this.uid = uid;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.cantPreguntas = cantPreguntas;
        this.fechaCreacion = fechaCreacion;
        this.listPreguntas = listPreguntas;
    }
}
