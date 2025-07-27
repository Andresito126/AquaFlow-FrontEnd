import React from "react";
import IconError from "../../../../core/assets/icons/notifications/icon-error.svg";
import IconSuccess from "../../../../core/assets/icons/notifications/icon-success.svg";
import IconInfo from "../../../../core/assets/icons/notifications/icon-info.svg";
import IconExpand from "../../../../core/assets/icons/notifications/icon-expand.svg";

type NotificationType = "info" | "success" | "error";

export interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  description?: string;
  date: string;
  expanded?: boolean;
}

interface Props {
  notification: Notification;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const getTypeIcon = (type: NotificationType) => {
  switch (type) {
    case "info":
      return IconInfo;
    case "error":
      return IconError;
    case "success":
      return IconSuccess;
    default:
      return "";
  }
};

const NotificationCard: React.FC<Props> = ({ notification, onToggle, onRemove }) => {
  return (
    <div className="flex gap-4 items-start rounded-xl p-5 shadow-lg border-[1px] border-[#CBD5E1] dark:border-[#105B85]">
      <img
        src={getTypeIcon(notification.type)}
        alt={notification.type}
        className="w-8 h-8"
      />

      <div className="flex-1">
        <div className="flex justify-between items-start gap-2 flex-wrap">
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">{notification.title}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(notification.date).toLocaleString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          <button onClick={() => onToggle(notification.id)}>
            <img src={IconExpand} alt="Expand" className="w-5 h-5" />
          </button>
        </div>

        {notification.expanded && notification.description && (
          <p className="mt-2 text-sm leading-relaxed">
            {notification.description}
          </p>
        )}

        <button
          onClick={() => onRemove(notification.id)}
          className="mt-4 dark:bg-[#ffffff09] text-sm px-5 py-2 rounded-md shadow-lg hover:bg-gray-300 dark:hover:bg-sky-900 transition"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;
