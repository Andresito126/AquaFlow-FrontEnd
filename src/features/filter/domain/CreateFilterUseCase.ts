import type { Sensor } from "../../sensors/data/models/Sensor";
import { Filter } from "../data/models/Filter";
import type { FilterLayer } from "../data/models/FilterLayer";
import type { FilterRepository } from "../data/repository/FilterRepository";

export class CreateFilterUseCase {
  private filterRepository: FilterRepository;

  constructor(filterRepository: FilterRepository) {
    this.filterRepository = filterRepository;
  }

  async execute(
    filterId: string,
    createBy: string,
    model: string,
    dateRecord: string,
    isActive: boolean,
    sensors: Sensor[],
    filterLayer: FilterLayer[]
  ): Promise<Filter | null> {
    const filter = new Filter(
      filterId,
      createBy,
      model,
      dateRecord,
      isActive,
      sensors,
      filterLayer
    );

    // return await this.filterRepository.create(filter);
    const dto = await this.filterRepository.create(filter);
    return dto ? dto.toDomain() : null;
  }
}
