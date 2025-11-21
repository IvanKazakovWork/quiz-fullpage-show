import { Question } from "@/types/quiz";
import answer1 from "@/assets/answer-1.jpg";
import answer2 from "@/assets/answer-2.jpg";
import answer3 from "@/assets/answer-1.jpg";
import answer4 from "@/assets/answer-1.jpg";
import answer5 from "@/assets/answer-1.jpg";
import answer6 from "@/assets/answer-1.jpg";
import answer7 from "@/assets/answer-1.jpg";
import answer8 from "@/assets/answer-1.jpg";
import answer9 from "@/assets/answer-1.jpg";
import answer10 from "@/assets/answer-1.jpg";
import answer11 from "@/assets/answer-1.jpg";
import answer12 from "@/assets/answer-1.jpg";
import answer13 from "@/assets/answer-1.jpg";
import answer14 from "@/assets/answer-1.jpg";
import answer15 from "@/assets/answer-1.jpg";
import answer16 from "@/assets/answer-1.jpg";
import answer17 from "@/assets/answer-1.jpg";
import answer18 from "@/assets/answer-1.jpg";
import answer19 from "@/assets/answer-1.jpg";
import answer20 from "@/assets/answer-20.jpg";

// Placeholder для дополнительных изображений ответов (21-30)
const placeholderAnswer = answer20;

export const questions: Question[] = [
  { id: 1, text: "До поступления в университет жила в гетто-районе, фристайлила и писала рэп с друзьями, ходила на разборки и меня один раз чуть не убили", correctPersonId: 1, answerText: "Правильный ответ! Это Даша Симонова!.", answerImage: answer2 },
  { id: 2, text: "За 2 года собрала огромную коллекцию баночек из под каплей для носа", correctPersonId: 2, answerText: "Правильный ответ! Это факт о Вике!", answerImage: answer1 },
  { id: 3, text: "Дважды брала академ, трижды на втором курсе", correctPersonId: 3, answerText: "Правильный ответ!", answerImage: answer3 },
  { id: 4, text: "Могла поехать на Турслет только из-за медицинской корочки, но все равно не взяли из-за брезгливости (нытья, насекомых)", correctPersonId: 4, answerText: "Правильный ответ!", answerImage: answer4 },
  { id: 5, text: "Главный фанат московского Спартака", correctPersonId: 5, answerText: "Правильный ответ!", answerImage: answer5 },
  { id: 6, text: "В детстве носил семейные адидасы вместе с папой", correctPersonId: 6, answerText: "Правильный ответ!", answerImage: answer6 },
  { id: 7, text: "Год притворялась Ритой", correctPersonId: 7, answerText: "Правильный ответ!", answerImage: answer7 },
  { id: 8, text: "Ее собака чемпион России, поэтому она пошла в проф, чтобы мама обратила на неё внимание", correctPersonId: 8, answerText: "Правильный ответ!", answerImage: answer8 },
  { id: 9, text: "Разговаривает как девушка из мема «Так-то вот так-то я решила, сами посудите»", correctPersonId: 9, answerText: "Правильный ответ!", answerImage: answer9 },
  { id: 10, text: "На приемной кампании я упал с кучей заявлений и ребятам пришлось их подписывать заново", correctPersonId: 10, answerText: "Правильный ответ!", answerImage: answer10 },
  { id: 11, text: "В 20 лет ездит на бмв своего молодого человека, просто потому разбила свою машину", correctPersonId: 11, answerText: "Правильный ответ!", answerImage: answer11 },
  { id: 12, text: "Все детство провела в травме, но перелом получила только в 20 лет", correctPersonId: 12, answerText: "Правильный ответ!", answerImage: answer12 },
  { id: 13, text: "Ни разу не учился в бюджетных образовательных организациях", correctPersonId: 13, answerText: "Правильный ответ!", answerImage: answer13 },
  { id: 14, text: "На 1 курсе стал руководителем Волонтерского Центра", correctPersonId: 14, answerText: "Правильный ответ!", answerImage: answer14 },
  { id: 15, text: "Работал в Газпроме чтобы познакомится с Валей карнавала, а теперь работает в Росатоме для фотки с Путиным", correctPersonId: 15, answerText: "Правильный ответ!", answerImage: answer15 },
  { id: 16, text: "Училась в женской гимназии, и 7 лет провела только с девочками.", correctPersonId: 1, answerText: "Правильный ответ! Это ещё один факт о Даше Симоновой.", answerImage: answer16 },
  { id: 17, text: "До 7 лет думала, что салют в день победы запускают для меня в честь дня рождения", correctPersonId: 2, answerText: "Правильный ответ!", answerImage: answer17 },
  { id: 18, text: "Являюсь импостером на другом профбюро", correctPersonId: 3, answerText: "Правильный ответ!", answerImage: answer18 },
  { id: 19, text: "Как только стала заместителем председателя комиссии профкома политеха, ее тут же расформировали", correctPersonId: 4, answerText: "Правильный ответ!", answerImage: answer19 },
  { id: 20, text: "Сегодня ровно год как он бросил курить", correctPersonId: 5, answerText: "Правильный ответ!", answerImage: answer20 },
  { id: 21, text: "У человека 4 образования", correctPersonId: 6, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 22, text: "Помогла открыть другу бизнес, продавая яблоки на рынке", correctPersonId: 7, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 23, text: "В 2018 растила палочников у себя дома", correctPersonId: 8, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 24, text: "До этого года купался только в море, на турсике был её первый пресный водоем", correctPersonId: 9, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 25, text: "В детстве мама привязывала ключи к его куртке, чтобы он ничего не терял. Сейчас ему много лет и он привязвыает ключи к штанам", correctPersonId: 10, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 26, text: "У неё своя машишна, но... сломанная", correctPersonId: 11, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 27, text: "Боюсь очень тихого шёпота", correctPersonId: 12, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 28, text: "Постоянно всё просыпает", correctPersonId: 13, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 29, text: "Топ-1 монтажер мира", correctPersonId: 14, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
  { id: 30, text: "У него 2 абсолютно разных телеграмм канала: для мамы и для друзей", correctPersonId: 15, answerText: "Правильный ответ!", answerImage: placeholderAnswer },
];
