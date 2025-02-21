import { Dispatch } from "react";
import { Action } from "../App";

interface FinishedProps {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: Dispatch<Action>;
}

export default function Finished({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}: FinishedProps) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😎";
  if (percentage > 10 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "😔";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
