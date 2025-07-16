
import type { Sensor } from "../../../sensors/data/models/Sensor";
import  { Filter } from "./Filter";
import type { FilterLayer } from "./FilterLayer";

export class FilterDTO {
    id: string;
      createBy: string; 

    model: string;
    dateRecord: string;
    isActive: boolean;
    createdAt: string;
    sensors: Sensor[];
    filterLayers: FilterLayer[];

  constructor(
     id: string,
     model: string,
     dateRecord: string,
    createBy: string,
     isActive: boolean,
     createdAt: string,
     sensors: Sensor[],
     filterLayers: FilterLayer[]
  ) {

    this.id = id;
    this.createBy = createBy;
    this.model = model; 
    this.dateRecord = dateRecord;
    this.isActive = isActive;
    this.createdAt = createdAt; 
    this.sensors = sensors;
    this.filterLayers = filterLayers;
  }
  toDomain(): Filter {
  return new Filter(
    this.id,
    this.createBy,
    this.model, 
    this.dateRecord,
    this.isActive,
    this.sensors,
    this.filterLayers
  );
}

toDomainBasic(): Filter {
  return new Filter(
    this.id,
    this.createBy || "",
    this.model,
    this.createdAt,
    this.isActive,
    [],
    [] 
  );
}


  
  
}
