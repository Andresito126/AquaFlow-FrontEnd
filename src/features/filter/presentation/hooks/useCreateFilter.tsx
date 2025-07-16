import { useState } from "react";
import { Sensor } from "../../../sensors/data/models/Sensor";
import { FilterLayer } from "../../data/models/FilterLayer";
import { CreateFilterUseCase } from "../../domain/CreateFilterUseCase";
import { FilterRepository } from "../../data/repository/FilterRepository";

const filterRepository = new FilterRepository();
const createFilterUseCase = new CreateFilterUseCase(filterRepository);

export function useCreateFilter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdFilterId, setCreatedFilterId] = useState<string | null>(null);

  const createFilter = async (
    filterId: string,
    createdBy: string,
    model: string,
    dateRecord: string,
    isActive: boolean,
    sensors: Sensor[],
    filterLayers: FilterLayer[]
  ) => {
    setLoading(true);
    setError(null);
    setCreatedFilterId(null);

    try {
      const filter = await createFilterUseCase.execute(
        filterId,
        createdBy,
        model,
        dateRecord,
        isActive,
        sensors,
        filterLayers
      );

      if (filter) setCreatedFilterId(filter.getFilterId());
      else setError("No se pudo crear el filtro");
    } catch (err: any) {
      console.error("Error al crear filtro:", err);
      setError(err?.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return {
    createFilter,
    loading,
    error,
    createdFilterId,
  };
}
