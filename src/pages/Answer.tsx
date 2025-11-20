import { useParams, useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { persons } from "@/data/persons";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Answer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const questionId = parseInt(id || "0");
  const question = questions.find((q) => q.id === questionId);
  const person = question ? persons.find((p) => p.id === question.correctPersonId) : null;

  if (!question || !person) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 animate-fade-in">
      <div className="w-full max-w-4xl animate-[scale-in_0.5s_ease-out]">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          size="lg"
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Вернуться к вопросам
        </Button>

        <div className="bg-card rounded-3xl overflow-hidden shadow-card border-2 border-primary animate-[fade-in_0.4s_ease-out_0.2s_both]">
          {/* Image */}
          <div className="w-full flex justify-center py-8 animate-[scale-in_0.6s_ease-out_0.3s_both]">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-2 border-primary mb-3">
                <span className="text-xl font-bold text-primary">{question.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{person.name}</h3>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
              {question.text}
            </h2>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              {question.answerText}
            </p>

            <div className="flex justify-center mt-6">
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Продолжить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
