import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";
import { questions } from "@/data/questions";
import { persons } from "@/data/persons";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  questionId: number;
}

export const QuestionCard = ({ questionId }: QuestionCardProps) => {
  const navigate = useNavigate();
  const { answeredQuestions } = useQuiz();
  const isAnswered = answeredQuestions.includes(questionId);
  const question = questions.find((q) => q.id === questionId);
  const person = question ? persons.find((p) => p.id === question.correctPersonId) : null;

  return (
    <button
      onClick={() => !isAnswered && navigate(`/question/${questionId}`)}
      disabled={isAnswered}
      className={cn(
        "group relative aspect-square w-full rounded-xl overflow-hidden",
        "border-2 shadow-card transition-all duration-300",
        isAnswered
          ? "border-primary cursor-default"
          : "border-border/50 hover:scale-105 hover:shadow-glow hover:border-primary cursor-pointer bg-card"
      )}
    >
      {isAnswered && person ? (
        <div className="absolute inset-0">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
            {questionId}
          </div>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-4xl md:text-5xl font-bold text-primary group-hover:text-accent transition-colors">
            {questionId}
          </span>
        </div>
      )}
    </button>
  );
};
