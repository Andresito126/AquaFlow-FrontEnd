import { sensorRepository } from "../../data/repository/sensorRepository";
import type { MeasurementODTO } from "../../data/models/SensorsReadings/MeasurementODTO";

export const getSensorMeasurements = async (date: string): Promise<MeasurementODTO[]> => {
  return await sensorRepository.getMeasurementsByDate(date);
};