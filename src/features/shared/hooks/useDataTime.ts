import { useEffect, useState } from "react";

export const useDateTime = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formattedDate = `${now.getDate()}-${now.toLocaleString("es-MX", {
        month: "long",
      })}-${now.getFullYear()}`;

      const formattedTime = now.toLocaleTimeString("es-MX", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime(); // Initial load
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return { date, time };
};
