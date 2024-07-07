// components/Quiz.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Nav from '../components/nav';
import Footer from '../components/Footer';

// Example quiz data
const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Leo Tolstoy'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    options: ['Brazil', 'Germany', 'France', 'Spain'],
    correctAnswer: 'France',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
    correctAnswer: 'H2O',
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Time in seconds per question

  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit(null); // Auto-submit if time runs out
    } else {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | null) => {
    if (e) {
      e.preventDefault();
    }

    // Calculate score
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to next question or finish quiz
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption('');
      setTimeLeft(30); // Reset timer for next question
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30); // Reset timer when restarting quiz
  };

  if (quizCompleted) {
    return (
      <div className='flex flex-col items-center justify-center p-12 gap-4'>
        <h2 className='bg-green-900 p-2 rounded-md text-white font-bold text-2xl'>Quiz Completed!</h2>
        <p className='text-lg font-bold text-pink-800'>Your score: {score} / {quizData.length}</p>
        <button onClick={handleRestartQuiz} className='bg-violet-900 text-white py-2 px-4 rounded-md'>Restart Quiz</button>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className='flex flex-col items-center justify-center p-4 h-screen'>
        <h2 className='bg-indigo-900 p-2 rounded-xl text-white font-bold'>Question {currentQuestion + 1}</h2>
        <p className='text-lg font-bold text-pink-800'>{quizData[currentQuestion].question}</p>
        <p className='text-red-600 font-bold'>Time Left: {timeLeft} seconds</p>
        <form onSubmit={handleSubmit} className='p-4 m-2 border border-gray-100 w-1/2'>
          {quizData[currentQuestion].options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type='radio'
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className='p-2 mx-2 bg-blue-50 rounded-md'
                />
                {option}
              </label>
            </div>
          ))}
          <div className='flex flex-row items-center justify-end'>
            <button type='submit' className='bg-violet-900 text-white py-2 px-4 rounded-md'>
              Next
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
