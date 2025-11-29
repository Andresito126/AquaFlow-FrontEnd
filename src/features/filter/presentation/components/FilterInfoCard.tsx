import CircularProgressIcon from "../../../shared/components/generic/CircularProgressIcon";
import { useTranslation } from "react-i18next";

type Props = {
  name: string;
  value: number;
  status: string;                
  statusKey?: "good" | "regular" | "bad";
  date: string;
};

const statusColors: Record<"good" | "regular" | "bad", string> = {
  good: "bg-green-600",
  regular: "bg-yellow-400",
  bad: "bg-red-500",
};


export const FilterInfoCard = ({ name, value, status, statusKey, date }: Props) => {
  const color = statusKey ? statusColors[statusKey] : "bg-gray-400";
  const { t } = useTranslation("common");
  return (
    <div className="shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] p-4 rounded-xl w-full h-[120px] flex flex-col justify-center">
      <h3 className="text-[20px] font-bold">{name}</h3>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1">
          <CircularProgressIcon progress={value} size={48} />
          <span className="text-[16px] font-semibold dark:text-white">{value}%</span>
        </div>
        <span
          className={`text-[16px] font-semibold px-2 rounded-[20px] ${color}`}
        >
          {status}
        </span>
      </div>
      <p className="text-semibold mt-2">{t("common.pages.filter.changeRecomended")} - {date}</p>
    </div>
  );
};