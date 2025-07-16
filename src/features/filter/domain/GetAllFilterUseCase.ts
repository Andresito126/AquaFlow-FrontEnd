import { Filter } from "../data/models/Filter";
import { FilterRepository } from "../data/repository/FilterRepository";

export class GetAllFiltersUseCase {
  private filterRepository: FilterRepository;

  constructor(filterRepository: FilterRepository) {
    this.filterRepository = filterRepository;
  }

  async execute(): Promise<Filter[]> {
    const dtos = await this.filterRepository.getAll();
    return dtos.map(dto => dto.toDomainBasic());
  }
}
