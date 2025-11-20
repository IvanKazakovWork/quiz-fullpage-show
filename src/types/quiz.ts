export interface Question {
  id: number;
  text: string;
  isCorrect: boolean;
  answerText: string;
  answerImage: string;
}

export interface QuizState {
  answeredQuestions: number[];
}
