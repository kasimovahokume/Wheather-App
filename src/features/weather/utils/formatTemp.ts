// Mövcud funksiyalar...
export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};

export const formatVisibility = (visibility: number): string => {
  const km = visibility / 1000;
  return `${km}`;
};

export const formatWindSpeed = (speed: number): string => {
  return `${Math.round(speed)}`;
};

// YENİ: Weather code-dan emoji
export const getWeatherEmoji = (iconCode: string): string => {
  const emojiMap: Record<string, string> = {
    "01d": "☀️",   // clear sky day
    "01n": "🌙",   // clear sky night
    "02d": "⛅",   // few clouds day
    "02n": "☁️",   // few clouds night
    "03d": "☁️",   // scattered clouds
    "03n": "☁️",
    "04d": "☁️",   // broken clouds
    "04n": "☁️",
    "09d": "🌧️",   // shower rain
    "09n": "🌧️",
    "10d": "🌦️",   // rain day
    "10n": "🌧️",   // rain night
    "11d": "⛈️",   // thunderstorm
    "11n": "⛈️",
    "13d": "❄️",   // snow
    "13n": "❄️",
    "50d": "🌫️",   // mist
    "50n": "🌫️",
  };

  return emojiMap[iconCode] || "🌤️";
};