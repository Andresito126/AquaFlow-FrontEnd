import StatsRealTime from "../components/dashboard/stadistic-real-time";
import IconTemperature from "../../../../core/assets/icons/sensors/icon-temperature-dashboard.svg";
import BarTemperature from "../../../../core/assets/icons/sensors/bar-counter-temperature.svg";
import IconPH from "../../../../core/assets/icons/sensors/icon-ph-dash.svg";
import BarPH from "../../../../core/assets/icons/sensors/bar-counter-ph.svg";
import IconTurbidity from "../../../../core/assets/icons/sensors/icon-turbuidez-dash.svg";
import BarTurbuidez from "../../../../core/assets/icons/sensors/bar-counter-turbuidez.svg";
import IconTDS from "../../../../core/assets/icons/sensors/icon-tds-dash.svg";
import BarTDS from "../../../../core/assets/icons/sensors/bar-counter-tds.svg";
export const CardDashboardRealTime = () => {
  return (
    <>
    <div className="shadow-lg p-6 bg-[#011521] rounded-[20px]">
      <div className="mb-4">
        <h2 className="text-[32px] font-semibold">
          Monitoreo sobre la calidad del agua
        </h2>
      </div>
<div className="flex flex-wrap items-center justify-between ml-[10px] mr-[10px]">
        <StatsRealTime
          icon={IconTemperature}
          data="35 °C"
          graph={BarTemperature}
          title="Temperature"
          alt="Ícono de temperatura"
        />
        <StatsRealTime
          icon={IconPH}
          data="7,3"
          graph={BarPH}
          title="Ph"
          alt="Ícono de pH"
        />
        <StatsRealTime
          icon={IconTurbidity}
          data="55 ppm"
          graph={BarTurbuidez}
          title="Turbidez"
          alt="Ícono de turbidez"
        />
        <StatsRealTime
          icon={IconTDS}
          data="5 pm"
          graph={BarTDS}
          title="TDS"
          alt="Ícono de TDS"
        />
      </div>
    </div>
    </>
  );
};
