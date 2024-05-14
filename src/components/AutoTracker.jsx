import { useState, useEffect } from "react";

const AutoTracker = ({distance}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [loggedRuns, setLoggedRuns] = useState([]);

  useEffect(() => {
    let timer = null;

    if (timerRunning) {
      timer = setInterval(() => {
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
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

  const handleLog = () => {
    if (!timerRunning) {
      handleStop();
      setTotalTime(0);
      // const endTime = new Date();
      const runData = {
        date: startDate.toLocaleDateString(),
        startTime: startTime.toLocaleTimeString(),
        totalTime,
        distance
      };
      addRunData(runData);
    }
  };

  const addRunData = (runData) => {
    // Here, you can write code to add the runData to the displayRuns file
    // For simplicity, let's just log it to the console for now
    console.log("Adding run data to displayRuns:", runData);
    setLoggedRuns([...loggedRuns, runData]);
  };

  return (
    <div>
      <h2>Run Tracker</h2>
      <p>
        Total Time: {Math.floor(totalTime / 60)} minutes {totalTime % 60}{" "}
        seconds
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleLog}>Log Run</button>
    </div>
  );
};

export default AutoTracker;
