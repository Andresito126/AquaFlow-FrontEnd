import React from "react";
import type { Weather } from "../../data/models/Weather";

interface Props {
  weather: Weather;
}

const WeatherCard: React.FC<Props> = ({ weather }) => (
  <div className="flex flex-col items-center justify-center text-center space-y-3">
    <img
      src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
      alt={weather.description}
      className="w-32 h-32 mx-auto invert dark:invert-0"
    />
    <h2 className="text-2xl font-semibold capitalize">{weather.description}</h2>
    <p className="text-5xl font-bold">{Math.round(weather.temperature)}°C</p>
    <p className="text-md font-light">{weather.city}</p>

    <div className="mt-4 w-full grid grid-cols-2 gap-4 text-sm">
      <div className="flex flex-col items-center">
        <span className="font-medium">Humedad</span>
        <span>{weather.humidity}%</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-medium">Viento</span>
        <span>{weather.windSpeed} m/s</span>
      </div>
    </div>
  </div>
);

export default WeatherCard;
