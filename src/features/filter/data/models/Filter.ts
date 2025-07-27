import type { Sensor } from "../../../sensors/data/models/Sensor";
import type { FilterLayer } from "./FilterLayer";
export class Filter {
    private filterId: string = '';
    private createBy: string = '';
    private model: string = '';
    private dateRecord: string = '';
    private isActive: boolean = false;
    private sensors: Sensor[] = [];
    private filterLayer : FilterLayer[] = [];

    constructor(
        filterId: string, 
        createBy: string, 
        model: string, 
        dateRecord: string, 
        isActive: boolean,
        sensors: Sensor[],
        filterLayer: FilterLayer[]
    ) {
        this.filterId = filterId;
        this.createBy = createBy;
        this.model = model;
        this.dateRecord = dateRecord;
        this.isActive = isActive;
        this.sensors = sensors;
        this.filterLayer = filterLayer;
    }

    getFilterId(): string {
        return this.filterId;
    }

    getCreateBy(): string {
        return this.createBy;
    }

    getModel(): string {
        return this.model;
    }

    getDateRecord(): string {
        return this.dateRecord;
    }

    isActiveFilter(): boolean {
        return this.isActive;
    }

    getSensors(): Sensor[] {
        return this.sensors;
    }
    
    getFilterLayer(): FilterLayer[] {
        return this.filterLayer;
    }

}