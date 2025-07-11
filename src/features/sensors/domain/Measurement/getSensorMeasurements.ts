import { sensorRepository } from "../../data/repository/sensorRepository";
import type { MeasurementODTO } from "../../data/models/SensorsReadings/MeasurementODTO";

export const getSensorMeasurements = async (): Promise<MeasurementODTO[]> => {
  return await sensorRepository.getMeasurements();
};
