import { useEffect, useState } from "react";
import { Filter } from "../../data/models/Filter";
import { GetAllFiltersUseCase } from "../../domain/GetAllFilterUseCase";
import { FilterRepository } from "../../data/repository/FilterRepository";

const filterRepository = new FilterRepository();
const getAllFiltersUseCase = new GetAllFiltersUseCase(filterRepository);

export function useGetAllFilters() {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const data = await getAllFiltersUseCase.execute();
        setFilters(data);
      } catch (err: any) {
        setError(err.message || "Error fetching filters");
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, []);

  return { filters, loading, error };
}
