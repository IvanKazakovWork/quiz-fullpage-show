import { useParams, useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { useQuiz } from "@/contexts/QuizContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Question = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { markAsAnswered } = useQuiz();

  const questionId = parseInt(id || "0");
  const question = questions.find((q) => q.id === questionId);

  if (!question) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-destructive">Вопрос не найден</h1>
          <Button onClick={() => navigate("/")} variant="outline" size="lg">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  const handleAnswer = (answer: boolean) => {
    if (answer === question.isCorrect) {
      markAsAnswered(question.id);
    }
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="lg"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Назад к вопросам
        </Button>

        {/* Question Card */}
        <div className="bg-gradient-card rounded-3xl p-12 shadow-card border-2 border-border/50">
          {/* Question Number */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border-2 border-primary mb-8">
            <span className="text-2xl font-bold text-primary">{question.id}</span>
          </div>

          {/* Question Text */}
          <h1 className="text-5xl font-bold text-foreground mb-12 leading-tight">
            {question.text}
          </h1>

          {/* Answer Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button
              onClick={() => handleAnswer(true)}
              size="lg"
              className="h-24 text-2xl font-bold bg-success hover:bg-success/90 text-success-foreground shadow-glow"
            >
              ✓ Верно
            </Button>
            <Button
              onClick={() => handleAnswer(false)}
              size="lg"
              variant="destructive"
              className="h-24 text-2xl font-bold shadow-glow"
            >
              ✗ Неверно
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
