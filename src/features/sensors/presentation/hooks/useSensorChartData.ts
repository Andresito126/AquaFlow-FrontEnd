import { useEffect, useState } from "react";
import { getSensorMeasurements } from "../../domain/Measurement/getSensorMeasurements";
import type { MeasurementODTO } from "../../data/models/SensorsReadings/MeasurementODTO";

export const useSensorData = (sensorName: string) => {
  const [data, setData] = useState<{ time: string; value: number }[]>([]);

  useEffect(() => {
    getSensorMeasurements().then((allData: MeasurementODTO[]) => {
      const filtered = allData
        .filter((d) => d.nameSensor === sensorName)
        .map((d) => ({
          time: new Date(d.readingDate).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          value: d.value,
        }));
      setData(filtered);
    });
  }, [sensorName]);

  return data;
};
