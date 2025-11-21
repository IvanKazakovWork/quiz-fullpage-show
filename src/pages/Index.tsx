import { QuestionCard } from "@/components/QuestionCard";
import { useQuiz } from "@/contexts/QuizContext";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

const Index = () => {
  const { resetQuiz, answeredQuestions } = useQuiz();
  
  // Randomize questions order once on load
  const shuffledQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  }, []);
  
  const totalQuestions = shuffledQuestions.length;
  const progress = (answeredQuestions.length / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col">
      <div className="mx-auto w-full max-w-7xl flex-1 flex flex-col">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Интерактивная Презентация
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-4">
            Выберите номер вопроса
          </p>
          
          <div className="mx-auto max-w-md mb-4">
            <div className="flex justify-between text-xs md:text-sm text-foreground/60 mb-1">
              <span>Прогресс</span>
              <span>{answeredQuestions.length} / {totalQuestions}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden border border-border">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {answeredQuestions.length === totalQuestions && (
            <div className="mb-4 p-4 bg-card rounded-xl border-2 border-primary shadow-card">
              <p className="text-xl font-bold text-primary mb-3">
                🎉 Все вопросы отвечены!
              </p>
              <Button onClick={resetQuiz} variant="outline" size="lg">
                Начать заново
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-10 gap-2 md:gap-3">
          {shuffledQuestions.map((question) => (
            <QuestionCard key={question.id} questionId={question.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
