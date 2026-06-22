// Hava vəziyyəti haqqında məlumat (Clouds, Mist, Rain və s.)
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// Əsas hava göstəriciləri
export interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

// Külək məlumatları
export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

// Sistem məlumatları (ölkə, gün doğuşu/batışı)
export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

// API-dən gələn TAM cavab
export interface WeatherResponse {
  weather: Weather[];
  main: MainInfo;
  wind: Wind;
  sys: Sys;
  visibility: number;
  dt: number;
  name: string;
  cod: number;
}

// Store üçün state type-ı
export interface WeatherState {
  data: WeatherResponse | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}