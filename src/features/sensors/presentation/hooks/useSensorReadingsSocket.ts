import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import type { MeasurementsModel } from "../../data/models/Measurements";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const useSensorReadingsSocket = (userId: string) => {
  const [data, setData] = useState<MeasurementsModel | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    console.log(" Conectando al socket...");

    const socket = io(SOCKET_URL, { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log(" Socket conectado con ID:", socket.id);
      socket.emit("join_room", userId); // room del usuario
    });

    socket.on("send_sensor_readings", (payload: MeasurementsModel) => {
      console.log(" Evento 'send_sensor_readings':", payload);
      setData(payload); // directo, sin verificación de user_id
    });

    socket.on("disconnect", () => {
      console.log(" Socket desconectado");
    });

    return () => {
      console.log("Cerrando conexión de socket...");
      socket.disconnect();
    };
  }, [userId]);

  return data;
};
