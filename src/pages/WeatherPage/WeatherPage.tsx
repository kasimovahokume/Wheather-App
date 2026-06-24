import { useEffect } from "react";
import { useWeatherStore } from "@/features/weather/store/weatherStore";
import { WeatherCard } from "@/features/weather/components/WeatherCard";
import styles from "./WeatherPage.module.css";
import { WeatherDetails } from "@/features/weather/components/WeatherDetails";
import { SearchBar } from "@/features/weather/components/SearchBar";

export const WeatherPage = () => {
  const { fetchWeather } = useWeatherStore();

  useEffect(() => {
    fetchWeather("Baku");
  }, [fetchWeather]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.leftPanel}>
          <SearchBar/>
          <WeatherCard />
        </section>

        <section className={styles.rightPanel}>
          <WeatherDetails/>
        </section>
      </div>
    </main>
  );
};