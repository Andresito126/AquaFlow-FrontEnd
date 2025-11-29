import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  ReferenceArea,
} from "recharts";

import { useTranslation } from "react-i18next";

interface WaterQualityTrendPoint {
  day: string;
  ica_value: number;
}

interface Props {
  title: string;
  data: WaterQualityTrendPoint[];
}

export const WaterQualityBarChart = ({ title, data }: Props) => {
  const formatDateSimple = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const { t } = useTranslation("common");

  const getBarColor = (value: number) => {
    if (value <= 25) return "#ef4444";
    if (value <= 50) return "#f97316";
    if (value <= 70) return "#eab308";
    if (value <= 90) return "#84cc16";
    return "#16a34a";
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full border-[#CBD5E1] dark:border-[#105B85] border-[1px]">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-black">
        {title}
      </h2>

      <div className="flex gap-20 mb-4 text-sm text-gray-600 ">
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          0-25%: {t("common.pages.statistics.barChart.25")}
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
          26-50%: {t("common.pages.statistics.barChart.50")}
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
          51-70%: {t("common.pages.statistics.barChart.70")}
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2"></span>
          71-90%: {t("common.pages.statistics.barChart.90")}
        </div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-emerald-600 mr-2"></span>
          91-100%: {t("common.pages.statistics.barChart.100")}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          {/* area de colores */}
          <ReferenceArea y1={0} y2={25} fill="#ef4444" fillOpacity={0.2} />
          <ReferenceArea y1={26} y2={50} fill="#f97316" fillOpacity={0.2} />
          <ReferenceArea y1={51} y2={70} fill="#eab308" fillOpacity={0.2} />
          <ReferenceArea y1={71} y2={90} fill="#84cc16" fillOpacity={0.2} />
          <ReferenceArea y1={91} y2={100} fill="#16a34a" fillOpacity={0.2} />

          <XAxis
            dataKey="day"
            tickFormatter={formatDateSimple}
            interval={0}
            height={40}
          >
            <Label value={t("common.pages.statistics.barChart.date")} offset={-5} position="insideBottom" />
          </XAxis>

          <YAxis ticks={[0, 20, 40, 60, 80, 100]}>
            <Label
              value={t("common.pages.statistics.barChart.%cality")} 
              angle={-90}
              position="insideLeft"
              offset={10}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>

          <Tooltip
            labelFormatter={(label) => `${t("common.pages.statistics.barChart.cality")}: ${formatDateSimple(label)}`}
            formatter={(value: number) => [`${value}%`, "Calidad"]}
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              color: "#000000",
            }}
          />

          <Bar dataKey="ica_value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.ica_value)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
