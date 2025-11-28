import { useNavigate } from "react-router-dom";
import logoAF from "../../../../core/assets/icons/sidebar/AF-logo-sidebar.svg";
import IconDashboard from "../../../../core/assets/icons/sidebar/icon-dashboard.svg";
import IconDispositives from "../../../../core/assets/icons/sidebar/icon-dispositives.svg";
import IconOut from "../../../../core/assets/icons/sidebar/icon-out.svg";
import IconStats from "../../../../core/assets/icons/sidebar/icon-stats.svg";
import AsideIconReu from "../../components/navItems/aside-icon-reu";
import { showConfirmationAlert } from "../../utils/swal";
import { useTranslation } from "react-i18next";

export const SideBar = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("common");
  const handleLogout = async () => {
    const confirmed = await showConfirmationAlert(
      t("common.alerts.logOutMessage"),
      t("common.alerts.logOutQuestion"),
      t("common.alerts.logOutConfirmation")
    );
    if (confirmed) {
      localStorage.clear();
      navigate("/");
    }
  };

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
                nameNav={t("common.modulesAndButtons.dashboard")}
                to="/dashboard"
                icon={IconDashboard}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                nameNav={t("common.modulesAndButtons.stats")}
                to="/stadistics"
                icon={IconStats}
                alt="Dashboard Icon"
              ></AsideIconReu>

              <AsideIconReu
                nameNav={t("common.modulesAndButtons.filterState")}
                to="/filter"
                icon={IconDispositives}
                alt="Dashboard Icon"
              ></AsideIconReu>

           
            </ul>
          </div>

          {/* bottom icons */}

          <ul className="flex flex-col gap-y-1 mt-6">
       

            <li
              onClick={handleLogout}
              className="flex items-center p-3 rounded-lg mt-[1.563rem] cursor-pointer hover:bg-[#3F8DB4] transition-all"
            >
              <img
                src={IconOut}
                alt="Cerrar sesión"
                className="transition duration-75"
              />
              <p className="text-[20px] pl-[1.875rem] font-regular text-white">
                {t("common.modulesAndButtons.logout")}
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
