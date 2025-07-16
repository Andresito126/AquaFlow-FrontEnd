import IconWashHands from "../../../../core/assets/icons/dashboard/icon-wash-hands.svg";
import IconCarWash from "../../../../core/assets/icons/dashboard/icon-carwash.svg";
import IconGarden from "../../../../core/assets/icons/dashboard/icon-garden.svg";
import IconToilet from "../../../../core/assets/icons/dashboard/toilet.svg";
import IconBarrer from "../../../../core/assets/icons/dashboard/icon-barrer.svg";
import ActividadRecom from "../components/actividades-recom";
import LayerCard from "../components/layer-filter";
export default function ActivityLayerSection() {
  return (
    <div className="flex gap-6 dark:bg-[#06172B] rounded-[20px] ">
      
     
      <div className="shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] flex flex-col items-center p-6 rounded-[20px] w-2/3">
        <h2 className="text-lg font-bold mb-4">Actividades recomendadas</h2>
        <div className="flex gap-4">
          <ActividadRecom
            icon={IconCarWash}
            progress={10}
            size={56}>
          </ActividadRecom>
          <ActividadRecom
            icon={IconWashHands}
            progress={90}
            size={56}>
          </ActividadRecom>
                    <ActividadRecom
            icon={IconGarden}
            progress={50}
            size={56}>
          </ActividadRecom>
                    <ActividadRecom
            icon={IconBarrer}
            progress={40}
            size={56}>
          </ActividadRecom>
                    <ActividadRecom
            icon={IconToilet}
            progress={29}
            size={56}>
          </ActividadRecom>

        </div>
      </div>


    <LayerCard></LayerCard>

    </div>
  );
}
