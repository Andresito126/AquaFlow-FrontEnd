import { SideBar } from "./sideBar/sideBar-layout";
import { Outlet } from "react-router-dom";
export const MainContainerLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      {/* principal content */}
      <main className="flex-1 bg-[#01182B] mt-[20px] ml-[20px] mr-[20px] ">
        <Outlet /> {/* renders the routes (pages) */}
      </main>
    </div>
  );
};
