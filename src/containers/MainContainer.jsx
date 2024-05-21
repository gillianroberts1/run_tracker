import { Routes, Route } from "react-router-dom";
import RecordRun from "../components/RecordRun";
import DisplayRuns from "../components/DisplayRuns";

const MainContainer = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RecordRun />} />
        <Route path='/display' element={<DisplayRuns  />} />

      </Routes>
    </div>
  );
};

export default MainContainer;
