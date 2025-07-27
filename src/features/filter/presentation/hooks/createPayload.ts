import type { Sensor } from "../../../sensors/data/models/Sensor";
import { FilterLayer } from "../../data/models/FilterLayer";

export function createPayload(filterId: string, createBy: string) {
  const model = "Model X";
  const dateRecord = new Date().toISOString();
  const isActive = true;
  const createdAt = new Date().toISOString();

  const sensors: Sensor[] = [
    {
      sensorId: "550e8400-e29b-41d4-a716-446655440002",
      name: "Temperature",
      model: "TempSens-Pro-2024",
      unitMeasurement: "°C"
    },
    {
      sensorId: "550e8400-e29b-41d4-a716-446655440003",
      name: "Ph",
      model: "HumSens-Max-2024",
      unitMeasurement: "PH"
    },
    {
      sensorId: "550e8400-e29b-41d4-a716-446655440004",
      name: "TDS",
      model: "PressSens-Elite-2024",
      unitMeasurement: "PPM"
    },
    {
      sensorId: "550e8400-e29b-41d4-a716-446655440005",
      name: "Turbidity",
      model: "AQSens-Premium-2024",
      unitMeasurement: "NTU"
    }
  ];

  const filterLayers: FilterLayer[] = [
    new FilterLayer("550e8400-e29b-41d4-a716-446655440010", "Natural zeolites", 90, 85.5),
    new FilterLayer("550e8400-e29b-41d4-a716-446655440011", "Far Infrared Ball", 365, 99.97),
    new FilterLayer("550e8400-e29b-41d4-a716-446655440012", "Silicon sand", 180, 92.3),
    new FilterLayer("550e8400-e29b-41d4-a716-446655440013", "Mineral sand", 720, 99.9),
    new FilterLayer("550e8400-e29b-41d4-a716-446655440014", "Activated carbon", 120, 95.8)
  ];

  return {
    filterId,
    createBy,
    model,
    dateRecord,
    isActive,
    createdAt,
    sensors,
    filterLayers
  };
}
