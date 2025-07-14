
import Header from "../../../shared/components/generic/header";
import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import { useTheme } from "../../../shared/hooks/useTheme";
import IconFilterHeader from "../../../../core/assets/icons/Filter/icon-filter.svg";
import { FilterLayerRow } from "../components/FilterLayerRow";

const dummyLayers = [
  {
    left: { name: "Sand", value: 59, status: "Medium" as const, date: "11-04-25" },
    right: { name: "Activated Carbon", value: 75, status: "Good" as const, date: "22-04-25" },
  },
  {
    left: { name: "Land", value: 65, status: "Medium" as const, date: "25-04-25" },
    right: { name: "Land", value: 65, status: "Medium" as const, date: "25-04-25" },
  },
  {
    left: { name: "Water", value: 15, status: "Bad" as const, date: "01-04-25" },
    right: { name: "Activated Carbon", value: 75, status: "Good" as const, date: "22-04-25" },
  },
  {
    left: { name: "Activated Carbon", value: 75, status: "Good" as const, date: "22-04-25" },
    right: { name: "Activated Carbon", value: 75, status: "Good" as const, date: "22-04-25" },
  },
];

export const FilterPage = () => {
  const { theme, toggleTheme } = useTheme();

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
