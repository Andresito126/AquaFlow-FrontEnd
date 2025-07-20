import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import type { MeasurementsModel } from "../../data/models/Measurements";

const SOCKET_URL = "http://localhost:8000";

interface SensorReadingsEvent {
  user_id: string;
  payload: MeasurementsModel;
}

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
      console.log("[RealTime] socket conectado:", socket.id);
      socket.emit("join_room", userId);
    });

    socket.on("send_sensor_readings", (payload: SensorReadingsEvent) => {
      if (payload.user_id !== userId) return;

      const p = payload.payload;

      
   const toPoint = (sensorData: { date: string; value: number }): SensorPoint => {
  const now = new Date();
  
  const time = now.toLocaleTimeString("es-MX", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    
  });
  return { time, value: sensorData.value };
};

      setData((prev) => ({
        ph: [...prev.ph.slice(-29), toPoint(p.ph)],
        tds: [...prev.tds.slice(-29), toPoint(p.tds)],
        temperature: [...prev.temperature.slice(-29), toPoint(p.temperature)],
        turbidity: [...prev.turbidity.slice(-29), toPoint(p.turbidity)],
      }));
    });

    socket.on("disconnect", () => {
      console.log("[RealTime] Socket desconectado");
    });

    return () => {
      console.log("[RealTime] Cerrando socket");
      socket.disconnect();
    };
  }, [userId]);

  return data;
};
