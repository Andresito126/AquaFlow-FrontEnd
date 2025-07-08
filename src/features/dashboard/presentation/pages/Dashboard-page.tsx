import Header from "../../../shared/components/generic/header";
import IconEarth from "../../../../core/assets/icons/header/icon-earth.svg";
import { AsideContainerLayout } from "../../../shared/layouts/asideContainer-layout";

export const Dashboard = () => {
  return (
    <>
      <Header
      title="Hello, Carlitos !"
      subtitle="Ten un gran dia!!"
      subtitle2="Todos los días contibuyendo con el planeta tierra"
      icon={IconEarth}
      >
        
      </Header>

      <AsideContainerLayout></AsideContainerLayout>
    </>
  );
};
