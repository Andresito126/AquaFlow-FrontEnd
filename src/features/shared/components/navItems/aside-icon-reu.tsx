import { NavLink } from "react-router-dom";
import React from "react";

// props para podr hacer el componente reutilizable
type Props = {
  to: string;     /* link */
  icon: string;   /* link, src or svg (icon) */
  alt: string;
  label?: string;  /* ? = optional */
  nameNav: string ;
};

const NavItem: React.FC<Props> = ({ to, icon, alt, label, nameNav }) => {
  return (
    <li>
      <NavLink /* needed to link (redirect to other page)  */
        to={to}
        className={({ isActive }) =>
          `flex items-center p-3 rounded-lg mt-[1.563rem] transition-all ${
            isActive
              ? "bg-[#3F8DB4] text-white"
              : "text-gray-900 dark:text-white hover:bg-[#3F8DB4]"
          }`
        }
      >
        <img
          src={icon}
          alt={alt}
          className="transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
        />
        <p
        className="text-[20px] pl-[1.875rem] font-regular text-white"
        >{nameNav}</p>
        {label && <span className="ml-2">{label}</span>}
      </NavLink>
    </li>
  );
};

export default NavItem;
