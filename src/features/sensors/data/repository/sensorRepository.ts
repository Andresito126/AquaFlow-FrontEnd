import type { MeasurementODTO } from "../models/SensorsReadings/MeasurementODTO";

const API_URL = import.meta.env.VITE_API_URL;


export const sensorRepository = {
  
  async getMeasurementsByDate(date: string): Promise<MeasurementODTO[]> {
    // const response = await fetch(`http://localhost:3000/measurements?date=${encodeURIComponent(date)}`);
    const response = await fetch(`${API_URL}/measurements?date=${encodeURIComponent(date)}`);

    const data = await response.json();
    console.log(" Response del backend:", data);

    return data as MeasurementODTO[];
 },
};