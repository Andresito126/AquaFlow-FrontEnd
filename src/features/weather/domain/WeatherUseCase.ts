import type { IWeatherRepository } from "../data/repository/WeatherRepository";
import type { Weather } from "../data/models/Weather";

export class GetWeatherUseCase {
  private weatherRepo: IWeatherRepository;

  constructor(weatherRepo: IWeatherRepository) {
    this.weatherRepo = weatherRepo;
  }

  async execute(city: string): Promise<Weather> {
    return this.weatherRepo.getCurrentWeather(city);
  }
}


