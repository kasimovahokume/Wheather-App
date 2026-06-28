import { SearchBar } from "@/features/weather/components/SearchBar";
import { WeatherCard } from "@/features/weather/components/WeatherCard";
import styles from "./WeatherPage.module.css";

export const WeatherPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.appTitle}>⛅ Weather</h1>
          <SearchBar />
        </header>

        <div className={styles.cardWrapper}>
          <WeatherCard />
        </div>
      </div>
    </main>
  );
};