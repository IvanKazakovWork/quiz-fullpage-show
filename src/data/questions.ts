import { Question } from "@/types/quiz";
import answer1 from "@/assets/answer-1.jpg";
import answer2 from "@/assets/answer-2.jpg";
import answer3 from "@/assets/answer-3.jpg";
import answer4 from "@/assets/answer-4.jpg";
import answer5 from "@/assets/answer-5.jpg";
import answer6 from "@/assets/answer-6.jpg";
import answer7 from "@/assets/answer-7.jpg";
import answer8 from "@/assets/answer-8.jpg";
import answer9 from "@/assets/answer-9.jpg";
import answer10 from "@/assets/answer-10.jpg";
import answer11 from "@/assets/answer-11.jpg";
import answer12 from "@/assets/answer-12.jpg";
import answer13 from "@/assets/answer-13.jpg";
import answer14 from "@/assets/answer-14.jpg";
import answer15 from "@/assets/answer-15.jpg";
import answer16 from "@/assets/answer-16.jpg";
import answer17 from "@/assets/answer-17.jpg";
import answer18 from "@/assets/answer-18.jpg";
import answer19 from "@/assets/answer-19.jpg";
import answer20 from "@/assets/answer-20.jpg";

// Placeholder для дополнительных изображений ответов (21-30)
const placeholderAnswer = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%23000000'/%3E%3C/svg%3E";

export const questions: Question[] = [
  { id: 1, text: "Факт о человеке 1", correctPersonId: 1, answerText: "Правильный ответ! Это факт о человеке 1.", answerImage: answer1 },
  { id: 2, text: "Факт о человеке 2", correctPersonId: 2, answerText: "Правильный ответ! Это факт о человеке 2.", answerImage: answer2 },
  { id: 3, text: "Факт о человеке 3", correctPersonId: 3, answerText: "Правильный ответ! Это факт о человеке 3.", answerImage: answer3 },
  { id: 4, text: "Факт о человеке 4", correctPersonId: 4, answerText: "Правильный ответ! Это факт о человеке 4.", answerImage: answer4 },
  { id: 5, text: "Факт о человеке 5", correctPersonId: 5, answerText: "Правильный ответ! Это факт о человеке 5.", answerImage: answer5 },
  { id: 6, text: "Факт о человеке 6", correctPersonId: 6, answerText: "Правильный ответ! Это факт о человеке 6.", answerImage: answer6 },
  { id: 7, text: "Факт о человеке 7", correctPersonId: 7, answerText: "Правильный ответ! Это факт о человеке 7.", answerImage: answer7 },
  { id: 8, text: "Факт о человеке 8", correctPersonId: 8, answerText: "Правильный ответ! Это факт о человеке 8.", answerImage: answer8 },
  { id: 9, text: "Факт о человеке 9", correctPersonId: 9, answerText: "Правильный ответ! Это факт о человеке 9.", answerImage: answer9 },
  { id: 10, text: "Факт о человеке 10", correctPersonId: 10, answerText: "Правильный ответ! Это факт о человеке 10.", answerImage: answer10 },
  { id: 11, text: "Факт о человеке 11", correctPersonId: 11, answerText: "Правильный ответ! Это факт о человеке 11.", answerImage: answer11 },
  { id: 12, text: "Факт о человеке 12", correctPersonId: 12, answerText: "Правильный ответ! Это факт о человеке 12.", answerImage: answer12 },
  { id: 13, text: "Факт о человеке 13", correctPersonId: 13, answerText: "Правильный ответ! Это факт о человеке 13.", answerImage: answer13 },
  { id: 14, text: "Факт о человеке 14", correctPersonId: 14, answerText: "Правильный ответ! Это факт о человеке 14.", answerImage: answer14 },
  { id: 15, text: "Факт о человеке 15", correctPersonId: 15, answerText: "Правильный ответ! Это факт о человеке 15.", answerImage: answer15 },
  { id: 16, text: "Факт о человеке 1 (второй)", correctPersonId: 1, answerText: "Правильный ответ! Это ещё один факт о человеке 1.", answerImage: answer16 },
  { id: 17, text: "Факт о человеке 2 (второй)", correctPersonId: 2, answerText: "Правильный ответ! Это ещё один факт о человеке 2.", answerImage: answer17 },
  { id: 18, text: "Факт о человеке 3 (второй)", correctPersonId: 3, answerText: "Правильный ответ! Это ещё один факт о человеке 3.", answerImage: answer18 },
  { id: 19, text: "Факт о человеке 4 (второй)", correctPersonId: 4, answerText: "Правильный ответ! Это ещё один факт о человеке 4.", answerImage: answer19 },
  { id: 20, text: "Факт о человеке 5 (второй)", correctPersonId: 5, answerText: "Правильный ответ! Это ещё один факт о человеке 5.", answerImage: answer20 },
  { id: 21, text: "Факт о человеке 6 (второй)", correctPersonId: 6, answerText: "Правильный ответ! Это ещё один факт о человеке 6.", answerImage: placeholderAnswer },
  { id: 22, text: "Факт о человеке 7 (второй)", correctPersonId: 7, answerText: "Правильный ответ! Это ещё один факт о человеке 7.", answerImage: placeholderAnswer },
  { id: 23, text: "Факт о человеке 8 (второй)", correctPersonId: 8, answerText: "Правильный ответ! Это ещё один факт о человеке 8.", answerImage: placeholderAnswer },
  { id: 24, text: "Факт о человеке 9 (второй)", correctPersonId: 9, answerText: "Правильный ответ! Это ещё один факт о человеке 9.", answerImage: placeholderAnswer },
  { id: 25, text: "Факт о человеке 10 (второй)", correctPersonId: 10, answerText: "Правильный ответ! Это ещё один факт о человеке 10.", answerImage: placeholderAnswer },
  { id: 26, text: "Факт о человеке 11 (второй)", correctPersonId: 11, answerText: "Правильный ответ! Это ещё один факт о человеке 11.", answerImage: placeholderAnswer },
  { id: 27, text: "Факт о человеке 12 (второй)", correctPersonId: 12, answerText: "Правильный ответ! Это ещё один факт о человеке 12.", answerImage: placeholderAnswer },
  { id: 28, text: "Факт о человеке 13 (второй)", correctPersonId: 13, answerText: "Правильный ответ! Это ещё один факт о человеке 13.", answerImage: placeholderAnswer },
  { id: 29, text: "Факт о человеке 14 (второй)", correctPersonId: 14, answerText: "Правильный ответ! Это ещё один факт о человеке 14.", answerImage: placeholderAnswer },
  { id: 30, text: "Факт о человеке 15 (второй)", correctPersonId: 15, answerText: "Правильный ответ! Это ещё один факт о человеке 15.", answerImage: placeholderAnswer },
];
