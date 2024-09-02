import { Routes, Route } from "react-router-dom";
import RecordRun from "../components/RecordRun";
import DisplayRuns from "../components/DisplayRuns";
import Home from "../components/Home";

const MainContainer = () => {
  return (
    
    <div>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/record' element={<RecordRun />} />
        <Route path='/display' element={<DisplayRuns  />} />

      </Routes>
    </div>
  );
};

export default MainContainer;
