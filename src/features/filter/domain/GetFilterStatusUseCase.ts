import { FilterRepository } from "../data/repository/FilterRepository";

export class GetFilterStatusUseCase {
  private repo: FilterRepository;

  constructor(repo: FilterRepository) {
    this.repo = repo;
  }

  async execute(filterId: string) {
    const res = await this.repo.getStatusById(filterId);
    if (!res) throw new Error("No se pudo obtener el estado del filtro");
    return res;
  }
}
