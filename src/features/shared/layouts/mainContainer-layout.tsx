import { SideBar } from "./sideBar/sideBar-layout";
import { Outlet } from "react-router-dom";
export const MainContainerLayout = () => {
  return (
    <div className="flex">
      <SideBar />

      {/* principal content */}
      <main className="ml-20 w-full min-h-screen bg-gray-100 p-6">
        <Outlet /> {/* renders the routes (pages) */}
      </main>
    </div>
  );
};
