import Header from "../../../shared/components/generic/header";
import IconEarth from "../../../../core/assets/icons/header/icon-earth.svg";
import { CardDashboardRealTime } from "../../../sensors/presentation/layouts/dashboard/card-dashboard";
import ActivityLayerSection from "../layouts/activity-layer-section";
import AutoCarousel from "../layouts/carousel";


const slides = [
  {
    image: "cd",
    text:
      "Recuerda cambiar el filtro de tu agua cada 6 meses para mantener su pureza y evitar contaminantes.",
  },
  {
    image: "IconKidSmile",
    text:
      "Lava las piezas internas del sistema de forma mensual para evitar acumulación de bacterias.",
  },
  
];

export const Dashboard = () => {
  return (
    <>
 <div className="flex flex-col items-stretch gap-4">
  <Header
    title="Hello, Carlitos"
    subtitle="Ten un gran dia"
    subtitle2="Todos los días contibuyendo con el planeta tierra"
    icon={IconEarth}
  />

      <CardDashboardRealTime>

      </CardDashboardRealTime>

      <ActivityLayerSection></ActivityLayerSection>

        <AutoCarousel
        title="Cosas que debes saber de tu filtro"
        slides={slides}
        interval={1000}
      />
      </div>

    </>
  );
};

