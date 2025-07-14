import { useState } from "react";
import SensorReferenceCard from "./sensorReferenceCard";

const dummyData = [
  { title: "Temperature", normal: "36 - 40", caution: "< 30 & > 40", unit: "°C" },
  { title: "PH", normal: "6.5 - 8.5", caution: "< 6.5 & > 8.5", unit: "" },
  { title: "TDS", normal: "50 - 150", caution: "< 50 & > 150", unit: "ppm" },
];

export const SensorReferenceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % dummyData.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + dummyData.length) % dummyData.length);

  return (
    <div className="relative overflow-hidden w-full flex justify-center items-center mt-[1.5%]">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {dummyData.map((sensor, index) => (
         <div key={index} className="min-w-full h-fit flex justify-center pr-5 pl-5">

            <SensorReferenceCard {...sensor} />
          </div>
        ))}
      </div>

    
      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-opacity-30 px-0< py-1 rounded-full">
        ◀
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-opacity-30 px-0< py-1 rounded-full">
        ▶
      </button>
    </div>
  );
};
