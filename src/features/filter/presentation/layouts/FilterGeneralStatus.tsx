import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export interface FilterStatusDTO {
  status: number; // 0-100
  estimated_days: number;
  probability_change: number; // 0-100
  estimated_day: string;
}

const statusLabel = (v: number) =>
  v > 70 ? "Bueno" : v > 40 ? "Regular" : "Malo";

const statusColor = (v: number) =>
  v > 70
    ? "text-emerald-500 dark:text-emerald-400"
    : v > 40
    ? "text-yellow-500 dark:text-yellow-400"
    : "text-red-500 dark:text-red-400";

const ringColor = (v: number) =>
  v > 70
    ? "stroke-emerald-400"
    : v > 40
    ? "stroke-yellow-400"
    : "stroke-red-400";

function ProgressRing({
  value,
  size = 120,
  stroke = 12,
}: {
  value: number;
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);


  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        <circle
          strokeWidth={stroke}
          stroke="rgba(0,0,0,0.08)"
          className="dark:stroke-[rgba(255,255,255,0.08)]"
          fill="transparent"
          r={r}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          strokeWidth={stroke}
          strokeLinecap="round"
          className={ringColor(value)}
          fill="transparent"
          r={r}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
        />
      </svg>
      <span className="absolute text-xl font-bold text-slate-800 dark:text-white">
        {Math.round(value)}%
      </span>
    </div>
  );
}

export function FilterGeneralStatus({
  status,
  estimated_days,
  probability_change,
  estimated_day,
}: FilterStatusDTO) {
  const label = useMemo(() => statusLabel(status), [status]);
  const color = useMemo(() => statusColor(status), [status]);
  const date = useMemo(
    () =>
      new Date(estimated_day).toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [estimated_day]
  );

  const { t } = useTranslation("common");


  return (
    <motion.div
      className="w-full p-6 border-1 rounded-[20px] bg-white dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] backdrop-blur shadow-lg flex flex-col gap-6"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-6">
        <ProgressRing value={status} />

        <div className="flex flex-col gap-1">
          <h2 className={`text-2xl font-bold ${color}`}>
            {t("common.pages.filter.generalStatus.status")}: {label}
          </h2>

          <p className="text-slate-700 dark:text-slate-300">
            {t("common.pages.filter.generalStatus.daysLeft", { days: estimated_days })}
          </p>

          <p className="text-slate-700 dark:text-slate-300">
            {t("common.pages.filter.generalStatus.probabilityChange", { value: probability_change })}
          </p>

          <p className="text-slate-700 dark:text-slate-300">
            {t("common.pages.filter.generalStatus.recommendedChange", { date })}
          </p>
        </div>
      </div>

      <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
        <p>
          {t("common.pages.filter.generalStatus.info1", {
            status: status.toFixed(2),
            prob: probability_change
          })}
        </p>

        <p>
          {t("common.pages.filter.generalStatus.info2", { date })}
        </p>
      </div>
    </motion.div>
  );
}
