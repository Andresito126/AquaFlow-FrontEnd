import React from "react";

type BarVisualizerProps = {
  value: number; // valor ph
  max: number; // valor max que alcanza
  color: string; 
  segments?: number; // barras que tendrá
};

const BarVisualizer: React.FC<BarVisualizerProps> = ({
  value,
  max,
  color,
  segments = 12,
}) => {
  const filledCount = Math.round((value / max) * segments);

  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: segments }).map((_, i) => {
        const isFilled = i < filledCount;
        const opacity = isFilled ? 1 - (i / segments) * 0.5 : 0.2;
        return (
          <div
            key={i}
            style={{
              backgroundColor: color,
              opacity,
              width: "9px",
              height: "28px",
              borderRadius: "4.5px",
            }}
          />
        );
      })}
    </div>
  );
};

export default BarVisualizer;
