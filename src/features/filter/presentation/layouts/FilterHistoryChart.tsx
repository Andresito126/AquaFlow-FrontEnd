import  { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Label,
} from "recharts";

interface FilterHistoryChartProps {
  days: Array<string | Date>;
  effectiveness: number[];
  title?: string;
}

export function FilterHistoryChart({
  days,
  effectiveness,
  title = "Efectividad histórica del filtrador",
}: FilterHistoryChartProps) {
  const data = useMemo(() => {
    return days.map((d, i) => {
      const dateObj = d instanceof Date ? d : new Date(d);
      return {
        date: dateObj.toLocaleDateString("es-MX", { day: "2-digit", month: "2-digit" }),
        effectiveness: Math.round(effectiveness[i]),
      };
    });
  }, [days, effectiveness]);

    const { t } = useTranslation("common");


  return (
    <div className="relative z-0 w-full h-72 md:h-96 rounded-2xl p-4 md:p-6  dark:bg-[#0B1727]/70 border border-slate-200 dark:border-[#105B85]/30 shadow-lg backdrop-blur-xl overflow-hidden">
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute -inset-40 bg-gradient-to-tr  z-0" />

      <h3 className="relative z-10 text-lg md:text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        {title ?? t("pages.filter.historyChart.title")}
      </h3>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" />

          <XAxis
            dataKey="date"
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            height={36}
          >
            <Label value={t("pages.filter.historyChart.xAxis")} offset={-5} position="insideBottom" fill="#94a3b8" />
          </XAxis>

          <YAxis
            domain={[0, 100]}
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
            ticks={[0, 20, 40, 60, 80, 100]}
          >
            <Label
              value={t("pages.filter.historyChart.xAxis")}
              angle={-90}
              position="middle"
              offset={-10}
              fill="#94a3b8"
            />
          </YAxis>

          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(148,163,184,0.15)",
              borderRadius: 8,
              color: "#e2e8f0",
            }}
            labelStyle={{ color: "#cbd5e1" }}
            formatter={(value: any) => [`${value}%`, t("pages.filter.historyChart.tooltip")]}
          />

          {/* Línea ÚNICA con gradiente */}
          <Line
            type="monotone"
            dataKey="effectiveness"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={{ r: 4, strokeWidth: 0, fill: "#38bdf8" }}
            activeDot={{ r: 6, strokeWidth: 0, fill: "#0ea5e9" }}
            isAnimationActive={true}
            animationDuration={800}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
