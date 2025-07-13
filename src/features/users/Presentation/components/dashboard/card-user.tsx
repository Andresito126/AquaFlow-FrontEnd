import React from "react";

type CardUserProps = {
  avatar: string;
  name: string;
  hour: string;
  date: string;
};

const CardUser: React.FC<CardUserProps> = ({ avatar, name, hour, date }) => {
  return (
    <>
        <div className=" px-[8px] py-[8px]  gap-2 flex shadow-lg h-full dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] rounded-[20px]">
        
        <div className="flex items-center justify-center w-[50px] h-full rounded-full bg-[#ffffff] ">
          <img src={avatar} alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[17px] font-semibold">{name}</p>
          <div className="flex items-start gap-3">
            <p className="text-[16px] font-normal">{hour}</p>
            <p className="text-[16px] font-normal ">{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardUser;
