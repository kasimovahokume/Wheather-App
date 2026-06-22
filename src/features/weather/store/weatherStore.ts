import { create } from "zustand";
import type { WeatherState } from "../types/weather.types";
import { weatherApi } from "../api/weatherApi";


export const useWeatherStore = create<WeatherState>((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchWeather: async (city: string) => {
        set({ loading: true, error: null});

        try {
            const data = await weatherApi.getByCity(city);
            set({data,loading:false});
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong";
            set({error: message, loading: false});
        }
    }
}))