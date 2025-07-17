import { useLocation } from "react-router-dom";
import CardUser from "../../users/Presentation/components/dashboard/card-user";
import IconMale from "../../../core/assets/icons/login-register/icon-male.svg";
import { useTheme } from "../hooks/useTheme";
import { useDateTime } from "../hooks/useDataTime";
import WeatherWidget from "../../weather/presentation/layouts/weather-layout";
import ThemeToggleButton from "../components/generic/ThemeToggleButton";
import { FilterAssignmentCard } from "../../filter/presentation/components/FilterAssignmentCard";

export const AsideContainerLayout = () => {
  const { date, time } = useDateTime();
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  //to sjow the aside in certain routes (it's a state)
  const showAsideInRoutes = ["/dashboard"];

  if (!showAsideInRoutes.includes(pathname)) return null;

  return (
    <aside className=" flex flex-col justify-between w-[300px] h-full  mt-[10px] mb-[10px] min-h-screen  lg:block mr-[20px] ">
      {/* <aside className="flex flex-col justify-between w-[300px] min-h-screen  lg:flex mr-[20px] mt-[10px] mb-[10px]"> */}

      <div className="flex flex-col  rounded-lg  ">
        <CardUser avatar={IconMale} name="John Doe" hour={time} date={date} />

        <div className="px-[8px] py-[8px]  shadow-lg mt-5 dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85]   flex border-1 rounded-[20px]">
          <FilterAssignmentCard userId="a1010283-e74e-478d-87ad-56ada0238bf1" />
        </div>
      </div>
      <div className="shadow-lg p-2 rounded-[20px] mt-[7%] min-h-[220px] dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-1">
        <h1>MASCTOTA IMG</h1>
      </div>

      <div className="shadow-lg p-2 rounded-[20px] mt-[7%] min-h-[380px] dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-1">
        <WeatherWidget city="Mexico,mx" />
      </div>
      <div>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </aside>
  );
};
