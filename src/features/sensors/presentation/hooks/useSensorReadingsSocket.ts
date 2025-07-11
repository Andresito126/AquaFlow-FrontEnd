import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { MeasurementsModel } from "../../data/models/Measurements";

const SOCKET_URL = "http://localhost:3000"; // cambia esto si tu socket está en otra URL

export const useSensorReadingsSocket = (userId: string) => {
  const [data, setData] = useState<MeasurementsModel | null>(null);

  useEffect(() => {
    const socket: Socket = io(SOCKET_URL, {
      transports: ["websocket"],
    });

    // Evento que debes recibir (nombre debe coincidir con backend)
    socket.on("sensorReadings", (payload: { user_id: string, payload: MeasurementsModel }) => {
      if (payload.user_id === userId) {
        setData(payload.payload); // Guarda las lecturas de sensores
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  return data;
};
