import Options from "./Options";
import { QuestionsType } from "../types/questionsType";

export default function Question({ questions }: { questions: QuestionsType }) {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options options={questions.options} />
    </div>
  );
}
