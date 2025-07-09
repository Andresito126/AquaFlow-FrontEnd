export class SensorReadingModel {
    id: number;
    value: number;
    date: string;
    sensor_id: number;

    constructor(
        id: number,
        value: number,
        date: string,
        sensor_id: number
    ) {
        this.id = id;
        this.value = value;
        this.date = date;
        this.sensor_id = sensor_id;
    }
}
