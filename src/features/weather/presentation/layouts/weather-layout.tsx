import React from "react";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";

interface Props {
  city: string;
}

const WeatherWidget: React.FC<Props> = ({ city }) => {
  const { weather, loading, error } = useWeather(city);

  if (loading) return <div className="text-center py-10">Cargando clima...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error}</div>;
  if (!weather) return null;

  return <WeatherCard weather={weather} />;
};

export default WeatherWidget;
