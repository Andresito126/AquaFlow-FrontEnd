import React, { useState } from "react";
import NotificationList from "../layouts/notificationList";
import type { Notification } from "../components/notificationCard";
import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import { useTheme } from "../../../shared/hooks/useTheme";
import Header from "../../../shared/components/generic/header";
import { useDateTime } from "../../../shared/hooks/useDataTime";

const mockNotifications: Notification[] = [
    
  {
    id: 1,
    type: "info",
    title: "Agua mala",
    description: "The campaign parameters were successfully updated.",
    date: "2025-07-15T13:30:00",
    expanded: false,
  },
  {
    id: 2,
    type: "error",
    title: "Sensor mmalo",
    description:
      "Are you sure you would like to remove this user? This action cannot be undone.",
    date: "2025-07-15T13:35:00",
    expanded: false,
  },
  {
    id: 3,
    type: "success",
    title: "Temperatura alta",
    description: "All changes have been saved successfully.",
    date: "2025-07-15T13:40:00",
    expanded: false,
  },
];

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const { theme, toggleTheme } = useTheme();
   const { date, time } = useDateTime();

  const toggleExpand = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, expanded: !n.expanded } : n))
    );
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <>
       <Header
          title="Notificaciones"
          subtitle="Visualiza y gestiona tus notificaciones de forma eficiente"
          
          date={date}
          time={time}
        />
        
      <div className="w-full max-w-2xl mx-auto px-6 py-8 space-y-6 mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Notifis</h2>
          <button
            onClick={clearAll}
            className="text-sm text-gray-600 underline hover:text-black dark:text-sky-300"
          >
            Clear all
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button className="bg-sky-100 text-sky-800 dark:bg-sky-800 dark:text-white text-sm px-4 py-1 rounded-full">
            Notificaciones <span className="ml-1">{notifications.length}</span>
          </button>
        </div>

        <NotificationList
          notifications={notifications}
          onToggle={toggleExpand}
          onRemove={removeNotification}
        />
      </div>

      <div>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
};

export default NotificationsPage;
