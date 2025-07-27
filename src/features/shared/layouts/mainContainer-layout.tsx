import { AsideContainerLayout } from "./asideContainer-layout";
import { SideBar } from "./sideBar/sideBar-layout";
import { Outlet } from "react-router-dom";
export const MainContainerLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      {/* principal content */}
      <main className="flex-1 dark:bg-[#01182B] mt-[10px] mb-[10px] ml-[20px] mr-[20px] gap-y-auto">
        <Outlet /> {/* renders the routes (pages) */}
      </main>

      <AsideContainerLayout/>
    </div>
  );
};
