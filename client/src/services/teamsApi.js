import { apiClientConfig } from "./apiClient.config.js";

export const getTeamLogo = async (teamId) => {
  try {
    const response = await apiClientConfig.get(`football-team-logo?teamid=${teamId}`);
    return {
      success: true,
      teamLogoUrl: response.data.data.response.url
    }
  } catch (error) {
    return {
      success: false,
      teamLogo: null
    }
  }
}