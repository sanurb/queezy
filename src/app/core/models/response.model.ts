export class Response {
  description: string;
  isCorrect: boolean;

  constructor(description: string, isCorrect: boolean) {
      this.description = description
      this.isCorrect = isCorrect
  }
}
