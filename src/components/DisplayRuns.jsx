
const DisplayRuns = ({ loggedRuns }) => {
  return (
  
    <div className="logged-runs">
      <h3 className="text-lg font-semibold mb-4 mt-4">Logged Runs</h3>
      <div className="grid grid-cols-4 gap-4 font-semibold mb-2">
        <div>Date</div>
        <div>Start Time</div>
        <div>Total Time</div>
        <div>Distance (km)</div>
      </div>
      <ul>
        {loggedRuns.map((run, index) => (
          <li key={index} className="grid grid-cols-4 gap-4 border-b pb-2">
            <div>{run.date}</div>
            <div>{run.startTime}</div>
            <div>{run.totalTimeFormatted}</div>
            <div>{run.distance}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayRuns;
