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
   <div className="bg-[#031c2c] text-white p-4 rounded-2xl w-[160px] h-[220px] flex flex-col justify-between items-center shadow-md">
      <img src={icon} alt={alt} className="h-6 mt-2" />
      <h3 className="text-[26px] font-bold">{data}</h3>
      <img src={graph} alt="Gráfico" className="h-8" />
      <p className="text-[16px] font-semibold">{title}</p>
    </div>
  );
};

export default StatsRealTime;
