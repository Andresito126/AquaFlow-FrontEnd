import { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "../../data/models/Filter";

interface Props {
  userId: string;
}

export function FilterAssignmentCard({ userId }: Props) {
  const [filterId, setFilterId] = useState("");
  const [assignedFilters, setAssignedFilters] = useState<Filter[]>([]);
  const [activeFilterId, setActiveFilterId] = useState("");

  const baseUrl = import.meta.env.VITE_API_AUTH || "http://localhost:4000";

  // Cargar filtros asignados al usuario al montar componente
  useEffect(() => {
    async function fetchAssignedFilters() {
      try {
        const res = await axios.get(`${baseUrl}/filters/by-user`, {
          params: { userId },
        });
        // Suponiendo que el backend te devuelve algo así:
        // { data: [ { id, attributes: { ... } }, ... ] }
        const filtersFromApi = res.data.data.map((f: any) => new Filter(
          f.id,
          f.attributes.createBy || "",
          f.attributes.model || "",
          f.attributes.installationDate || "",
          f.attributes.isActive,
          [], // sensors
          []  // filterLayers
        ));
        setAssignedFilters(filtersFromApi);
      } catch (error) {
        console.error("Error fetching user filters:", error);
      }
    }

    fetchAssignedFilters();
  }, [userId, baseUrl]);

  const handleAssign = async () => {
    try {
      const res = await axios.patch(
        `${baseUrl}/filters/${filterId}/assign-user`,
        { userId }
      );
      const newFilterData = res.data.data;
      const newFilter = new Filter(
        newFilterData.id,
        newFilterData.attributes.createBy || "",
        newFilterData.attributes.model || "",
        newFilterData.attributes.installationDate || "",
        newFilterData.attributes.isActive,
        [],
        []
      );
      setAssignedFilters((prev) => [...prev, newFilter]);
      setFilterId("");
    } catch (err) {
      console.error("Error assigning filter:", err);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="text"
        placeholder="UUID del filtro"
        value={filterId}
        onChange={(e) => setFilterId(e.target.value)}
        className="px-2 py-1 rounded-md text-black w-full"
      />
      <button
        onClick={handleAssign}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
      >
        Asociar
      </button>
      <select
        className="text-black rounded-md px-2 py-1 w-full"
        value={activeFilterId}
        onChange={(e) => setActiveFilterId(e.target.value)}
      >
        <option value="">Selecciona un filtro</option>
        {assignedFilters.map((filter) => (
          <option key={filter.getFilterId()} value={filter.getFilterId()}>
            {filter.getFilterId()}
          </option>
        ))}
      </select>
    </div>
  );
}
