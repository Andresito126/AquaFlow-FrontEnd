import type { MeasurementODTO } from "../models/SensorsReadings/MeasurementODTO";

export const sensorRepository = {
  async getMeasurements(): Promise<MeasurementODTO[]> {
    const response = await fetch("http://localhost:3000/api/measurements");
    const data = await response.json();
    return data as MeasurementODTO[];
  },
};
