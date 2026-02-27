import { useQuiz } from './hooks/useQuiz';

function App() {
  const { question, handleAnswerSelection, handleNextQuestion, selectedAnswer, score, isQuizFinished, resetQuiz } = useQuiz();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Quiz App</h1>

        {isQuizFinished ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Your Score: {score} / 3</h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={resetQuiz}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <p className="mb-4">Score: {score}</p>
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            <div className="grid grid-cols-2 gap-4">
              {question.options.map((option) => (
                <button
                  key={option}
                  className={`
                    bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
                    ${selectedAnswer === option ? (option === question.correctAnswer ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700') : ''}
                  `}
                  onClick={() => handleAnswerSelection(option)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
