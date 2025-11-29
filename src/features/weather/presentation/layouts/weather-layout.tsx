import React from "react";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";
import { useTranslation } from "react-i18next";

interface Props {
  city: string;
}

const WeatherWidget: React.FC<Props> = ({ city }) => {
  const { weather, loading, error } = useWeather(city);
  const { t } = useTranslation("common");


  if (loading) return <div className="text-center py-10">{t("common.pages.dashboard.weather.loading")}</div>;
  if (error) return <div className="text-center text-red-500 py-10">{t("common.pages.dashboard.weather.error")}</div>;
  if (!weather) return null;

  return <WeatherCard weather={weather} />;
};

export default WeatherWidget;
