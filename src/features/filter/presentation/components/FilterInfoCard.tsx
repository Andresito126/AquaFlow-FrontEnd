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
    <div className="bg-[#001C30] text-white p-4 rounded-xl shadow-md w-full h-[120px] flex flex-col justify-center">
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="flex items-center gap-2 text-sm">
        <span>🔧 {value}</span>
        <span className={`text-xs text-black px-2 rounded ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <p className="text-xs mt-2">Suggested change date – {date}</p>
    </div>
  );
};
