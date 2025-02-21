import { Dispatch } from "react";
import { Action } from "../App";

interface NextButtonProps {
  dispatch: Dispatch<Action>;
  answer: number | null;
  curIndex: number;
  numQuestions: number;
}

export default function NextButton({
  dispatch,
  answer,
  curIndex,
  numQuestions,
}: NextButtonProps) {
  if (answer === null) return null;

  if (curIndex < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (curIndex === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
