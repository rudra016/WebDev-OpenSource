import { useState } from "react";

const Calculator = () => {
  const [wei, setWei] = useState(50);
  const [hei, setHei] = useState(150);
  const con = (e) => {
    setWei(e.target.value);
  };
  const cont = (f) => {
    setHei(f.target.value);
  };
  const set = (wei, hei) => {
    const answer = wei / ((hei * hei) / 10000);
    return answer.toFixed(1);
  };
  return (
    <div className="cont">
      <header>
        <h1>BMI CALCULATOR</h1>
        <div>
          <p style={{ textAlign: "left", width: "300px" }}>Weight:{wei} kg</p>
          <input
            type="range"
            max={220}
            min={40}
            style={{ width: "300px" }}
            value={wei}
            onChange={con}
          />
        </div>
        <div>
          <p style={{ textAlign: "left", width: "300px" }}>Height:{hei} cm</p>
          <input
            type="range"
            max={220}
            min={150}
            value={hei}
            style={{ width: "300px" }}
            onChange={cont}
          />
        </div>
        <div>
          <p>Your BMI is:</p>
          <p className="show">{set(wei, hei)}</p>
        </div>
      </header>
    </div>
  );
};

export default Calculator;
// Klee One", cursive, "Chinese Quotes", "Inter var", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji