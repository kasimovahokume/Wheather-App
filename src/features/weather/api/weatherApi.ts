import type { AxiosResponse } from "axios";
import { API_KEY, ENDPOINTS } from "../../../shared/constants/api.constants"
import type { WeatherResponse } from "../types/weather.types"
import { axiosInstance } from "../../../shared/lib/axios";

export const weatherApi = {
  getByCity: async (city: string): Promise<WeatherResponse> => {
    const response: AxiosResponse<WeatherResponse> = await axiosInstance.get(
      ENDPOINTS.CURRENT_WEATHER,
      {
        params: {
          q: city,
          appid: API_KEY,
          units: "metric",
        },
      }
    );

    return response.data;
  },
};