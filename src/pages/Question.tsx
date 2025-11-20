import { useParams, useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { persons } from "@/data/persons";
import { useQuiz } from "@/contexts/QuizContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const Question = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { markAsAnswered } = useQuiz();
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);

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

  const handlePersonSelect = (personId: number) => {
    if (personId === question.correctPersonId) {
      markAsAnswered(question.id);
      navigate(`/answer/${question.id}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
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
        <div className="bg-card rounded-3xl p-12 shadow-card border-2 border-border/50">
          {/* Question Number */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-8">
            <span className="text-2xl font-bold text-primary">{question.id}</span>
          </div>

          {/* Question Text */}
          <h1 className="text-4xl font-bold text-foreground mb-12 leading-tight">
            {question.text}
          </h1>

          {/* Person Selection Grid */}
          <div className="grid grid-cols-5 gap-4 md:gap-6">
            {persons.map((person) => (
              <div key={person.id} className="relative">
                <button
                  onClick={() => handlePersonSelect(person.id)}
                  onMouseEnter={() => setHoveredPerson(person.id)}
                  onMouseLeave={() => setHoveredPerson(null)}
                  className="w-full aspect-square rounded-full overflow-hidden border-2 border-border/50 hover:border-primary hover:scale-110 transition-all duration-300 shadow-card hover:shadow-glow"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                {hoveredPerson === person.id && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-card border-2 border-primary px-3 py-1 rounded-lg shadow-glow whitespace-nowrap animate-fade-in">
                    <span className="text-sm font-medium text-foreground">{person.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
