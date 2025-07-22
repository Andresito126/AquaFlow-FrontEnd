import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
  Label,
} from "recharts";

interface WaterQualityTrendPoint {
  day: string;
  ica_value: number;
}

interface Props {
  title: string;
  data: WaterQualityTrendPoint[];
}

export const WaterQualityTrendChart = ({ title, data }: Props) => {
   const formatDateSimple = (dateStr: string) => {
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    const [year, month, day] = parts;
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-white">
        {title}
      </h2>

      {/* leyenda  */}
      <div className="flex gap-20 mb-4 text-sm text-gray-600 ">
        <div>
          {" "}
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          0-25%: Pésima
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
          26-50%: Mala
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
          51-70%: Regular
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2"></span>
          71-90%: Buena
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
          91-100%: Excelente
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickFormatter={formatDateSimple}
            interval={0}
            height={40}
            padding={{ left: 20, right: 20 }} 
          >
            <Label value="Fecha" position="insideBottom" offset={-5} />
          </XAxis>
          <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]}>
            <Label
              value="% Calidad del agua"
              angle={-90}
              position="insideLeft"
              offset={10}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip
            formatter={(v: number) => `${v}%`}
            labelFormatter={(label) => `Fecha: ${formatDateSimple(label)}`}
             contentStyle={{
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    color: "#000000",
  }}
          />
          <Line
            type="monotone"
            dataKey="ica_value"
            stroke="#6366F1"
            strokeWidth={3}
            dot={{ r: 5, fill: "#6366F1" }}
            activeDot={{ r: 7 }}
          />

          {/* lienas de  rango */}
          <ReferenceLine y={25} stroke="#ef4444"  />
          <ReferenceLine y={50} stroke="#f97316"  />
          <ReferenceLine y={70} stroke="#facc15"  />
          <ReferenceLine y={90} stroke="#4ade80" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
