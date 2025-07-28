import IconWashHands from "../../../../core/assets/icons/dashboard/icon-wash-hands.svg";
import IconCarWash from "../../../../core/assets/icons/dashboard/icon-carwash.svg";
import IconGarden from "../../../../core/assets/icons/dashboard/icon-garden.svg";
import IconToilet from "../../../../core/assets/icons/dashboard/toilet.svg";
import IconBarrer from "../../../../core/assets/icons/dashboard/icon-barrer.svg";
import IconStreet from "../../../../core/assets/icons/dashboard/icon-street.svg";
import LayerCard from "../components/layer-filter";
import { useRecommendedActivities } from "../../../sensors/presentation/hooks/useWaterActivities";
import CircularProgressIcon from "../../../shared/components/generic/CircularProgressIcon";


const activityIcons: Record<string, string> = {
  "Lavar auto": IconCarWash,
  "Lavado de ropa": IconWashHands,
  "Riego de plantas": IconGarden,
  "Limpieza del hogar (pisos y exteriores)": IconBarrer,
  "Descarga de inodoros": IconToilet,
  "Lavado de calles o banquetas": IconStreet,
};

export default function ActivityLayerSection() {
  const userId = localStorage.getItem("userId") || "";
  const activities = useRecommendedActivities(userId);

  return (
    <div className="flex gap-6 dark:bg-[#06172B] rounded-[20px]">
      <div className="shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] flex flex-col items-center p-6 rounded-[20px] w-2/3">
        <h2 className="text-lg font-bold mb-4">Actividades recomendadas</h2>
        <div className="flex gap-7">
          {activities?.water_activities_list.map((activity, idx) => (
            <CircularProgressIcon
              key={idx}
              icon={activityIcons[activity.water_activity] || ""}
              progress={Number(activity.percentage.toFixed(2))} 
              size={64}
              label={activity.water_activity}
            />
          )) || (
            <>
              {/* fallback si aún no hay datos */}
              <CircularProgressIcon icon={IconCarWash} progress={10} size={64} label="Lavado de auto" />
              <CircularProgressIcon icon={IconWashHands} progress={90} size={64} label="Lavado de ropa" />
              <CircularProgressIcon icon={IconGarden} progress={50} size={64} label="Riego de plantas" />
              <CircularProgressIcon icon={IconBarrer} progress={40} size={64} label="Limpieza del hogar" />
              <CircularProgressIcon icon={IconToilet} progress={29} size={64} label="Descarga de inodoros" />
              <CircularProgressIcon icon={IconStreet} progress={29} size={64} label="Lavado de calles o banquetas" />
            </>
          )}
        </div>
      </div>

      <LayerCard />
    </div>
  );
}
