import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Calendar = ({ startDate, handleCalendarChange }) => {
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => handleCalendarChange(date)}
      showTimeSelect
      timeIntervals={15}
      dateFormat="dd/MM/yyyy h:mm aa"
    />
    
  );
};

export default Calendar;
