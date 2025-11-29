import Header from "../../../shared/components/generic/header";
import IconEarth from "../../../../core/assets/icons/header/icon-earth.svg";
import IconPlant from "../../../../core/assets/icons/header/plant.png";
import IconKid1 from "../../../../core/assets/icons/dashboard/icon-kid1.svg";
import saveWorld from "../../../../core/assets/icons/dashboard/saveWorld.png";
import saveWorld2 from "../../../../core/assets/icons/dashboard/saveWorld2.png";
import IconMascota from "../../../../core/assets/icons/pet/goti-saludando.svg";
import { CardDashboardRealTime } from "../../../sensors/presentation/layouts/dashboard/card-dashboard";
import ActivityLayerSection from "../layouts/activity-layer-section";
import AutoCarousel from "../layouts/carousel";
import { useTranslation } from "react-i18next";
import { useSidebar } from "../../../shared/layouts/sideBar/SidebarContext";


export const Dashboard = () => {
    const userName = `${localStorage.getItem("userName") || "Usuario"} ${
    localStorage.getItem("userLastName") || ""
  }`.trim();
  const { t } = useTranslation("common");
  const { toggleSidebar } = useSidebar();

  const slides = [
    { image: IconKid1, text: t("common.pages.dashboard.slides.s1") },
    { image: IconMascota, text: t("common.pages.dashboard.slides.s2") },
    { image: saveWorld, text: t("common.pages.dashboard.slides.s3") },
    { image: saveWorld2, text: t("common.pages.dashboard.slides.s4") },
    { image: IconMascota, text: t("common.pages.dashboard.slides.s5") },
    { image: saveWorld, text: t("common.pages.dashboard.slides.s6") }
  ];

  return (
    <>
      <div className="flex flex-col items-stretch gap-4">
        <Header
          title={userName}
          subtitle={t("common.pages.dashboard.headerSubtitle")}
          icon1={IconPlant}
          icon2={IconEarth}
          onMenuToggle={toggleSidebar}
        />

        <CardDashboardRealTime></CardDashboardRealTime>

        <ActivityLayerSection></ActivityLayerSection>

        <AutoCarousel
          title={t("common.pages.dashboard.carouselTitle")}
          slides={slides}
          interval={20000}
        />
      </div>
    </>
  );
};
