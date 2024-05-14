import { useState, useEffect } from "react";
import Calendar from "./Calendar";

const RecordRun = () => {
  const [distance, setDistance] = useState("");
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
      setDistance("");
      // const endTime = new Date();
      const runData = {
        date: startDate.toLocaleDateString(),
        startTime: startTime.toLocaleTimeString(),
        totalTime,
        distance,
      };
      addRunData(runData);
    }
  };

  // const handleManualLog = () => {

  // }

  const addRunData = (runData) => {
    // Here, you can write code to add the runData to the displayRuns file
    // For simplicity, let's just log it to the console for now
    console.log("Adding run data to displayRuns:", runData);
    setLoggedRuns([...loggedRuns, runData]);
  };

  return (
    <div className="run-container">
      <h2>Run Tracker</h2>

      <div className="timer">
        <p>
          Total Time: {Math.floor(totalTime / 60)} minutes {totalTime % 60}{" "}
          seconds
        </p>
      </div>
      <div className="stop-clock">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <br></br>
      <div className="distance">
        <p>Enter Distance</p>
        <input
          className="distance"
          value={distance}
          label="Distance"
          placeholder="Distance(km)"
          onChange={(e) => {
            setDistance(e.target.value);
          }}
        />
      </div>
      <div className="manual-log">
        <p>Manual Log</p>
        <Calendar />
      </div>
      <br></br>
      
      <br></br>
      <button onClick={handleLog}>Log Run</button>
    </div>
  );
};

export default RecordRun;
