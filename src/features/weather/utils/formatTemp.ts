// Temperaturu yuvarlaqlaşdır və °C əlavə et
export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};

// Visibility-ni metrdən km-ə çevir
export const formatVisibility = (visibility: number): string => {
  const km = visibility / 1000;
  return `${km}`;
};

// Külək sürətini yuvarlaqlaşdır
export const formatWindSpeed = (speed: number): string => {
  return `${Math.round(speed)}`;
};