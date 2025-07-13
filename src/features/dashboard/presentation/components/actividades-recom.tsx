import React from "react";

type Props = {
  icon: string;
  progress: number;
  size?: number;
};

const ActividadRecom: React.FC<Props> = ({ icon, progress, size = 56 }) => {
  const radius = 26;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      
      <svg
        height={size}
        width={size}
        className="absolute top-0 left-0 transform -rotate-90"
      >
        <circle
          stroke="#1B3C66"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="#3B82F6"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.5s" }}
          r={normalizedRadius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>

 
      <div className="dark:text-white text-xl z-10"><img src={icon} alt="" /></div>
    </div>
  );
};

export default ActividadRecom;
