
import Header from "../../../shared/components/generic/header";
import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import { useTheme } from "../../../shared/hooks/useTheme";
import IconFilterHeader from "../../../../core/assets/icons/Filter/icon-filter.svg";
import { FilterLayerRow } from "../components/FilterLayerRow";

const dummyLayers = [
  {
    left: { name: "Sand", value: 59, status: "Good" as const, date: "11-04-25",  backContent: " Sand traps fine particles",},
    right: { name: "Carbón activado", value: 89, status: "Good" as const, date: "22-04-25" , backContent: "Un filtro de carbón emplea gránulos de carbón para bloquear contaminantes atrapándolos mediante la “adsorción”. Este último es un proceso mediante el cual los líquidos y gases son atraídos por otros líquidos o sólidos.",},
  },
  {
    left: { name: "Arena mineral", value: 55, status: "Medium" as const, date: "25-04-25",  backContent: "La arena mineral está compuesta por partículas naturales que filtran físicamente las impurezas y sedimentos. Su estructura porosa permite retener partículas sólidas, mejorando la claridad del agua.",},
    right: { name: "Land", value: 65, status: "Medium" as const, date: "25-04-25",  backContent: " Sand traps fine particles", },
  },
  {
    left: { name: "Water", value: 15, status: "Good" as const, date: "01-04-25",  backContent: " Sand traps fine particles", },
    right: { name: "Arena de silicona", value: 93, status: "Good" as const, date: "22-04-25",  backContent: "La arena de sílice es un filtro eficiente que retiene contaminantes mediante un lecho granular. Gracias a su alta dureza y estabilidad química, es ideal para filtrar partículas finas y mejorar la calidad del agua.", },
  },
  {
    left: { name: "Zeolitas naturales", value: 29, status: "Bad" as const, date: "22-04-25",  backContent: " Las zeolitas son minerales microporosos que absorben metales pesados y sustancias tóxicas del agua. Su alta capacidad de intercambio iónico las convierte en filtros naturales muy efectivos y duraderos.", },
    right: { name: "Activated Carbon", value: 18, status: "Bad" as const, date: "22-04-25",  backContent: " Sand traps fine particles", },
  },
    {
    left: { name: "Bolas minerales", value: 87, status: "Good" as const, date: "22-04-25",  backContent: " Sand traps fine particles", },
    right: { name: "Bolas minerales", value: 87, status: "Good" as const, date: "22-04-25",  backContent: "Las bolas minerales contienen elementos que equilibran el pH y eliminan olores desagradables. Su acción ayuda a mantener el agua limpia y saludable, actuando como un filtro complementario para mejorar su sabor y calidad.", },
  },

];

export const FilterPage = () => {
  const activeFilterId = localStorage.getItem("activeFilterId");
  const { theme, toggleTheme } = useTheme();

   if (!activeFilterId) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <h2 className="text-[25px] text-xl font-semibold mb-2">No has seleccionado un filtro</h2>
        <p className="text-[18px]">
          Por favor selecciona un filtro activo para poder visualizar las estadísticas de tu filtrador. Selecciónalo  en la pagina de inicio (DASHBOARD).
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-stretch gap-6 px-4">
      <Header
        title="Meet your filter"
        subtitle="Know the status and data of your filter layers"
        icon2={IconFilterHeader}
      />

      {dummyLayers.map((layer, index) => (
        <FilterLayerRow
          key={index}
          left={layer.left}
          right={layer.right}
          direction={index % 2 === 0 ? "right" : "left"}
        />
      ))}

      <div className="mt-6 flex justify-end">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};
