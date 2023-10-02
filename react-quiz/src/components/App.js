import { useEffect, useReducer } from "react";
import Main from "./Main";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer"
import Timer from "./Timer";
  
const initialState = {
  questions: [],
  // loading, error, ready,active , finished
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining:null,
};
const SECS_PER_QUESTION=30;
function reducer(state, action) {
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
        status: "failed",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining:state.questions.length*SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return{
        ...state,
        secondsRemaining:state.secondsRemaining-1,
        status:state.secondsRemaining===0?"finished":state.status,
      }  
    default:
      throw new Error("Action gone wrong");
  }
}
export default function App() {
  const [{ questions, status, index, answer, points, highScore,secondsRemaining }, dispatch] =
    useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossibleValue = questions.reduce(
    (prev, curr) => prev + curr.points,
    0
  );
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "failed" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestion={numQuestions}
              points={points}
              maxPossibleValue={maxPossibleValue}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestion={numQuestions}
                points={points}
                index={index}/>
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblepoint={maxPossibleValue}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
