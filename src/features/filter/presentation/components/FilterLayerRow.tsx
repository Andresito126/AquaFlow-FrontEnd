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
  const isRight = direction === "right";

  return (
    <div className="flex items-center justify-between gap-4 w-full">
      {isRight ? (
        <>
          <div className="w-1/4">
            <FilterInfoCard {...left} />
          </div>

          <div className="w-1/2">
            <FilterLayerImage direction="right" />
          </div>

          <div className="w-1/4">
            <FilterInfoCard {...right} />
          </div>
        </>
      ) : (
        <>
          <div className="w-1/4">
            <FilterInfoCard {...right} />
          </div>

          <div className="w-1/2">
            <FilterLayerImage direction="left" />
          </div>

          <div className="w-1/4">
            <FilterInfoCard {...left} />
          </div>
        </>
      )}
    </div>
  );
};

