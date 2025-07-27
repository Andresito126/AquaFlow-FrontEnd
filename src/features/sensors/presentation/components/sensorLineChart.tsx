import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Customized,
} from "recharts";

interface SensorDataPoint {
  time: string;
  value: number;
}

interface Props {
  title: string;
  data: SensorDataPoint[];
  strokeColor?: string;
  unit?: string;
}

const CenteredTitle = ({ title }: { title: string }) => (
  <text
    x="50%"
    y={7}
    textAnchor="middle"
    dominantBaseline="middle"
    style={{
      fontSize: "16px",
      fontWeight: "bold",
      fill: "#333",
    }}
  >
    {title}
  </text>
);

export const SensorLineChart = ({
  title,
  data,
  strokeColor = "#1C64F2",
  unit = "",
}: Props) => {
  const yDomain = useMemo(() => {
    if (!data.length) return [0, 10];

    const values = data.map((d) => d.value);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const margin = Math.max((maxVal - minVal) * 0.05, 1);
    return [minVal - margin, maxVal + margin];
  }, [data]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full border-[#CBD5E1] dark:border-[#105B85] border-[1px]">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data.length ? data : [{ time: "", value: 0 }]}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

          <XAxis
            dataKey="time"
            tick={{ fontSize: 12 }}
            minTickGap={20}
            tickFormatter={(timeStr) => timeStr?.slice(0, 8) || ""}
            label={{ value: "Hora", position: "insideBottom", offset: -5 }}
          />

          <YAxis
            tick={{ fontSize: 12 }}
            label={{
              value: unit ? `${title} (${unit})` : title,
              angle: -90,
              position: "insideLeft",
              offset: 10,
              style: { textAnchor: "middle" },
            }}
            domain={yDomain}
          />

          <Tooltip
            labelFormatter={(label) => `Hora: ${label}`}
            formatter={(value: number) => [`${value}`, unit]}
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              color: "#000000",
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={2}
            dot={true}
            isAnimationActive={false}
          />

          <Customized component={() => <CenteredTitle title={title} />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
