interface ProgressProps {
  numQuestions: number;
  index: number;
  points: number;
  maxPossiblePoints: number;
  answer: number | null;
}

export default function Progress({
  numQuestions,
  index,
  points,
  maxPossiblePoints,
  answer,
}: ProgressProps) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Questions <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
