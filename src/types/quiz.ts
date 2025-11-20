export interface Question {
  id: number;
  text: string;
  isCorrect: boolean;
}

export interface QuizState {
  answeredQuestions: number[];
}
