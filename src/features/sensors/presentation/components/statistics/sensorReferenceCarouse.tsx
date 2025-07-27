import { useState } from "react";
import SensorReferenceCard from "./sensorReferenceCard";
import IconTemperature from "../../../../../core/assets/icons/sensors/icon-temperature-dashboard.svg";
import IconPH from "../../../../../core/assets/icons/sensors/icon-ph-dash.svg";
import IconTurbidity from "../../../../../core/assets/icons/sensors/icon-turbuidez-dash.svg";
import IconTDS from "../../../../../core/assets/icons/sensors/icon-tds-dash.svg";

type SensorReference = {
  title: string;
  normal: string;
  caution: string;
  unit: string;
  imageUrl?: string;
  statusColor: "temperature" | "ph" | "tds" |"turbidity";
};

const dummyData: SensorReference[] = [
  {
    title: "Temperature",
    normal: "36 - 40",
    caution: "< 30 & > 40",
    unit: "°C",
    imageUrl: IconTemperature,
    statusColor: "temperature",
  },
  {
    title: "PH",
    normal: "6.5 - 8.5",
    caution: "< 6.5 & > 8.5",
    unit: "PH",
    imageUrl: IconPH,
    statusColor: "ph",
  },
  {
    title: "TDS (Totales de sólido disueltos)",
    normal: "50 - 150",
    caution: "< 50 & > 150",
    unit: "PPM",
    imageUrl: IconTDS,
    statusColor: "tds",
  },
  {
    title: "Turbidez",
    normal: "50 - 150",
    caution: "< 50 & > 150",
    unit: "NTU",
    imageUrl: IconTurbidity,
    statusColor: "turbidity",
  },
];


export const SensorReferenceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % dummyData.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + dummyData.length) % dummyData.length);

  return (
    <div className="relative overflow-hidden w-full flex justify-center items-center mt-[1%] mb-[1%]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {dummyData.map((sensor, index) => (
          <div
            key={index}
            className="min-w-full h-fit flex justify-center pr-5 pl-5"
          >
            <SensorReferenceCard {...sensor} />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-[#001C30] border border-slate-300 dark:border-slate-600 shadow-md rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-[#001C30] border border-slate-300 dark:border-slate-600 shadow-md rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        ▶
      </button>
    </div>
  );
};
