import ThemeToggleButton from "../../../shared/components/generic/ThemeToggleButton";
import IconAquaFlowAdmin from "../../../../core/assets/icons/admin/aquaflow-logo-admin.svg";
import IconTotal from "../../../../core/assets/icons/admin/icon-total.svg";
import IconActive from "../../../../core/assets/icons/admin/icon-active.svg";
import IconInactive from "../../../../core/assets/icons/admin/icon-inactive.svg";
import { useTheme } from "../../../shared/hooks/useTheme";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AdminHeader from "../components/AdminHeader";
import { useCreateFilter } from "../../../filter/presentation/hooks/useCreateFilter";
import { exampleFilterLayers, exampleSensors} from "../../../filter/data/staticData/staticData";
import { Sensor } from "../../../sensors/data/models/Sensor";
import { FilterLayer } from "../../../filter/data/models/FilterLayer";
import { useGetAllFilters } from "../../../filter/presentation/hooks/useGetAllFilter";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  //hooks
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const { loading, error, createdFilterId, createFilter } = useCreateFilter();
  const { filters } = useGetAllFilters();
  const [searchTable, setSearchTable] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleClick = () => {
    if (!search) return;

    const sensorsWithIds = exampleSensors.map(
      (sensor) =>
        new Sensor(uuidv4(), sensor.name, sensor.model, sensor.unitMeasurement)
    );

    const filterLayersWithIds = exampleFilterLayers.map(
      (layer) =>
        new FilterLayer(uuidv4(), layer.name, layer.lifeTime, layer.efficiency)
    );

    createFilter(
      search,
      "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      "Model X",
      new Date().toISOString(),
      false,
      sensorsWithIds,
      filterLayersWithIds
    );
  };

  const totalFilters = filters.length;
  const activeFilters = filters.filter((f) => f.isActiveFilter()).length;
  const inactiveFilters = totalFilters - activeFilters;

  const stats = [
    {
      label: "Filtros Totales",
      value: totalFilters,
      icon: <img src={IconTotal} alt="" />,
    },
    {
      label: "Filtros Activos",
      value: activeFilters,
      icon: <img src={IconActive} alt="" />,
    },
    {
      label: "Filtros Inactivos",
      value: inactiveFilters,
      icon: <img src={IconInactive} alt="" />,
    },
  ];

  const filteredFilters = filters.filter((f) =>
    f.getFilterId().toLowerCase().includes(searchTable.toLowerCase())
  );

  return (
    <div className="flex-1 p-5 space-y-6">
      <AdminHeader
        logoSrc={IconAquaFlowAdmin}
        title="SOFTGENIX"
        role="Administrador"
        onLogout={handleLogout}
      />

      <div>
        {/* Input y botón */}
        <div className="flex items-center gap-2 px-4 py-3 shadow-lg rounded-[20px] border-[#CBD5E1] dark:border-[#105B85] border-[1px] ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ingresa el código UUID"
            className="flex-1 bg-transparent outline-none"
          />
          <button
            onClick={handleClick}
            disabled={loading || !search}
            className="shadow-lg bg-[#1c709a] hover:bg-[#105B85] text-white px-4 py-2 rounded-[20px]"
          >
            <span> + </span> Añadir un filtro
          </button>
        </div>

        {loading && <p>Cargando...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {createdFilterId && (
          <p className="text-green-400 pl-2">
            Filtro creado: {createdFilterId}
          </p>
        )}
      </div>

      {/* stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 p-6 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] rounded-[20px]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="shadow-lg border-[#CBD5E1] dark:border-[#105B85] border-[1px] ml-20 mr-20 rounded-[20px] dark:bg-[#0f1f33] flex items-center justify-between p-6"
          >
            <div>{stat.icon}</div>
            <div className="text-right">
              <p className="text-[25px] font-bold">{stat.value}</p>
              <p className="text-[19px]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* tabla */}
      <div className="p-5 shadow-lg dark:bg-[#011521] border-[#CBD5E1] dark:border-[#105B85] border-[1px] rounded-[20px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 dark:bg-[#1a2b45] bg-[#112971cc] px-3 py-2 rounded-xl">
            <span></span>
            <input
              type="text"
              placeholder="Buscar por UUID"
              value={searchTable}
              onChange={(e) => setSearchTable(e.target.value)}
              className="bg-transparent outline-none text-white text-[14px] w-[19rem]"
            />
          </div>
          <button
            onClick={() => setSearchTable("")}
            className="text-white hover:text-blue-400 transition"
          >
            <span></span> Refrescar
          </button>
        </div>

        <table className="w-full text-center table-fixed">
          <thead className="text-slate-400 border-b border-slate-600">
            <tr className="text-[18px] ">
              <th className="py-2 w-1/4">UUID del filtro</th>
              <th className="py-2 w-1/4">Modelo</th>
              <th className="py-2 w-1/4">Estatus</th>
              <th className="py-2 w-1/4">Fecha de ingreso</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {filteredFilters.map((filter) => (
              <tr
                key={filter.getFilterId()}
                className="transition text-[16px] "
              >
                <td className="py-3 break-words">{filter.getFilterId()}</td>
                <td className="py-3">{filter.getModel()}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-[15px] font-medium ${
                      filter.isActiveFilter()
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {filter.isActiveFilter() ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="py-3">
                  {new Date(filter.getDateRecord()).toLocaleDateString()}
                </td>
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
