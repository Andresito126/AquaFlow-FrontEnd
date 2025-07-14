import type { Weather } from "../models/Weather";

export interface IWeatherRepository {
  getCurrentWeather(city: string): Promise<Weather>;
}

export class WeatherRepository implements IWeatherRepository {
  private readonly apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  private baseUrl = "https://api.openweathermap.org/data/2.5/weather";

  async getCurrentWeather(city: string): Promise<Weather> {
    if (!this.apiKey) {
      throw new Error("API key for OpenWeatherMap is not set");
    }

    const url = `${this.baseUrl}?q=${encodeURIComponent(city)}&units=metric&appid=${this.apiKey}`;
    const response = await fetch(url);
    console.log("API KEY:", import.meta.env.VITE_WEATHER_API_KEY);

    if (!response.ok) {
      throw new Error("Error fetching weather data");
    }

    const data = await response.json();
    

    return {
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
    };
  }
}
