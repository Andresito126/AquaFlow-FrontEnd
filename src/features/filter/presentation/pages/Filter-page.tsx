import Header from "../../../shared/components/generic/header";
import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import { useTheme } from "../../../shared/hooks/useTheme";
import IconFilterHeader from "../../../../core/assets/icons/Filter/icon-filter.svg";
import { FilterLayerRow } from "../components/FilterLayerRow";
import { FilterGeneralStatus } from "../layouts/FilterGeneralStatus";
import { useFilterStatus } from "../hooks/useFilterStatus";
import { FilterHistoryChart } from "../layouts/FilterHistoryChart";
import { dummyLayers } from "../hooks/dummyLayers";

export const FilterPage = () => {
  const activeFilterId = localStorage.getItem("activeFilterId");
  const { theme, toggleTheme } = useTheme();
  const { data, loading, error } = useFilterStatus(activeFilterId ?? "");

  if (!activeFilterId) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <h2 className="text-[25px] font-semibold mb-2">
          No has seleccionado un filtro
        </h2>
        <p className="text-[18px]">
          Por favor selecciona un filtro activo para poder visualizar las
          estadísticas de tu filtrador.
        </p>
      </div>
    );
  }

  const v = data?.filter_status.status ?? 0;
  const d = data?.filter_status.estimated_day
    ? new Date(data.filter_status.estimated_day).toLocaleDateString()
    : "-";
  const s: "Bueno" | "Regular" | "Malo" =
    v > 70 ? "Bueno" : v > 40 ? "Regular" : "Malo";

  const layers = dummyLayers.map((layer) => ({
    left: { ...layer.left, value: v, status: s, date: d },
    right: { ...layer.right, value: v, status: s, date: d },
  }));

  return (
    <div className="flex flex-col items-stretch gap-6 px-4">
      <Header
        title="Conoce a tu filtro"
        subtitle="Conoce el estado y la información de las capas de tu filtro"
        icon2={IconFilterHeader}
      />

      <div className="space-y-8">
        {loading && <p className="text-slate-400">Cargando estado...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {data && (
          <>
            <FilterGeneralStatus
              status={data.filter_status.status}
              estimated_days={data.filter_status.estimated_days}
              estimated_day={data.filter_status.estimated_day.toString()}
              probability_change={data.filter_status.probability_change}
            />
          </>
        )}
      </div>

      {layers.map((layer, index) => (
        <FilterLayerRow
          key={index}
          left={layer.left}
          right={layer.right}
          direction={index % 2 === 0 ? "right" : "left"}
        />
      ))}

      <div className="fixed top-4 right-4 z-10">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      <div className="space-y-8">
        {data && (
          <FilterHistoryChart
            days={data.historical_status_filter.days}
            effectiveness={data.historical_status_filter.effectiveness}
          />
        )}
      </div>
    </div>
  );
};
