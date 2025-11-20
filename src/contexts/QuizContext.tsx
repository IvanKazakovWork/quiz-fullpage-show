import React, { createContext, useContext, useState, useEffect } from "react";
import { QuizState } from "@/types/quiz";

interface QuizContextType {
  answeredQuestions: number[];
  markAsAnswered: (id: number) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>(() => {
    const saved = localStorage.getItem("quizState");
    if (saved) {
      const state: QuizState = JSON.parse(saved);
      return state.answeredQuestions;
    }
    return [];
  });

  useEffect(() => {
    const state: QuizState = { answeredQuestions };
    localStorage.setItem("quizState", JSON.stringify(state));
  }, [answeredQuestions]);

  const markAsAnswered = (id: number) => {
    setAnsweredQuestions((prev) => [...prev, id]);
  };

  const resetQuiz = () => {
    setAnsweredQuestions([]);
    localStorage.removeItem("quizState");
  };

  return (
    <QuizContext.Provider value={{ answeredQuestions, markAsAnswered, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within QuizProvider");
  }
  return context;
};
