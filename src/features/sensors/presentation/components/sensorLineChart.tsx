import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
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

const CenteredTitle = ({ title }: { title: string }) => {
  return (
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
};

export const SensorLineChart = ({
  title,
  data,
  strokeColor = "#1C64F2",
  unit = "",
}: Props) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full border-[#CBD5E1] dark:border-[#105B85] border-[1px]">
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
          <Customized component={() => <CenteredTitle title={title} />} />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
