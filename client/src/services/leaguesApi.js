import { apiClientConfig } from "./apiClient.config.js";

export const getPopularLeagues = async () => {
  try {
    const response = await apiClientConfig.get(`football-popular-leagues`);
    const leaguesData = response.data.data.response?.popular.slice(0, 7);

    return {
      success: true,
      leagues: leaguesData
    };
  } catch(error) {
    console.error(`Failed to receive API data: ${error}`);
    return {
      success: false,
      leagues: []
    }
  }
}