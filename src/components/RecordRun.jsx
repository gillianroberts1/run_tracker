import { useState, useEffect } from "react";
import Calendar from "./Calendar";
import Request from "../helpers/request";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const RecordRun = () => {
  const [distance, setDistance] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [totalTime, setTotalTime] = useState(0);
  const [manualHours, setManualHours] = useState("");
  const [manualMinutes, setManualMinutes] = useState("");
  const [manualSeconds, setManualSeconds] = useState("");
  const [timerRunning, setTimerRunning] = useState(false);
  const [loggedRuns, setLoggedRuns] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: 0,
    height: 0,
  });

  // let startTime = format(new Date(), "HH:mm");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch runs from the database when the component mounts
    const request = new Request();
    request.get().then((runs) => setLoggedRuns(runs));
  }, []);

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
      let finalTotalTime = totalTime;

      if (manualHours !== "" || manualMinutes !== "" || manualSeconds !== "") {
        const hours = manualHours ? parseInt(manualHours) * 3600 : 0;
        const mins = manualMinutes ? parseInt(manualMinutes) * 60 : 0;
        const seconds = manualSeconds ? parseInt(manualSeconds) : 0;
        finalTotalTime = hours + mins + seconds;
      }

      const formattedTime = formatTime(finalTotalTime);

      const runData = {
        date: startDate.toLocaleDateString(),
        startTime: startTime.toLocaleTimeString("en-GB", {
          timeStyle: "short",
        }),
        totalTimeFormatted: formattedTime,
        distance: distance,
      };

      setConfettiDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const request = new Request();
      request.post(runData).then((response) => {
        addRunData({ ...runData, _id: response.insertedId });
        resetForm();
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          navigate("/display");
          window.location.reload();
          console.log(loggedRuns);
        }, 3000); // Confetti for 3 seconds
      });
    }
  };

  const handleCalendarChange = (date) => {
    setStartDate(date);
    setStartTime(date);
  };

  // eslint-disable-next-line no-unused-vars
  const addRunData = (runData) => {
    setLoggedRuns([...loggedRuns, runData]);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const resetForm = () => {
    setTotalTime(0);
    setDistance("");
    setManualHours("");
    setManualMinutes("");
    setManualSeconds("");
  };

  const formattedTime = formatTime(totalTime);

  return (
    <div className="run-container p-4">
      {showConfetti && (
        <Confetti
          width={confettiDimensions.width}
          height={confettiDimensions.height}
          numberOfPieces={200}
          recycle={false}
          colors={[
            "#FFC700",
            "#FF0000",
            "#00FF00",
            "#0000FF",
            "#FF00FF",
            "#00FFFF",
          ]}
        />
      )}
      <h2 className="text-xl font-bold mb-4">Run Tracker</h2>

      <div className="timer mb-4">
        <p className="text-lg">Total Time: {formattedTime}</p>
      </div>
      <div className="stop-clock mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
      <div className="distance mb-4">
        <p className="mb-2">Enter Distance</p>
        <input
          className="border p-2 rounded w-full"
          value={distance}
          placeholder="Distance (km)"
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div className="manual-log mb-4">
        <p className="mb-2">Manual Log</p>
        <Calendar
          startDate={startDate}
          handleCalendarChange={handleCalendarChange}
        />
      </div>
      <div className="manual-time mb-4">
        <p className="mb-2">Enter Manual Total Time (hh:mm:ss)</p>
        <div className="flex gap-2">
          <input
            type="number"
            className="border p-2 rounded w-full"
            value={manualHours}
            placeholder="HH"
            onChange={(e) => setManualHours(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-full"
            value={manualMinutes}
            placeholder="MM"
            onChange={(e) => setManualMinutes(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-full"
            value={manualSeconds}
            placeholder="SS"
            onChange={(e) => setManualSeconds(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleLog}
      >
        Log Run
      </button>
    </div>
  );
};

export default RecordRun;
