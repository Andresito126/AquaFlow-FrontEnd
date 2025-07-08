import Header from "../../../shared/components/generic/header";
import IconEarth from "../../../../core/assets/icons/header/icon-earth.svg";
import { CardDashboardRealTime } from "../../../sensors/presentation/layouts/card-dashboard";

export const Dashboard = () => {
  return (
    <>
 <div className="flex flex-col items-stretch gap-4">
  <Header
    title="Hello, Carlitos !"
    subtitle="Ten un gran dia!!"
    subtitle2="Todos los días contibuyendo con el planeta tierra"
    icon={IconEarth}
  />

      <CardDashboardRealTime>

      </CardDashboardRealTime>

      </div>

    </>
  );
};

