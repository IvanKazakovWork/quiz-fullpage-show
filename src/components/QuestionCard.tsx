import { useNavigate } from "react-router-dom";
import { useQuiz } from "@/contexts/QuizContext";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  questionId: number;
}

export const QuestionCard = ({ questionId }: QuestionCardProps) => {
  const navigate = useNavigate();
  const { answeredQuestions } = useQuiz();
  const isAnswered = answeredQuestions.includes(questionId);

  return (
    <button
      onClick={() => !isAnswered && navigate(`/question/${questionId}`)}
      disabled={isAnswered}
      className={cn(
        "group relative aspect-square w-full rounded-2xl bg-gradient-card p-6",
        "border-2 border-border/50 shadow-card",
        "transition-all duration-300",
        isAnswered
          ? "opacity-40 cursor-not-allowed"
          : "hover:scale-105 hover:shadow-glow hover:border-primary cursor-pointer"
      )}
    >
      <div className="flex h-full items-center justify-center">
        <span
          className={cn(
            "text-5xl font-bold transition-colors",
            isAnswered ? "text-muted-foreground" : "text-primary group-hover:text-accent"
          )}
        >
          {questionId}
        </span>
      </div>
      {isAnswered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-success/20 p-4">
            <svg
              className="w-12 h-12 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
};
