type StatusColor = keyof typeof borderColorMap;

type Props = {
  title: string;
  normal: string;
  caution: string;
  unit: string;
  imageUrl?: string;
  statusColor?: StatusColor;
};

const borderColorMap = {
  temperature: "border-[#E69732]",
  ph: "border-[#308451]",
  tds: "border-[#2BC2E0]",
  turbidity: "border-[#DDB723]",
};

const SensorReferenceCard = ({
  title,
  normal,
  caution,
  unit,
  imageUrl,
  statusColor = "temperature",
}: Props) => {
  const borderClass = borderColorMap[statusColor] || "border-slate-300";

  return (
    <div
      className={`w-full h-full rounded-2xl px-6 py-6 border-4 ${borderClass} bg-white dark:bg-[#001C30] shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between items-center relative`}
    >
      {/* Iconos en las esquinas */}
      {imageUrl && (
        <>
          <img
            src={imageUrl}
            className="w-10 h-10 absolute top-4 left-4"
            alt="icon"
          />
          <img
            src={imageUrl}
            className="w-10 h-10 absolute top-4 right-4"
            alt="icon"
          />
        </>
      )}

      {/* Título centrado */}
      <div className="text-center mb-6 mt-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          Datos de referencia
        </p>
      </div>

      {/* Datos */}
      <div className="grid grid-cols-2 gap-4 text-center text-gray-700 dark:text-slate-100 w-full">
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold">Datos normales</p>
          <p className="text-xs text-slate-400">{unit}</p>
          <p className="text-base mt-1 font-medium">{normal}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold">Datos anormales</p>
          <p className="text-xs text-slate-400">{unit}</p>
          <p className="text-base mt-1 font-medium">{caution}</p>
        </div>
      </div>
    </div>
  );
};


export default SensorReferenceCard;
