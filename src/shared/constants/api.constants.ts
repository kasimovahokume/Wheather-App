export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
    CURRENT_WEATHER: "/weather",
    FORECAST: "/forecast",
} as const;