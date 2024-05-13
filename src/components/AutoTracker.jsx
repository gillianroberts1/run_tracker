import { useState, useEffect } from "react";

const RunTracker = () => {
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (timerRunning) {
      timer = setInterval(() => {
        setTotalTime(prevTotalTime => prevTotalTime + 1); 
      }, 1000); 
    }

    return () => clearInterval(timer); 
  }, [timerRunning]);

  const handleStart = () => {
    setStartTime(new Date());
    setTimerRunning(true); 
  };

  const handleStop = () => {
    if (startTime) {
      setTimerRunning(false); 
    }
  };

  return (
    <div>
      <h2>Run Tracker</h2>
      <p>Total Time: {Math.floor(totalTime / 60)} minutes {totalTime % 60} seconds</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default RunTracker;
