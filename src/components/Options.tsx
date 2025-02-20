export default function Options({ options }: { options: string[] }) {
  return (
    <div className="options">
      {options.map((option) => (
        <button className="btn btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}
