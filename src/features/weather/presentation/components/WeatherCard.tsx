import React from "react";
import type { Weather } from "../../data/models/Weather";

interface Props {
  weather: Weather;
}

const WeatherCard: React.FC<Props> = ({ weather }) => (
  <div className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-blue-100 dark:bg-blue-900 shadow-md space-y-2">
    <img
      src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
      alt={weather.description}
      className="w-24 h-24 mx-auto"
    />
    <h2 className="text-xl font-semibold capitalize">{weather.description}</h2>
    <p className="text-3xl font-bold">{Math.round(weather.temperature)}°C</p>
    <p className="text-sm font-light">{weather.city}</p>
  </div>
);

export default WeatherCard;
