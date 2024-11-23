import axios from "axios";

const apiClientConfig = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

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