import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

interface DataPoint {
  time: string; //  formato 'yyyy-mm-dd'
  quality: number;
}

interface Props {
  title: string;
  data: DataPoint[];
}

export const WaterQualityBarChart = ({ title, data }: Props) => {
  //  formatear fecha 'yyyy-mm-dd' a 'dd-mm-yyyy'
  const formatDateSimple = (dateStr: string) => {
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    const [year, month, day] = parts;
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full border-[#CBD5E1] dark:border-[#105B85] border-[1px]">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            tickFormatter={formatDateSimple}
            interval={0}
            angle={0}
            textAnchor="middle"
            height={60}
          >
            <Label value="Fecha" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis ticks={[0, 20, 40, 60, 80, 100]}>
            <Label
              value="% Calidad"
              angle={-90}
              position="insideLeft"
              offset={10}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip
            labelFormatter={(label) => `Fecha: ${formatDateSimple(label)}`}
            formatter={(value: number) => `${value}%`}
          />
          <Bar dataKey="quality" fill="#4F46E5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
