import React from "react";

type Props = {
  title: string;
  subtitle: string;
  subtitle2?: string;
  icon: string;
  date?: string;
  time?: string;
};

const Header: React.FC<Props> = ({
  title,
  subtitle,
  subtitle2,
  icon,
  date,
  time,
}) => {
  return (
    <>
      <div className=" shadow-lg p-4 h-fit bg-[#011521] flex justify-between items-center px-[20px] py-[20px] text-white rounded-[20px]">
        <div className="">
          <p className="text-[35px] font-semibold">{title}</p>
          <p className="text-[15px] font-medium">{subtitle}</p>
          <p className="text-[15px] font-medium">{subtitle2}</p>
        </div>
        <div className="flex justify-between items-center gap-[40px]">
          <div className="items-center flex flex-col">
            <p className="text-[21px] font-semibold">{date}</p>
            <p className="text-[19px] font-semibold">{time}</p>
          </div>
          <img src={icon} alt="Icon" className="w-[130px] h-[130px]" />
        </div>
      </div>
    </>
  );
};

export default Header;
