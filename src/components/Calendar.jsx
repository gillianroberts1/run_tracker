import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import "react-datepicker/dist/react-datepicker-cssmodules.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
      showIcon
      selected={date}
      onChange={(date) => setDate(date)}
      showTimeSelect
      timeIntervals={15}
      dateFormat="dd/MM/yyyy h:mm aa"
    />
  );
};

export default Calendar;
