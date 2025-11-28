import LayerFilter from "../../../../core/assets/icons/dashboard/icon-layer-filter.svg";
import { useTranslation } from "react-i18next";

export default function LayerCard() {
  const { t } = useTranslation("common");
  return (



      <div className=" shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] flex flex-col items-center justify-center p-6 rounded-[20px] w-1/3">
        <h2 className="text-lg font-bold mb-4">{t("common.pages.dashboard.layerFilterTitle")}</h2>
        <div className="relative w-12 h-12">
       <img className="invert dark:invert-0" src={LayerFilter} alt="" />
       
        </div>
      </div>


  );
}
