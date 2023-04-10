import React, { useState } from "react";

function Quiz() {
  // Define a state variable here to track question status
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "React is a library?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "Gorakhpur", isCorrect: false },
        { answerText: "Lucknow", isCorrect: false },
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Mumbai", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "Capital of Uttar pradesh?",
      answerOptions: [
        { answerText: "allahabad", isCorrect: false },
        { answerText: "gorakhpur", isCorrect: false },
        { answerText: "ballia", isCorrect: false },
        { answerText: "lucknow", isCorrect: true },
      ],
    },
  ];

  function handleAnswerClick(isCorrect) {
    // Check if correct answer is pressed. (See the hint on the left)

    if (isCorrect) {
      setScore((score) => score + 1);
    }

    if (currentIndex === questions.length - 1) {
      // quiz over
      setQuizFinished(true);
    } else {
      setCurrentIndex((value) => value + 1);
    }
  }

  const [quizFinished, setQuizFinished] = useState(false);

  return (
    <div className="app container">
      {quizFinished ? (
        <div className="score-section">
          You scored {score} correct out of {questions.length} questions <br />
          {/* <botton classNamebtn-btn-primary>restart quiz</botton> */}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count text-primary">
              <span className="text-primary">Question {currentIndex + 1}</span>/
              {questions.length}
            </div>
            <div className="question-text" style={{ color: "white" }}>
              {questions[currentIndex].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentIndex].answerOptions.map((answer) => {
              // Add onClick listener to this button
              return (
                <button
                  onClick={() => handleAnswerClick(answer.isCorrect)}
                  key={answer.answerText}
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
