import React from "react"
import useTimer from "./useTimer";

function Timer() {
  const { value, startTimer, pauseTimer, resetTimer } = useTimer({
    initialValue: 20
  });

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={startTimer}>START</button>
      <button onClick={pauseTimer}>PAUSE</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
export default Timer;
