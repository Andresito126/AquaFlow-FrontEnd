import { FilterLayer } from "../models/FilterLayer";
import { Sensor } from "../../../sensors/data/models/Sensor";

export const exampleFilterLayers: FilterLayer[] = [
  new FilterLayer("550e8400-e29b-41d4-a716-446655440011", "Natural zeolites", 90, 85.5),
  new FilterLayer("550e8400-e29b-41d4-a716-446655440012", "Far Infrared Ball", 365, 99.97),
  new FilterLayer("550e8400-e29b-41d4-a716-446655440013", "Silicon sand", 180, 92.3),
  new FilterLayer("550e8400-e29b-41d4-a716-446655440015", "Mineral sand", 720, 99.9),
  new FilterLayer("550e8400-e29b-41d4-a716-446655440016", "Activated carbon", 120, 95.8),
];

export const exampleSensors: Sensor[] = [
  new Sensor("550e8400-e29b-41d4-a716-446655440006", "Temperature", "TempSens-Pro-2024", "°C"),
  new Sensor("550e8400-e29b-41d4-a716-446655440007", "Ph", "HumSens-Max-2024", "PH"),
  new Sensor("550e8400-e29b-41d4-a716-446655440003", "TDS", "PressSens-Elite-2024", "PPM"),
  new Sensor("550e8400-e29b-41d4-a716-446655440006", "Turbidity", "AQSens-Premium-2024", "NTU"),
];
