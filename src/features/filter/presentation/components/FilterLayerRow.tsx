import { FilterInfoCard } from "./FilterInfoCard";
import { FilterLayerImage } from "./FilterLayerImage";

type SideData = {
  name: string;
  value: number;
  status: "Good" | "Medium" | "Bad";
  date: string;
};

type Props = {
  left: SideData;
  right: SideData;
  direction: "left" | "right";
};

export const FilterLayerRow = ({ left, right, direction }: Props) => {
  const data = direction === "left" ? left : right;

  return (
    <div className="grid grid-cols-3 items-center gap-4 w-full">
      {/* col izq */}
      {direction === "left" ? (
        <div className="col-span-1">
          <FilterInfoCard {...data} />
        </div>
      ) : (
        <div className="col-span-1" />
      )}

      {/* img filter*/}
      <div className="col-span-1">
        <FilterLayerImage direction={direction} />
      </div>

      {/* col der*/}
      {direction === "right" ? (
        <div className="col-span-1">
          <FilterInfoCard {...data} />
        </div>
      ) : (
        <div className="col-span-1" />
      )}
    </div>
  );
};

