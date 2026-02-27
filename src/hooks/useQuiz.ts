import { useState } from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizData: QuizQuestion[] = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
  },
];

interface UseQuiz {
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  score: number;
  isQuizFinished: boolean;
  question: QuizQuestion;
  handleAnswerSelection: (answer: string) => void;
  handleNextQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuiz = (): UseQuiz => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const question = quizData[currentQuestionIndex];

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === question.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsQuizFinished(false);
  };

  return {
    currentQuestionIndex,
    selectedAnswer,
    score,
    isQuizFinished,
    question,
    handleAnswerSelection,
    handleNextQuestion,
    resetQuiz,
  };
};
