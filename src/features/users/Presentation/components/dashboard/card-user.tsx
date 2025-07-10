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
      <div className=" px-[8px] py-[8px] shadow-lg h-full gap-2 bg-[#011521] flex text-white rounded-[20px]">
        <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#ffffff] ">
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
