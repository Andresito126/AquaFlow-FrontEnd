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

const slides = [
  {
    image: IconKid1,
    text: "Es fundamental cambiar el filtro de tu sistema de reuso de agua cada 6 meses. Esto asegura que el agua mantenga su pureza y calidad, evitando la acumulación de contaminantes y partículas que puedan afectar la salud y el correcto funcionamiento del sistema.",
  },
  {
    image: IconMascota,
    text: "La limpieza mensual de las piezas internas del sistema es esencial para prevenir la acumulación de bacterias, algas y otros microorganismos que puedan desarrollarse con el paso del tiempo.",
  },
  {
    image: saveWorld,
    text: "Siempre utiliza agua limpia y libre de residuos para la recarga de tu sistema de reuso. El ingreso de agua contaminada o con partículas sólidas puede dañar el sistema y reducir la eficacia del proceso de reutilización.",
  },
  {
    image: saveWorld2,
    text: "Es importante realizar inspecciones periódicas para detectar posibles fugas, grietas o piezas dañadas. Un sistema en buen estado evita pérdidas de agua y garantiza que el proceso de reuso se lleve a cabo de manera eficiente.",
  },
  {
    image: IconMascota,
    text: "Coloca el sistema de reuso en un lugar fresco, seco y protegido del sol directo, ya que la exposición continua a altas temperaturas puede deteriorar los materiales plásticos y reducir la vida útil de los componentes.",
  },
  {
    image: saveWorld,
    text: "Cada tres meses es recomendable realizar una limpieza profunda del sistema. Esto implica desmontar componentes claves, limpiar a fondo con productos seguros y desinfectar para eliminar cualquier residuo o microorganismos que puedan haberse acumulado.",
  }
];


export const Dashboard = () => {
    const userName = `${localStorage.getItem("userName") || "Usuario"} ${
    localStorage.getItem("userLastName") || ""
  }`.trim();

  return (
    <>
      <div className="flex flex-col items-stretch gap-4">
        <Header
          title={userName}
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
