type Props = {
  title: string;
  normal: string;
  caution: string;
  unit: string;
};

const SensorReferenceCard = ({ title, normal, caution, unit }: Props) => {
  return (
    <div className="w-full h-full rounded-2xl px-6 py-4 ] border-[#CBD5E1] dark:border-[#105B85] border-[1px] dark:bg-[#001C30] flex flex-col justify-between ">

      <div className="flex justify-center items-center gap-2 mb-1">
        <div className="w-6 h-6">
          {/* icon-left */}
        </div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
        <div className="w-6 h-6">
          {/* icon-right */}
        </div>
      </div>
      <p className="text-sm text-center mb-4">Data reference</p>

      <div className="flex justify-between items-center text-sm px-2 h-[5rem] pr-1">
        <div className="text-center">
          <p className="font-semibold">Normal data</p>
          <p className="text-xs ">{unit}</p>
          <p className="mt-1">{normal}</p>
        </div>

        <div className="text-center">
          <p className="font-semibold">Caution data</p>
          <p className="text-xs">{unit}</p>
          <p className="mt-1">{caution}</p>
        </div>
      </div>

 
      <div className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100">
     
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100">

      </div>
    </div>
  );
};

export default SensorReferenceCard;
