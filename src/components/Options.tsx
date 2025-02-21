import { Dispatch } from "react";
import { Action } from "../App";

interface OptionsProps {
  options: string[];
  dispatch: Dispatch<Action>;
  answer: number | null;
  correctAnswer: number;
}

export default function Options({
  options,
  dispatch,
  answer,
  correctAnswer,
}: OptionsProps) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered ? (index === correctAnswer ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
