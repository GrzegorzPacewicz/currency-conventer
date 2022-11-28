import "./style.css";
import { useState, useEffect } from "react";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const Clock = () => {
  const [day, setDay] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDay(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className="clock">Jest {formatDate(day)}</div>;
};

export default Clock;
