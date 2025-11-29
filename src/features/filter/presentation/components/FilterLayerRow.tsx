import { FilterInfoCard } from "./FilterInfoCard";
import { FilterLayerImage } from "./FilterLayerImage";
import "./FlipCard.css"; 
type SideData = {
  name: string;
  value: number;
  status: string;
  statusKey?: "good" | "regular" | "bad";
  date: string;
  backContent?: string; 

};

type Props = {
  left: SideData;
  right: SideData;
  direction: "left" | "right";
};

export const FilterLayerRow = ({ left, right, direction }: Props) => {
const renderCard = (side: SideData) => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <FilterInfoCard {...side} />
          </div>
          <div className="flip-card-back">
            {side.backContent || " No extra info"}
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="grid grid-cols-3 items-center gap-4 w-full">
      {/* columna izquierda */}
      {direction === "left" ? (
        <div className="col-span-1">
          {renderCard(left)}
        </div>
      ) : (
        <div className="col-span-1" />
      )}

      {/* img */}
      <div className="col-span-1">
        <FilterLayerImage direction={direction} />
      </div>

      {/* columna derecha */}
      {direction === "right" ? (
        <div className="col-span-1">
          {renderCard(right)}
        </div>
      ) : (
        <div className="col-span-1" />
      )}
    </div>
  );
};
