import Header from "../../../shared/components/generic/header";
import IconEarth from "../../../../core/assets/icons/header/icon-earth.svg";
import IconPlant from "../../../../core/assets/icons/header/plant.png";
import IconKid1 from "../../../../core/assets/icons/dashboard/icon-kid1.svg";
import { CardDashboardRealTime } from "../../../sensors/presentation/layouts/dashboard/card-dashboard";
import ActivityLayerSection from "../layouts/activity-layer-section";
import AutoCarousel from "../layouts/carousel";

const slides = [
  {
    image: IconKid1,
    text: "Recuerda cambiar el filtro de tu agua cada 6 meses para mantener su pureza y evitar contaminantes.",
  },
  {
    image: IconKid1,
    text: "Lava las piezas internas del sistema de forma mensual para evitar acumulación de bacterias.",
  },
];

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-stretch gap-4">
        <Header
          title="Hello, Carlitos"
          subtitle="Ten un lindo día. El agua está en buenas manos hoy"
          icon1={IconPlant}
          icon2={IconEarth}
        />

        <CardDashboardRealTime></CardDashboardRealTime>

        <ActivityLayerSection></ActivityLayerSection>

        <AutoCarousel
          title="Cosas que debes saber de tu filtro"
          slides={slides}
          interval={20000}
        />
      </div>
    </>
  );
};
