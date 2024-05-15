import TimePicker from "@ashwinthomas/react-time-picker-dropdown";


const TimeSelector = ({hour, minute, second}) => {

    return (
        <TimePicker
        hour={hour}
        minute={minute}
        second={second}
        onChange={(h, m, s) => {
          setHour(h);
          setMinute(m);
          setSecond(s);
        }}
      />
    )
    }

export default TimeSelector;
