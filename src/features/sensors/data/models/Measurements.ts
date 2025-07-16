import type { SensorReadingModel } from "./SensorReadings";


export interface MeasurementsModel {
  filtrer_id: number;
  temperature: SensorReadingModel;
  tds: SensorReadingModel;
  ph: SensorReadingModel;
  turbidity: SensorReadingModel;
}

