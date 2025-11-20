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
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Интерактивная Презентация
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Выберите номер вопроса
          </p>
          
          {/* Progress Bar */}
          <div className="mx-auto max-w-md mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Прогресс</span>
              <span>{answeredQuestions.length} / {totalQuestions}</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {answeredQuestions.length === totalQuestions && (
            <div className="mb-6 p-6 bg-gradient-card rounded-2xl border-2 border-success shadow-card">
              <p className="text-2xl font-bold text-success mb-4">
                🎉 Все вопросы отвечены!
              </p>
              <Button onClick={resetQuiz} variant="outline" size="lg">
                Начать заново
              </Button>
            </div>
          )}
        </div>

        {/* Questions Grid */}
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
