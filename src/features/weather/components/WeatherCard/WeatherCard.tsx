import { useWeatherStore } from "../../store/weatherStore";
import styles from "./WeatherCard.module.css";
import { Loader } from "../../../../shared/components/Loader";
import { formatDate, formatTime } from "../../../../shared/utils/dateFormatter";
import { formatTemperature } from "../../utils/formatTemp";

export const WeatherCard = () => {
  const { data, loading, error } = useWeatherStore();

  if (loading) return <Loader/>
  if (error) return <p className={styles.error}>{error}</p>;
  if (!data) return <p className={styles.empty}>Search for a city</p>;

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div className={styles.card}>
      <img 
        src={iconUrl} 
        alt={data.weather[0].description}
        className={styles.icon}
      />

      <h1 className={styles.temperature}>
        {formatTemperature(data.main.temp)}
      </h1>

      <div className={styles.info}>
        <div className={styles.cityRow}>
          <span className={styles.city}>{data.name}</span>
          <span className={styles.date}>{formatDate(data.dt)}</span>
        </div>

        <p className={styles.condition}>
          💧 {data.weather[0].main}
        </p>

        <p className={styles.time}>
          🕐 {formatTime(data.dt)}
        </p>
      </div>
    </div>
  );
};