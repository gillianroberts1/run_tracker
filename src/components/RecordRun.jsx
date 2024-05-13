import { useState } from "react";
import Calendar from "./Calendar";
import AutoTracker from "./AutoTracker";

const RecordRun = () => {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <p>RecordRun</p>
      {/* Manual input    */}
      <h2>Select a date and start time</h2>
      <Calendar />

      {/* auto log */}
      <AutoTracker />
    </>
  );
};

export default RecordRun;
