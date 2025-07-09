import { SensorReadingModel } from "./SensorReadings";

export class MeasurementsModel {
    filtrer_id: number;
    temperature: SensorReadingModel[];
    tds: SensorReadingModel[];
    ph: SensorReadingModel[];
    turbidity: SensorReadingModel[];

    constructor(
        filtrer_id: number,
        temperature: SensorReadingModel[],
        tds: SensorReadingModel[],
        ph: SensorReadingModel[],
        turbidity: SensorReadingModel[]
    ) {
        this.filtrer_id = filtrer_id;
        this.temperature = temperature;
        this.tds = tds;
        this.ph = ph;
        this.turbidity = turbidity;
    }
    
}
