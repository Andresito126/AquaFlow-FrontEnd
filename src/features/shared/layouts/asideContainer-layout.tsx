import { useLocation } from "react-router-dom";
import CardUser from "../../users/Presentation/components/dashboard/card-user";
import IconMale from "../../../core/assets/icons/login-register/icon-male.svg";
import { useTheme } from "../hooks/useTheme";
export const AsideContainerLayout = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  //to sjow the aside in certain routes (it's a state)
  const showAsideInRoutes = ["/dashboard"];

  if (!showAsideInRoutes.includes(pathname)) return null;

  return (
    <aside className=" flex-col w-[300px] bg-[#01182B] shadow-lg mt-[10px] hidden lg:block mr-[20px] ">
      <div className="flex flex-col gap-[20px]  h-[10.625rem]">
        <div className="shadow-lg  h-full bg-[#011521]  text-white rounded-[20px]">
          <CardUser
            avatar={IconMale}
            name="John Doe"
            hour="10:30"
            date="2023/10/01"
          />
        </div>
        <div className="shadow-lg  h-full bg-[#011521] flex  text-white rounded-[20px]">
          <h1>Device </h1>
        </div>
        <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300">
          <button
            onClick={toggleTheme}
            className="text-xl focus:outline-none transition"
            title="Cambiar tema"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </aside>
  );
};
