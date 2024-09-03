// src/App.js
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RecordRun from "./components/RecordRun";
import DisplayRuns from "./components/DisplayRuns";
import Home from "./components/Home"; // Assuming you have a Home component
import Request from "./helpers/request";
import "./App.css";


function App() {
  const [loggedRuns, setLoggedRuns] = useState([]);

  useEffect(() => {
    const request = new Request();
    request.get().then((runs) => setLoggedRuns(runs));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this run?")) {
      const request = new Request();
      request.delete(id).then(() => {
        setLoggedRuns(loggedRuns.filter((run) => run._id !== id));
      });
    }
  };

  return (
    <div className="pt-24 md:pt-28">

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Assuming this is your home page */}
        <Route path="/record" element={<RecordRun loggedRuns={loggedRuns} setLoggedRuns={setLoggedRuns} />} />
        <Route path="/display" element={<DisplayRuns loggedRuns={loggedRuns} handleDelete={handleDelete} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
