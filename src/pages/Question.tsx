import { useParams, useNavigate } from "react-router-dom";
import { questions } from "@/data/questions";
import { persons } from "@/data/persons";
import { useQuiz } from "@/contexts/QuizContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const Question = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { markAsAnswered } = useQuiz();
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);
  const [showWrong, setShowWrong] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

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
      setShowCorrect(true);
      setTimeout(() => {
        markAsAnswered(question.id);
        navigate(`/answer/${question.id}`);
      }, 800);
    } else {
      setShowWrong(true);
      setTimeout(() => {
        setShowWrong(false);
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-5xl">
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
        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border-2 border-border/50">
          {/* Question Number */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary mb-4">
            <span className="text-xl font-bold text-primary">{question.id}</span>
          </div>

          {/* Question Text */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
            {question.text}
          </h1>

          {/* Person Selection Grid */}
          <div className="grid grid-cols-5 gap-3 md:gap-4 max-w-3xl mx-auto">
            {persons.map((person) => (
              <div key={person.id} className="relative">
                <button
                  onClick={() => handlePersonSelect(person.id)}
                  onMouseEnter={() => setHoveredPerson(person.id)}
                  onMouseLeave={() => setHoveredPerson(null)}
                  className="w-full aspect-square rounded-full overflow-hidden border-2 border-border/50 hover:border-primary hover:scale-105 transition-all duration-300 shadow-card hover:shadow-glow"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                {hoveredPerson === person.id && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border-2 border-primary px-2 py-1 rounded-lg shadow-glow whitespace-nowrap animate-fade-in z-10">
                    <span className="text-xs md:text-sm font-medium text-foreground">{person.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Wrong Answer Overlay */}
        {showWrong && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
            <div className="text-center animate-[scale-in_0.5s_ease-out]">
              <div className="text-8xl md:text-9xl font-black text-primary mb-4 animate-pulse">
                ✕
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white animate-[fade-in_0.3s_ease-out_0.2s_both]">
                НЕВЕРНО
              </h2>
            </div>
          </div>
        )}

        {/* Correct Answer Overlay */}
        {showCorrect && (
          <div className="fixed inset-0 bg-primary/20 flex items-center justify-center z-50 animate-fade-in">
            <div className="text-center">
              <div className="text-9xl animate-[scale-in_0.6s_ease-out] text-primary">
                ✓
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
