import { useState } from "react";
import Calendar from "./Calendar";

const RecordRun = () => {
  const [distance, setDistance] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <p>RecordRun</p>
      <h2>Select a Date</h2>
      <Calendar />
    </>
  );
};

export default RecordRun;
