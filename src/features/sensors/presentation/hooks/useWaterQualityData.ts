import { useEffect, useState } from "react";
import ApiClient2 from "../../../../core/api/API_sensor_readings";
import type { WaterQualityIndex } from "../../data/models/Statistics/water-quality";

export const useWaterQualityData = () => {
  const filterId = localStorage.getItem("activeFilterId");
  const [data, setData] = useState<WaterQualityIndex[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!filterId) {
        setError("No hay filtro activo.");
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await ApiClient2.get<WaterQualityIndex[]>(
          `/filters/${filterId}/water-quality-index`
        );
        setData(response.data);
      } catch (err: any) {
        console.error("Error al obtener calidad de agua:", err);
        setError("Error al cargar datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filterId]);

  return { data, loading, error };
};
