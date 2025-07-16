import React from "react";

type Props = {
  icon?: string;
  progress: number;
  size?: number;
  label?: string;
};

const CircularProgressIcon: React.FC<Props> = ({
  icon,
  progress,
  size = 56,
  label,
}) => {
  const stroke = 4;
  const radius = size / 2 - stroke;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="group relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute top-0 left-0 transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          stroke="#1B3C66"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="#3B82F6"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s" }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>

      {/* icono  */}
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="z-10 w-[60%] h-[60%] object-contain invert dark:invert-0"
        />
      )}

      {/* tooltip  */}
      {label && (
        <div className="absolute bottom-full mb-3 px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap max-w-xs text-center">
          {label}: {progress}%
        </div>
      )}
    </div>
  );
};

export default CircularProgressIcon;
