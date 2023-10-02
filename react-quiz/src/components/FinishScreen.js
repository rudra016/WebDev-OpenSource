function FinishScreen({ points, maxPossiblepoint, highScore, dispatch }) {
  const percentage = (points / maxPossiblepoint) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  else emoji = "👏";
  return (
    <>
      <p className="result">
        <spam>{emoji}</spam>Your Score<strong>{points}</strong> out of{" "}
        {maxPossiblepoint} &nbsp; ({Math.ceil(percentage)}%);
      </p>
      <h3>( Highest Score is {highScore} points )</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
