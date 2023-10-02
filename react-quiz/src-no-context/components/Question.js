import Opt from "./Opt";
function Question({ question, dispatch, answer }) {
//   console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Opt question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
