function NextButton({ dispatch, answer, numQuestion, index }) {
    console.log(numQuestion,index);
  if (answer === null) return null;
  else if (numQuestion - 1 > index) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }
  else{
    return (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      );
  }
}

export default NextButton;
