import Header from "../../../shared/components/generic/header";
import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import { useTheme } from "../../../shared/hooks/useTheme";
import IconFilterHeader from "../../../../core/assets/icons/Filter/icon-filter.svg";
import { FilterLayerRow } from "../components/FilterLayerRow";
import { FilterGeneralStatus } from "../layouts/FilterGeneralStatus";
import { useFilterStatus } from "../hooks/useFilterStatus";
import { FilterHistoryChart } from "../layouts/FilterHistoryChart";
import { getDummyLayers } from "../hooks/dummyLayers";
import { LanguageToggleButton } from "../../../shared/components/generic/LanguageToggleButton";
import { useLanguage } from "../../../shared/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { useSidebar } from "../../../shared/layouts/sideBar/SidebarContext";

export const FilterPage = () => {
  const { toggleSidebar } = useSidebar();
  const activeFilterId = localStorage.getItem("activeFilterId");
  const { theme, toggleTheme } = useTheme();
  const { data, loading, error } = useFilterStatus(activeFilterId ?? "");

  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation("common");

  if (!activeFilterId) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
        <h2 className="text-[25px] font-semibold mb-2">
          {t("common.pages.filter.noActive.title")}
        </h2>
        <p className="text-[18px]">
          {t("common.pages.filter.noActive.description")}
        </p>
        <br /> <br />
        <a
          href="\dashboard"
          className="shadow-lg dark:bg-[#011521] border-1 rounded-[20px] dark:border-[#105B85] hover:bg-[#3F8DB4]  border-[#CBD5E1] px-3.5 py-2.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          {t("common.pages.notFound.goBackButton")}
        </a>
      </div>
    );
  }

  const v = data?.filter_status.status ?? 0;
  const d = data?.filter_status.estimated_day
    ? new Date(data.filter_status.estimated_day).toLocaleDateString()
    : "-";
  const statusKey: "good" | "regular" | "bad" =
    v > 70 ? "good" : v > 40 ? "regular" : "bad";

  const statusMap = {
    good: t("common.pages.filter.status.good"),
    regular: t("common.pages.filter.status.regular"),
    bad: t("common.pages.filter.status.bad"),
  };
  const dummyLayers = getDummyLayers(t);

  const layers = dummyLayers.map((layer) => ({
    left: {
      ...layer.left,
      value: v,
      status: statusMap[statusKey],
      statusKey,
      date: d,
    },
    right: {
      ...layer.right,
      value: v,
      status: statusMap[statusKey],
      statusKey,
      date: d,
    },
  }));

  return (
    <div className="flex flex-col items-stretch gap-6 px-4">
      <Header
        title={t("common.pages.filter.header.title")}
        subtitle={t("common.pages.filter.header.subtitle")}
        icon2={IconFilterHeader}
        onMenuToggle={toggleSidebar}
      />

      <div className="space-y-8">
        {loading && (
          <p className="text-slate-400">{t("common.pages.filter.loading")}</p>
        )}
        {error && <p className="text-red-400">{error}</p>}

        {data && (
          <>
            <FilterGeneralStatus
              status={data.filter_status.status}
              estimated_days={data.filter_status.estimated_days}
              estimated_day={data.filter_status.estimated_day.toString()}
              probability_change={data.filter_status.probability_change}
            />
          </>
        )}
      </div>

      {layers.map((layer, index) => (
        <FilterLayerRow
          key={index}
          left={layer.left}
          right={layer.right}
          direction={index % 2 === 0 ? "right" : "left"}
        />
      ))}

      <div className="fixed top-4 right-4 z-10">
        <LanguageToggleButton
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      <div className="space-y-8">
        {data && (
          <FilterHistoryChart
            days={data.historical_status_filter.days}
            effectiveness={data.historical_status_filter.effectiveness}
          />
        )}
      </div>
    </div>
  );
};
