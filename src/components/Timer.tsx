import { useState, useEffect } from "react";

export default function Timer() {
  const targetDate = new Date("2025-11-17T00:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex mt-4 text-white justify-between">
      {[
        { value: timeLeft.days, label: "dni" },
        { value: timeLeft.hours, label: "godz" },
        { value: timeLeft.minutes, label: "min" },
        { value: timeLeft.seconds, label: "sek" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center w-14">
          <span className="text-4xl font-bold leading-none">{item.value}</span>
          <span className="text-sm font-light mt-1 uppercase tracking-wide">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
