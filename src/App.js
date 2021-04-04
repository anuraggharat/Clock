import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const d = new Date();
  const [hours, setHour] = useState(d.getHours());
  const [mins, setMins] = useState(d.getMinutes());
  const [secs, setSecs] = useState(d.getSeconds());
  const [date, setDate] = useState(d.getDate());
  const [month, setMonth] = useState(d.getMonth());
  const [year, setYear] = useState(d.getFullYear());
  const [day, setDay] = useState(d.getDay());
  const [time, setTime] = useState(Date.now());

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="time">
        <span>
          {d.getHours() <= 9 && d.getHours() >= 0
            ? "0" + d.getHours()
            : d.getHours()}
        </span>
        <span>:</span>
        <span>
          {d.getMinutes() <= 9 && d.getMinutes() >= 0
            ? "0" + d.getMinutes()
            : d.getMinutes()}
        </span>
        <span>:</span>
        <span className="blink-text">
          {d.getSeconds() <= 9 && d.getSeconds() >= 0
            ? "0" + d.getSeconds()
            : d.getSeconds()}
        </span>
      </div>
      <div className="date">
        <span>
          {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}
        </span>
        , <span>{week[d.getDay()]}</span>
      </div>
    </div>
  );
}

export default App;
