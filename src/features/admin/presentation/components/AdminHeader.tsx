import { useTranslation } from "react-i18next";
interface AdminHeaderProps {
  logoSrc: string;
  title: string;
  role: string;
  onLogout?: () => void;
}


const AdminHeader: React.FC<AdminHeaderProps> = ({
  logoSrc,
  title,
  role,
  onLogout,
}) => {
  const { t } = useTranslation("common");

  return (
    <header className="flex justify-between items-center px-[20px] py-[5px] shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  rounded-[20px]">
      <div className="flex items-center gap-3">
        <img
          src={logoSrc}
          alt="logo"
          className="w-20 h-20 rounded-full  p-1 object-contain"
        />
        <h1 className="font-bold text-[25px] tracking-wide">{title}</h1>
      </div>
      <h2 className="font-bold text-[20px] tracking-wide">
        {role.toUpperCase()}
      </h2>
      <button
        onClick={onLogout}
        className="text-white bg-[#d90e0e] hover:bg-[#a10000] font-semibold text-[15px] px-4 py-2 rounded-full transition duration-300"
      >
      {t("common.modulesAndButtons.logout")}
      </button>
    </header>
  );
};

export default AdminHeader;
