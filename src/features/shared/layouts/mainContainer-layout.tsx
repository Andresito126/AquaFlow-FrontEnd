import { SideBar } from "./sideBar/sideBar-layout";
import { Outlet } from "react-router-dom";
export const MainContainerLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      {/* principal content */}
      <main className="flex-1 bg-green-800 p-3 ">
        <Outlet /> {/* renders the routes (pages) */}
      </main>
    </div>
  );
};
