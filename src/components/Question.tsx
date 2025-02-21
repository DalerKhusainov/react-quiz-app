import { Dispatch } from "react";
import Options from "./Options";
import { QuestionsType } from "../types/questionsType";
import { Action } from "../App";

interface QuestionProps {
  questions: QuestionsType;
  dispatch: Dispatch<Action>;
  answer: number | null;
}

export default function Question({
  questions,
  dispatch,
  answer,
}: QuestionProps) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options
        options={questions.options}
        correctAnswer={questions.correctOption}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}
