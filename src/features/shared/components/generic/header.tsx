import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  icon1?: string;
  icon2?: string;
  date?: string;
  time?: string;
  onMenuToggle?: () => void;
};

const Header: React.FC<Props> = ({
  title,
  subtitle,
  subtitle2,
  icon1,
  icon2,
  date,
  time,
  onMenuToggle,
}) => {
  return (
    <div className=" shadow-lg p-4 h-fit dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] flex justify-between items-center px-[20px] py-[5px] rounded-[20px] relative">
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-1 absolute top-4 left-0 z-10"
        aria-label="Abrir menú de navegación"
      >
        <svg
          className="w-6 h-6 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div className="ml-0 lg:ml-0 flex-1">
        <div className="flex items-center gap-[10px] mb-2">
          <img src={icon1} alt="" />
          <p className="text-xl sm:text-2xl lg:text-[35px] font-semibold">
            {title}{" "}
          </p>
        </div>
        {subtitle && (
          <p className="hidden lg:block text-[15px] font-medium">{subtitle}</p>
        )}
        {subtitle2 && (
          <p className="hidden lg:block text-[15px] font-medium">{subtitle2}</p>
        )}
      </div>

      <div className="flex justify-between items-center gap-[40px]">
        <div className="items-end flex flex-col text-right">
          <p className="text-[15px] sm:text-[21px] font-semibold">{date}</p>
          <p className="text-[13px] sm:text-[19px] font-semibold">{time}</p>
        </div>
        {icon2 && (
          <img
            src={icon2}
            alt=""
            className="hidden lg:block w-8 h-8 sm:w-10 sm:h-10"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
