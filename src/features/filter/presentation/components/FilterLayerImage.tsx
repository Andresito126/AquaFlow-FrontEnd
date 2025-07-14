import IconFilterMain from "../../../../core/assets/icons/Filter/filter-icon.svg";
import ArrowLeft from "../../../../core/assets/icons/Filter/arrow-left-dark.svg";
import ArrowRight from "../../../../core/assets/icons/Filter/arrow-right-dark.svg";

type Props = {
  direction: "left" | "right";
};

export const FilterLayerImage = ({ direction }: Props) => {
  return (
    <div className="relative flex justify-center items-center w-full h-[120px]">
      <img src={IconFilterMain} alt="Filter Layer" className="h-[80px] z-10" />
      {direction === "left" ? (
        <img
          src={ArrowLeft}
          alt="←"
          className="absolute left-[5%] h-[24px] z-0"
        />
      ) : (
        <img
          src={ArrowRight}
          alt="→"
          className="absolute right-[5%] h-[24px] z-0"
        />
      )}
    </div>
  );
};
