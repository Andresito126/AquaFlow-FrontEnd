import logoAF from "../../../../core/assets/icons/sidebar/AF-logo-sidebar.svg";
import IconDashboard from "../../../../core/assets/icons/sidebar/icon-dashboard.svg";
import IconDispositives from "../../../../core/assets/icons/sidebar/icon-dispositives.svg";
import IconNotifications from "../../../../core/assets/icons/sidebar/icon-notifications.svg";
import IconOut from "../../../../core/assets/icons/sidebar/icon-out.svg";
import IconSettings from "../../../../core/assets/icons/sidebar/icon-settings.svg";
import IconStats from "../../../../core/assets/icons/sidebar/icon-stats.svg";
import AsideIconReu from "../../components/navItems/aside-icon-reu";
export const SideBar = () => {
  return (
    <>
      <aside
        id="separator-sidebar"
        className="w-[18.75rem]  dark:bg-[#011423] dark:border-[#105B85] dark:border-1 overflow-y-auto dark:mb-[10px] dark:mt-[10px] dark:ml-[10px] dark:rounded-[20px] text-white"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex flex-col justify-between  dark:bg-[#011423] bg-black text-white">
          {/* top icons */}
          <div>
            <img src={logoAF} alt="Logo" className="mx-auto mb-[1.875rem]" />

            <ul className="flex flex-col gap-y-1 mt-6">

              <AsideIconReu
                nameNav= "Dashboard"
                to="/dashboard"
                icon={IconDashboard}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                nameNav= "Estadísticas"
                to="/stadistics"
                icon={IconStats}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                nameNav= "Estado del filtro"
                to="/dispositives"
                icon={IconDispositives}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                nameNav= "Notificaciones"
                to="/notifications"
                icon={IconNotifications}
                alt="Dashboard Icon"
              ></AsideIconReu>
            </ul>
          </div>

          {/* bottom icons */}

          <ul className="flex flex-col gap-y-1 mt-6">
 
            <AsideIconReu
              nameNav= "Configuración"
              to="/settings"
              icon={IconSettings}
              alt="Dashboard Icon"
            ></AsideIconReu>

            <AsideIconReu
              nameNav= "Cerrar sesión"
              to="/signOut"
              icon={IconOut}
              alt="Dashboard Icon"
            ></AsideIconReu>
          </ul>
        </div>
      </aside>
    </>
  );
};
