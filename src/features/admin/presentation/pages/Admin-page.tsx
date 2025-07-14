import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import IconAquaFlowAdmin from "../../../../core/assets/icons/admin/aquaflow-logo-admin.svg";
import IconTotal from "../../../../core/assets/icons/admin/icon-total.svg";
import IconActive from "../../../../core/assets/icons/admin/icon-active.svg";
import IconInactive from "../../../../core/assets/icons/admin/icon-inactive.svg";
import { useTheme } from "../../../shared/hooks/useTheme";
import { useState } from "react";
import AdminHeader from "../components/AdminHeader";

export const AdminPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");

  const stats = [
    {
      label: "Total customer",
      value: 3000,
      icon: <img src={IconTotal} alt="" /> ,
    },
    {
      label: "Active customers",
      value: 2800,
      icon: <img src={IconActive} alt="" /> 
    },
    {
      label: "Inactive customer",
      value: 200,
      icon: <img src={IconInactive} alt="" /> 
    },
  ];

  const users = [
    {
      name: "Jane Cooper",
      username: "@jane",
      status: "Active",
      email: "jessica.hanson@example.com",
      date: "5/27/15",
      initials: "JC",
    },
    {
      name: "Wade Warren",
      username: "@wade456",
      status: "Active",
      email: "willie.jennings@example.com",
      date: "5/19/12",
      initials: "WW",
    },
    {
      name: "Esther Howard",
      username: "@esther",
      status: "Offline",
      email: "d.chambers@example.com",
      date: "3/4/16",
      initials: "EH",
    },
  ];

  const statusColor = {
    Active: "bg-green-100 text-green-600",
    Offline: "bg-gray-200 text-gray-600",
    Wait: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="flex-1 p-5 space-y-6">
      <AdminHeader
        logoSrc={IconAquaFlowAdmin}
        title="SOFTGENIX"
        role="Administrator"
        onLogout={() => {
          console.log("Cerrar sesión");
          //    logica
        }}
      />

      <div className="flex items-center gap-2 px-4 py-3 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  rounded-[20px]">
        <input
          className="flex-1 bg-transparent  outline-none"
          placeholder="Add the UUID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="shadow-lg bg-[#1c709a] hover:bg-[#105B85] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 transition">

          <span> + </span> Add new product
        </button>
      </div>
 
      {/* stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 p-6 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  rounded-[20px]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="shadow-lg border-[#CBD5E1] dark:border-[#105B85] border-[1px]  ml-20 mr-20 rounded-[20px] dark:bg-[#0f1f33]  flex items-center justify-between p-6 "
          >
            <div>{stat.icon}</div>
            <div className="text-right">
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* tabla */}
      <div className="p-5 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px]  rounded-[20px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 dark:bg-[#1a2b45] bg-[#112971cc] px-3 py-2 rounded-xl">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white text-sm"
            />
          </div>
          <button className="text-white hover:text-blue-400 transition">
            <span>🔄</span>
          </button>
        </div>

        <table className="w-full text-sm ">
          <thead className="text-left text-slate-400 border-b border-slate-600">
            <tr>
              <th className="py-2">Users</th>
              <th>Status</th>
              <th>Email</th>
              <th>Date</th>
          
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {users.map((user, index) => (
              <tr key={index} className=" transition">
                <td className="py-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center text-xs font-bold text-blue-300">
                    {user.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-slate-400">{user.username}</p>
                  </div>
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      statusColor[user.status as keyof typeof statusColor]
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{user.email}</td>
                <td>{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón flotante */}
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};
