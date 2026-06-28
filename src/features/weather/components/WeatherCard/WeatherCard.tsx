import { useWeatherStore } from "../../store/weatherStore";
import {
  formatTemperature,
  formatVisibility,
  formatWindSpeed,
  getWeatherEmoji,
} from "../../utils/formatTemp";
import { formatTime } from "@/shared/utils/dateFormatter";
import { Loader } from "@/shared/components/Loader";
import styles from "./WeatherCard.module.css";

export const WeatherCard = () => {
  const { data, loading, error } = useWeatherStore();

  if (loading) {
    return (
      <div className={styles.card}>
        <div className={styles.centerState}>
          <Loader size={50} color="#ffd89b" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.card}>
        <div className={styles.errorState}>
          <div className={styles.errorIcon}>🌧️</div>
          <h2 className={styles.errorTitle}>City not found</h2>
          <p className={styles.errorText}>
            Try:
            <br />• Check the spelling
            <br />• Try another city
            <br />• Use English names
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.card}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🔍</div>
          <p className={styles.emptyText}>Search for a city to see the weather</p>
        </div>
      </div>
    );
  }

  const weatherEmoji = getWeatherEmoji(data.weather[0].icon);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <span className={styles.dayTime}>
          {currentDate}, {formatTime(data.dt)}
        </span>
      </div>

      <div className={styles.mainInfo}>
        <div className={styles.emojiIcon}>{weatherEmoji}</div>
        <div className={styles.tempInfo}>
          <h2 className={styles.condition}>
            {data.weather[0].main}{" "}
            <span className={styles.temp}>
              {formatTemperature(data.main.temp)}
            </span>
          </h2>
          <p className={styles.location}>
            {data.name}, {data.sys.country}
          </p>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Humidity</span>
          <span className={styles.detailValue}>{data.main.humidity}%</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Wind</span>
          <span className={styles.detailValue}>
            {formatWindSpeed(data.wind.speed)} km/h
          </span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Visibility</span>
          <span className={styles.detailValue}>
            {formatVisibility(data.visibility)} km
          </span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Pressure</span>
          <span className={styles.detailValue}>{data.main.pressure}</span>
        </div>
      </div>
    </div>
  );
};