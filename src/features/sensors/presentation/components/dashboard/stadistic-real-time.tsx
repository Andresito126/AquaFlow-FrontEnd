import React from "react";

type Props = {
  icon: string;
  data: string;
  graph: string;
  title: string;
  alt?: string;
};

const StatsRealTime: React.FC<Props> = ({ icon, data, graph, title, alt }) => {
  return (
   <div className="dark:bg-[#031c2c] dark:border-0 p-4 rounded-2xl w-[160px] h-[220px] flex flex-col justify-between items-center shadow-md border-[#CBD5E1] border-[1px] ">
      <img src={icon} alt={alt} className="h-9 mt-2" />
      <h3 className="text-[26px] font-bold">{data}</h3>
      <img src={graph} alt="Gráfico" className="h-8" />
      <p className="text-[18px] font-semibold">{title}</p>
    </div>
  );
};

export default StatsRealTime;
