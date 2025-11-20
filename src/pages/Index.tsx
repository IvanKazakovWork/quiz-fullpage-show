import { QuestionCard } from "@/components/QuestionCard";
import { useQuiz } from "@/contexts/QuizContext";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { resetQuiz, answeredQuestions } = useQuiz();
  const totalQuestions = questions.length;
  const progress = (answeredQuestions.length / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-7xl font-black text-foreground tracking-tight">
            Интерактивная Презентация
          </h1>
          <p className="text-2xl text-foreground/70 mb-8">
            Выберите номер вопроса
          </p>
          
          <div className="mx-auto max-w-md mb-6">
            <div className="flex justify-between text-sm text-foreground/60 mb-2">
              <span>Прогресс</span>
              <span>{answeredQuestions.length} / {totalQuestions}</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden border border-border">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {answeredQuestions.length === totalQuestions && (
            <div className="mb-6 p-6 bg-card rounded-xl border-2 border-primary shadow-card">
              <p className="text-2xl font-bold text-primary mb-4">
                🎉 Все вопросы отвечены!
              </p>
              <Button onClick={resetQuiz} variant="outline" size="lg">
                Начать заново
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {questions.map((question) => (
            <QuestionCard key={question.id} questionId={question.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
