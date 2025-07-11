// features/sensors/presentation/components/SensorLineChart.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from "recharts";

interface SensorDataPoint {
  time: string;
  value: number;
}

interface Props {
  title: string;
  data: SensorDataPoint[];
  strokeColor?: string;
  unit?: string; //  "°C", "mg/L", "NTU", etc.
}

export const SensorLineChart = ({
  title,
  data,
  strokeColor = "#1C64F2",
  unit = "",
}: Props) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          
          <XAxis dataKey="time">
            <Label value="Hora del día" offset={-5} position="insideBottom" />
          </XAxis>

          <YAxis>
            <Label
              value={unit}
              angle={-90}
              position="insideLeft"
              offset={10}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>

          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
