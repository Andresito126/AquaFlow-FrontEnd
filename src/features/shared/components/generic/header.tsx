import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  icon1?: string;
  icon2?: string;
  date?: string;
  time?: string;
};

const Header: React.FC<Props> = ({
  title,
  subtitle,
  subtitle2,
  icon1,
  icon2,
  date,
  time,
}) => {
  return (
    <>
      <div className=" shadow-lg p-4 h-fit dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  flex justify-between items-center px-[20px] py-[5px] rounded-[20px]  ">
        <div className="">
          <div className="flex items-center gap-[10px] mb-2">
          <img src={icon1} alt="" />
          <p className="text-[35px] font-semibold">{title}</p>
          </div>
          <p className="text-[15px] font-medium">{subtitle}</p>
          <p className="text-[15px] font-medium">{subtitle2}</p>
        </div>
        <div className="flex justify-between items-center gap-[40px]">
          <div className="items-center flex flex-col">
            <p className="text-[21px] font-semibold">{date}</p>
            <p className="text-[19px] font-semibold">{time}</p>
          </div>
          <img src={icon2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
