import { useState, useEffect } from "react";
import Calendar from "./Calendar";
import TimeSelector from './TimePicker';

const RecordRun = () => {
  const [distance, setDistance] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
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

      const runData = {
        date: startDate.toLocaleDateString(),
        startTime: startTime.toLocaleTimeString(),
        totalTime,
        distance,
      };
      addRunData(runData);
    }
  };

const handleCalendarChange = (date) => {
setStartDate(date)
setStartTime(date)

}
  // }

  const addRunData = (runData) => {
    // Here, you can write code to add the runData to the displayRuns file
    // For simplicity, let's just log it to the console for now
    console.log("Adding run data to displayRuns:", runData);
    setLoggedRuns([...loggedRuns, runData]);
  };

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;
  
  const formattedTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    

  return (
    <div className="run-container">
      <h2>Run Tracker</h2>

      <div className="timer">
        <p>
          Total Time: {formattedTime} 
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
        <p>Enter time mm:ss</p>
        {/* <TimeSelector /> */}
        {/* <input
          className="manual-time"
          value={formattedTime}
          label="Time"
          placeholder="mm:ss"
          onChange={(e) => {
            setTotalTime(e.target.value);
          }}
        /> */}
        <br />
        <br />

        <Calendar  startDate={startDate} handleCalendarChange={handleCalendarChange} />
      </div>
      <br></br>

      <br></br>
      <button onClick={handleLog}>Log Run</button>
    </div>
  );
};

export default RecordRun;
