const DisplayRuns = ({ loggedRuns, handleDelete }) => {
  return (
    <div className="logged-runs">
      <h3>Logged Runs</h3>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>Total Time</th>
            <th>Distance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loggedRuns.map((run, index) => (
            <tr key={index}>
              <td>{run.date}</td>
              <td>{run.startTime}</td>
              <td>{run.totalTimeFormatted}</td>
              <td>{run.distance} km</td>
              <td>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(run._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayRuns;