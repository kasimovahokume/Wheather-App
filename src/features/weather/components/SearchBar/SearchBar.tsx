import { useEffect, useState } from "react";
import { Input } from "@/shared/components/Input";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useWeatherStore } from "../../store/weatherStore";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [city, setCity] = useState("");
  const debouncedCity = useDebounce(city, 600);
  const { fetchWeather } = useWeatherStore();

  useEffect(() => {
    if (debouncedCity.trim()) {
      fetchWeather(debouncedCity);
    }
  }, [debouncedCity, fetchWeather]);

  return (
    <div className={styles.searchBar}>
      <Input
        icon="🔍"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};