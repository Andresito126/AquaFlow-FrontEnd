export class Sensor {
    sensorId: string = '';
    name: string = '';
    model: string = '';
    unitMeasurement: string = '';

    constructor(
        sensorId: string, 
        name: string, 
        model: string, 
        unitMeasurement: string
    ) {
        this.sensorId = sensorId;
        this.name = name;
        this.model = model;
        this.unitMeasurement = unitMeasurement;
    }
}