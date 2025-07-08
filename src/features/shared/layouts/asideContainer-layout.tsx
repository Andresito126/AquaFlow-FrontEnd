import { useLocation } from "react-router-dom";

export const AsideContainerLayout = () => {
  const { pathname } = useLocation();

//to sjow the aside in certain routes (it's a state)
  const showAsideInRoutes = ["/dashboard"];

  if (!showAsideInRoutes.includes(pathname)) return null;

  return (
    <aside className="w-[300px] bg-[#01182B] shadow-lg p-4 hidden lg:block mr-[20px] ">
      <h2 className="text-lg font-semibold mb-4">Resumen</h2>
    
        <p className="text-sm text-gray-700">Device</p>
        <p className="text-sm text-gray-700">Mascota</p>
        <p className="text-sm text-gray-700"> Clima</p>
     
    </aside>
  );
};
