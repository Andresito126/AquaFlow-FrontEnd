import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import type { MeasurementsModel } from "../../data/models/Measurements";

const SOCKET_URL = "http://localhost:8000";

interface SensorReadingsEvent {
  user_id: string;
  payload: MeasurementsModel;
}

export const useSensorReadingsSocket = (userId: string) => {
  const [data, setData] = useState<MeasurementsModel | null>(null);
  const socketRef = useRef<Socket | null>(null);

  
  useEffect(() => {
    
    
    console.log("conectando al socket");

    const socket = io(SOCKET_URL, { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("socket conectado con id:", socket.id);
      socket.emit("join_room", userId);
    });

    socket.on("send_sensor_readings", (payload: SensorReadingsEvent) => {
      console.log(" evento 'send_sensor_readings':", payload);
    console.log("payload.user_id:", payload.user_id, " y  esperaooo:", userId);
      if (payload.user_id === userId) {
        console.log("payload válido para este usuario:", userId);
        setData(payload.payload);
      } else {
        console.warn(" evento ignorado. usuario no coincide:", payload.user_id);
      }
    });

    socket.on("disconnect", () => {
      console.log("Socket desconectado");
    });

    return () => {
      console.log("cerrando socket ");
      socket.disconnect();
    };
  }, [userId]);

  return data;
};
