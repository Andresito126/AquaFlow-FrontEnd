import { useEffect, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import type { WaterActivitiesList } from "../../data/models/Activities/WaterActivitiesList";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;



export const useRecommendedActivities = (userId: string) => {
  const [activities, setActivities] = useState<WaterActivitiesList | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io(SOCKET_URL, { transports: ["websocket"] });
    socketRef.current = socket;

    socket.on("connect", () => {
      socket.emit("join_room", userId); 
    });

    socket.on("send_water_activities", (payload: WaterActivitiesList) => {
      setActivities(payload);
    });

    socket.on("disconnect", () => {
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  return activities;
};
