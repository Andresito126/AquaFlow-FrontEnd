import CircularProgressIcon from "../../../shared/components/generic/CircularProgressIcon";

type Props = {
  name: string;
  value: number;
  status: "Good" | "Medium" | "Bad";
  date: string;
};

const statusColors = {
  Good: "bg-green-600",
  Medium: "bg-yellow-400",
  Bad: "bg-red-500",
};

export const FilterInfoCard = ({ name, value, status, date }: Props) => {
  return (
    <div className="shadow-lg  dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  p-4 rounded-xl  w-full h-[120px] flex flex-col justify-center">
      <h3 className="text-[20px] font-bold">{name}</h3>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1">
          <CircularProgressIcon progress={value} size={48} />
          <span className="text-[16px] font-semibold dark:text-white">
            {value}%
          </span>
        </div>
        <span
          className={`text-[16px] text-semibold px-2 rounded-[20px] ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      <p className="text-semibold mt-2">Suggested change date - {date}</p>
    </div>
  );
};
