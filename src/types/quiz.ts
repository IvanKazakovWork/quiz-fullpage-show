export interface Person {
  id: number;
  name: string;
  image: string;
}

export interface Question {
  id: number;
  text: string;
  correctPersonId: number;
  answerText: string;
  answerImage: string;
}

export interface QuizState {
  answeredQuestions: number[];
}
