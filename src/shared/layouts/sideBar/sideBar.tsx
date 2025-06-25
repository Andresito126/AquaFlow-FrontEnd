import logoAF from "../../../core/assets/icons/sidebar/AF-logo-sidebar.svg";
import IconDashboard from "../../../core/assets/icons/sidebar/icon-dashboard.svg";
import IconDispositives from "../../../core/assets/icons/sidebar/icon-dispositives.svg";
import IconNotifications from "../../../core/assets/icons/sidebar/icon-notifications.svg";
import IconOut from "../../../core/assets/icons/sidebar/icon-out.svg";
import IconSettings from "../../../core/assets/icons/sidebar/icon-settings.svg";
import IconStats from "../../../core/assets/icons/sidebar/icon-stats.svg";
import AsideIconReu from "../../../shared/components/navItems/aside-icon-reu";
export const SideBar = () => {
  return (
    <>
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 max-w-20 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 oflex flex-col justify-between  bg-[#0B1E2C]">
          {/* top icons */}
          <div>
            <img src={logoAF} alt="Logo" className="mx-auto mb-[1.875rem]" />

            <ul className="flex flex-col gap-y-3 mt-6">
              <hr className="bg-white h-px border-0" />
              <AsideIconReu
                to="/dashboard"
                icon={IconDashboard}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                to="/stats"
                icon={IconStats}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                to="/notifications"
                icon={IconNotifications}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                to="/dispotives"
                icon={IconDispositives}
                alt="Dashboard Icon"
              ></AsideIconReu>
            </ul>
          </div>

          {/* bottom icons */}

          <ul className="flex flex-col gap-y-3 mt-6">
            <hr className="bg-white h-px border-0" />
            <AsideIconReu
              to="/settings"
              icon={IconSettings}
              alt="Dashboard Icon"
            ></AsideIconReu>

            <AsideIconReu
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
