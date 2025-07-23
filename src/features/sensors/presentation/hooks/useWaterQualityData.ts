import { useEffect, useState } from "react";
import ApiClient2 from "../../../../core/api/API_sensor_readings";
import type { WaterQualityIndex } from "../../data/models/Statistics/water-quality";

//statico de mientras
const STATIC_FILTER_ID = "a81bc81b-dead-4e5d-abff-90865d1e13a1";

export const useWaterQualityData = () => {
  const [data, setData] = useState<WaterQualityIndex[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ApiClient2.get<WaterQualityIndex[]>(
          `/filters/${STATIC_FILTER_ID}/water-quality-index`
        );
        setData(response.data);
      } catch (err: any) {
        console.error("Error al obtener calidad de agua:", err);
        setError("Error al cargar datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // id fijo
  }, []);

  return { data, loading, error };
};
