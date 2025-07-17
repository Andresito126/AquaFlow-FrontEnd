import { useState } from "react";
import { useLocation } from "react-router-dom";
import CardUser from "../../users/Presentation/components/dashboard/card-user";
import IconMale from "../../../core/assets/icons/login-register/icon-male.svg";
import { useTheme } from "../hooks/useTheme";
import { useDateTime } from "../hooks/useDataTime";
import WeatherWidget from "../../weather/presentation/layouts/weather-layout";
import ThemeToggleButton from "../components/generic/ThemeToggleButton";
import { FilterAssignmentCard } from "../../filter/presentation/components/FilterAssignmentCard";
import { Modal } from "../components/generic/Modal";
import { useUserFilters } from "../../filter/presentation/hooks/useUserFilter";


export const AsideContainerLayout = () => {
  const activeFilterId = localStorage.getItem("activeFilterId");
  const { date, time } = useDateTime();
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { filters, addFilter } = useUserFilters();

  const showAsideInRoutes = ["/dashboard"];
  if (!showAsideInRoutes.includes(pathname)) return null;

  return (
    <aside className="flex flex-col justify-between w-[300px] h-full mt-[10px] mb-[10px] min-h-screen lg:block mr-[20px]">
      <div className="flex flex-col rounded-lg">
        <CardUser avatar={IconMale} name="John Doe" hour={time} date={date} />

        <div className="px-[8px] py-[8px] shadow-lg mt-5 dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] flex border-1 rounded-[20px] flex-col gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="dark:bg-[#011521] py-1 px-3 rounded-lg dark:hover:bg-[#27333a] hover:bg-[#c9d6dd] text-sm border-[#CBD5E1] dark:border-[#105B85] border-[1px]"
          >
            Asignar filtro
          </button>

          {filters.length > 0 && (
            <select className="text-black rounded-md px-2 py-1 w-full">
              <option value="">-- Filtros asignados --</option>
              {filters.map((filterId) => (
                <option key={filterId} value={filterId}>
                  {filterId}
                </option>
              ))}
            </select>
          )}

          {activeFilterId && (
  <div className="mt-2 px-2 py-1 rounded-md text-sm">
    Filtro activo: <strong>{activeFilterId}</strong>
  </div>
)}
        </div>
      </div>

      <div className="shadow-lg p-2 rounded-[20px] mt-[7%] min-h-[250px] dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-1">
        <h1>MASCTOTA IMG</h1>
      </div>

      <div className="shadow-lg p-2 rounded-[20px] mt-[7%] min-h-[380px] dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-1">
        <WeatherWidget city="Mexico,mx" />
      </div>

      <div>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FilterAssignmentCard
          userId="a1010283-e74e-478d-87ad-56ada0238bf1"
          onAssigned={(filterId) => {
            addFilter(filterId);
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </aside>
  );
};
