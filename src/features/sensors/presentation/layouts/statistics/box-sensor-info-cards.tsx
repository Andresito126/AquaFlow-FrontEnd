import HistoryInfoCard from "../../components/statistics/historyInfoCard";
import { SensorReferenceCarousel } from "../../components/statistics/sensorReferenceCarouse";

export const BoxSensorsInfoCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full  shadow-lg  h-full    ">
      {/* left */}
      <div className="w-full md:w-1/3 dark:bg-[#011521] border-[#CBD5E1] border-[1px] dark:border-[#105B85] rounded-2xl p-4 shadow-lg">
        <HistoryInfoCard />
      </div>

      {/* right */}
      <div className="w-full md:w-2/3 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  justify-between items-center px-[20px] py-[5px] rounded-[20px]  ">
        <SensorReferenceCarousel />
      </div>
    </div>
  );
};
