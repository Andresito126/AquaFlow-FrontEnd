type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

export const FlipCard = ({ front, back }: FlipCardProps) => {
  return (
    <div className="group [perspective:1000px] w-full h-[120px] ">
      <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180 transition-transform ">
        {/* front */}
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>

        {/* back */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          {back}
        </div>
      </div>
    </div>
  );
};
