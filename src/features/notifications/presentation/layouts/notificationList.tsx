import React from "react";
import NotificationCard from "../components/notificationCard";
import type { Notification } from "../components/notificationCard";

interface Props {
  notifications: Notification[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const NotificationList: React.FC<Props> = ({ notifications, onToggle, onRemove }) => {
  return (
    <div className="space-y-4">
      {notifications.map((n) => (
        <NotificationCard
          key={n.id}
          notification={n}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default NotificationList;
