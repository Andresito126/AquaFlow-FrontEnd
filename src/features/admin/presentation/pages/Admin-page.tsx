import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import IconAquaFlowAdmin from "../../../../core/assets/icons/admin/aquaflow-logo-admin.svg";
import IconTotal from "../../../../core/assets/icons/admin/icon-total.svg";
import IconActive from "../../../../core/assets/icons/admin/icon-active.svg";
import IconInactive from "../../../../core/assets/icons/admin/icon-inactive.svg";
import { useTheme } from "../../../shared/hooks/useTheme";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AdminHeader from "../components/AdminHeader";
import { useCreateFilter } from "../../../filter/presentation/hooks/useCreateFilter";
import { exampleFilterLayers, exampleSensors} from "../../../filter/data/staticData/staticData";
import { Sensor } from "../../../sensors/data/models/Sensor";
import { FilterLayer } from "../../../filter/data/models/FilterLayer";
import { useGetAllFilters } from "../../../filter/presentation/hooks/useGetAllFilter";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../../shared/hooks/useLanguage";
import {LanguageToggleButton} from "../../../shared/components/generic/LanguageToggleButton";

export const AdminPage = () => {
  //hooks
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const { loading, error, createdFilterId, createFilter } = useCreateFilter();
  const { filters } = useGetAllFilters();
  const [searchTable, setSearchTable] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation("common");


  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const { language, toggleLanguage } = useLanguage();


  const handleClick = () => {
    if (!search) return;

    const sensorsWithIds = exampleSensors.map(
      (sensor) =>
        new Sensor(uuidv4(), sensor.name, sensor.model, sensor.unitMeasurement)
    );

    const filterLayersWithIds = exampleFilterLayers.map(
      (layer) =>
        new FilterLayer(uuidv4(), layer.name, layer.lifeTime, layer.efficiency)
    );

    createFilter(
      search,
      "223e4567-e89b-12d3-a456-426614174001",
      "Model X",
      new Date().toISOString(),
      false,
      sensorsWithIds,
      filterLayersWithIds
    );
  };

  const totalFilters = filters.length;
  const activeFilters = filters.filter((f) => f.isActiveFilter()).length;
  const inactiveFilters = totalFilters - activeFilters;

  const stats = [
    {
      label: t("common.pages.admin.totalFilters"),
      value: totalFilters,
      icon: <img src={IconTotal} alt={t("common.pages.admin.altTotal")} />,
    },
    {
      label: t("common.pages.admin.activeFilters"),
      value: activeFilters,
      icon: <img src={IconActive} alt={t("common.pages.admin.altActive")} />,
    },
    {
      label: t("common.pages.admin.inactiveFilters"),
      value: inactiveFilters,
      icon: <img src={IconInactive} alt={t("common.pages.admin.altInactive")} />,
    },
  ];

  const filteredFilters = filters.filter((f) =>
    f.getFilterId().toLowerCase().includes(searchTable.toLowerCase())
  );

  return (
    <div className="flex-1 p-5 space-y-6">
      <AdminHeader
        logoSrc={IconAquaFlowAdmin}
        title="SOFTGENIX"
        role={t("common.pages.admin.role")}
        onLogout={handleLogout}
      />

      <div>
        {/* Input y botón */}
        <div className="flex items-center gap-2 px-4 py-3 shadow-lg rounded-[20px] border-[#CBD5E1] dark:border-[#105B85] border-[1px] ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("common.pages.admin.enterUUID")}
            className="flex-1 bg-transparent outline-none"
          />
          <button
            onClick={handleClick}
            disabled={loading || !search}
            className="shadow-lg bg-[#1c709a] hover:bg-[#105B85] text-white px-4 py-2 rounded-[20px]"
          >
            + {t("common.pages.admin.addFilter")}
          </button>
        </div>

        {loading && <p>{t("common.alerts.loading")}</p>}
        {error && <p className="text-red-500">{t("common.alerts.error.generic")}</p>}
        {createdFilterId && (
          <p className="text-green-400 pl-2">
            {t("common.pages.admin.filterCreated")} {createdFilterId}
          </p>
        )}
      </div>

      {/* stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 p-6 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] rounded-[20px]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="shadow-lg border-[#CBD5E1] dark:border-[#105B85] border-[1px] ml-20 mr-20 rounded-[20px] dark:bg-[#0f1f33] flex items-center justify-between p-6"
          >
            <div>{stat.icon}</div>
            <div className="text-right">
              <p className="text-[25px] font-bold">{stat.value}</p>
              <p className="text-[19px]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* tabla */}
      <div className="p-5 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] rounded-[20px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 dark:bg-[#1a2b45] bg-[#112971cc] px-3 py-2 rounded-xl">
            <span></span>
            <input
              type="text"
              placeholder={t("common.pages.admin.searchUUID")}
              value={searchTable}
              onChange={(e) => setSearchTable(e.target.value)}
              className="bg-transparent outline-none text-white text-[14px] w-[19rem]"
            />
          </div>
          <button
            onClick={() => setSearchTable("")}
            className="text-white hover:text-blue-400 transition"
          >
            {t("common.pages.admin.refresh")}
          </button>
        </div>

        <table className="w-full text-center table-fixed">
          <thead className="text-slate-400 border-b border-slate-600">
            <tr className="text-[18px] ">
             <th className="py-2 w-1/4">{t("common.pages.admin.table.uuid")}</th>
              <th className="py-2 w-1/4">{t("common.pages.admin.table.model")}</th>
              <th className="py-2 w-1/4">{t("common.pages.admin.table.status")}</th>
              <th className="py-2 w-1/4">{t("common.pages.admin.table.date")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {filteredFilters.map((filter) => (
              <tr
                key={filter.getFilterId()}
                className="transition text-[16px] "
              >
                <td className="py-3 break-words">{filter.getFilterId()}</td>
                <td className="py-3">{filter.getModel()}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-[15px] font-medium ${
                      filter.isActiveFilter()
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {filter.isActiveFilter()
                      ? t("common.pages.admin.status.active")
                      : t("common.pages.admin.status.inactive")}
                  </span>
                </td>
                <td className="py-3">
                  {new Date(filter.getDateRecord()).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón flotante */}
      <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};
