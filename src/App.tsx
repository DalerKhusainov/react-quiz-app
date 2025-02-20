import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { QuestionsType } from "./types/questionsType";
import Loader from "./components/Loader";
import DisplayError from "./components/DisplayError";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
interface State {
  questions: QuestionsType[];
  // status: "loading" | "error" | "ready" | "active" | "finished";
  status: string;
  curIndex: number;
}

const initialState: State = {
  questions: [],
  status: "loading",
  curIndex: 0,
};

export type Action =
  | { type: "dataReceived"; payload: QuestionsType[] }
  | { type: "dataFailed" }
  | { type: "start" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, curIndex }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch(`http://localhost:8000/questions`);
        const data = await res.json();
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        console.error(error);
        dispatch({ type: "dataFailed" });
      } finally {
      }
    }
    getQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <DisplayError />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question questions={questions[curIndex]} />}
      </Main>
    </div>
  );
}

export default App;
