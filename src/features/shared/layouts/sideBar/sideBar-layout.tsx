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
        className="w-[18.75rem]  bg-[#011423] overflow-y-auto mb-[20px] mt-[20px] ml-[10px] rounded-[20px]"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex flex-col justify-between  bg-[#011423]">
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
                to="/stats"
                icon={IconStats}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                nameNav= "Estado del filtro"
                to="/dispositioves"
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
