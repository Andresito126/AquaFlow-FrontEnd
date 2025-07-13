import { useEffect, useState } from "react";
import { WeatherRepository } from "../../data/repository/WeatherRepository";
import { GetWeatherUseCase } from "../../domain/WeatherUseCase";
import type { Weather } from "../../data/models/Weather";

export function useWeather(city: string) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const repo = new WeatherRepository();
    const useCase = new GetWeatherUseCase(repo);

    setLoading(true);
    useCase
      .execute(city)
      .then(setWeather)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [city]);

  return { weather, loading, error };
}
