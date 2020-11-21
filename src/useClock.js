import { useEffect, useState } from "react";
import dayjs from 'dayjs';

export const useClock = (initialTime = dayjs()) => {
    const [time, setTime] = useState(initialTime);
  
    useEffect(() => {
      const id = setInterval(() => {
        setTime(() => dayjs());
      }, 1000);
      return () => clearInterval(id);
    }, []);
  
    return time;
  }