import { useParams, useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Answer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const questionId = parseInt(id || "0");
  const question = questions.find((q) => q.id === questionId);

  if (!question) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-5xl">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="lg"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Вернуться к вопросам
        </Button>

        <div className="bg-card rounded-3xl overflow-hidden shadow-card border-2 border-primary">
          {/* Image */}
          <div className="w-full aspect-video overflow-hidden">
            <img
              src={question.answerImage}
              alt="Правильный ответ"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border-2 border-primary mb-6">
              <span className="text-2xl font-bold text-primary">{question.id}</span>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              {question.text}
            </h2>

            <p className="text-xl text-foreground/80 leading-relaxed">
              {question.answerText}
            </p>

            <Button
              onClick={() => navigate("/")}
              size="lg"
              className="mt-8 bg-primary hover:bg-primary/90"
            >
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
