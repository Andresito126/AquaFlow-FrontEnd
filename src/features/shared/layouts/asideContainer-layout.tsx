import { useLocation } from "react-router-dom";

export const AsideContainerLayout = () => {
  const { pathname } = useLocation();

  //to sjow the aside in certain routes (it's a state)
  const showAsideInRoutes = ["/dashboard"];

  if (!showAsideInRoutes.includes(pathname)) return null;

  return (
    <aside className=" flex-col w-[300px] bg-[#01182B] shadow-lg mt-[10px] hidden lg:block mr-[20px] ">
      <div className="flex flex-col gap-[20px]  h-[10.625rem]">
        <div className="shadow-lg p-4 h-full bg-[#011521] flex justify-between items-center px-[20px] py-[20px] text-white rounded-[20px]">
          <h1>Usuario</h1>
        </div>
        <div className="shadow-lg p-4 h-full bg-[#011521] flex justify-between items-center px-[20px] py-[20px] text-white rounded-[20px]">
          <h1>Device </h1>
        </div>
      </div>
 

      <p className="text-sm text-gray-700">Device</p>
      <p className="text-sm text-gray-700">Mascota</p>
      <p className="text-sm text-gray-700"> Clima</p>
    </aside>
  );
};
