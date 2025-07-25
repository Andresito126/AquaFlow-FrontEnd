import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import type { MeasurementsModel } from "../../data/models/Measurements";

const SOCKET_URL = "http://localhost:8000";

interface SensorPoint {
  time: string;
  value: number;
}

interface SensorHistory {
  ph: SensorPoint[];
  tds: SensorPoint[];
  temperature: SensorPoint[];
  turbidity: SensorPoint[];
}

export const useRealTimeSensorsData = (userId: string) => {
  const [data, setData] = useState<SensorHistory>({
    ph: [],
    tds: [],
    temperature: [],
    turbidity: [],
  });

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(SOCKET_URL, { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[RealTime] ✅ Socket conectado:", socket.id);
      socket.emit("join_room", userId); // te unes a la room
    });

    socket.on("send_sensor_readings", (payload: MeasurementsModel) => {
      const now = new Date();
      const formatTime = now.toLocaleTimeString("es-MX", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });

      const toPoint = (sensorData: { date: string; value: number }): SensorPoint => ({
        time: formatTime,
        value: sensorData.value,
      });

      setData((prev) => ({
        ph: [...prev.ph.slice(-29), toPoint(payload.ph)],
        tds: [...prev.tds.slice(-29), toPoint(payload.tds)],
        temperature: [...prev.temperature.slice(-29), toPoint(payload.temperature)],
        turbidity: [...prev.turbidity.slice(-29), toPoint(payload.turbidity)],
      }));
    });

    socket.on("disconnect", () => {
      console.log("[RealTime]  Socket desconectado");
    });

    return () => {
      console.log("[RealTime] Cerrando socket");
      socket.disconnect();
    };
  }, [userId]);

  return data;
};
