import { useWeatherStore } from "../../store/weatherStore";
import {
  formatVisibility,
  formatWindSpeed,
} from "../../utils/formatTemp";
import { DetailCard } from "./DetailCard";
import styles from "./WeatherDetails.module.css";

export const WeatherDetails = () => {
  const { data } = useWeatherStore();

  if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Windy</h2>

      <div className={styles.cardsContainer}>
        <div className={styles.row}>
          <DetailCard
            title="Visibility"
            value={formatVisibility(data.visibility)}
          />
          <DetailCard
            title="Wind Speed"
            value={formatWindSpeed(data.wind.speed)}
          />
        </div>

        <div className={styles.row}>
          <DetailCard title="Humidity" value={data.main.humidity} />
          <DetailCard title="Pressure" value={data.main.pressure} />
        </div>
      </div>
    </div>
  );
};