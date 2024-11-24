import { apiClientConfig } from "./apiClient.config.js";
import { getTeamLogo } from "./teamsApi.js";

export const getPlayerFaceImage = async (playerId) => {
  try {
    const response = await apiClientConfig.get(`football-get-player-logo?playerid=${playerId}`);

    return {
      success: true,
      playerImage: response.data.data.response.url
    };
  } catch (error) {
    return {
      success: false,
      playerImage: null
    }
  }
}

export const getPlayerDetails = async (playerId) => {
  try {
    const response = await apiClientConfig.get(`football-get-player-detail?playerid=${playerId}`);

    return {
      success: true,
      playerDetails: response.data.data.response.detail
    }
  } catch (error) {
    return {
      success: false,
      playerDetails: null
    }
  }
}

export const getTopMarketValueTransfer = async () => {
  try {
    const topTransfer = [];
    const response = await apiClientConfig.get('football-get-market-value-transfers');
    const transferData = response.data.data.response?.transfers;

    for (let i = 0; i < 3; i++) {
      topTransfer.push({
        transfer: transferData[i],
        detail: await getPlayerDetails(transferData[i].playerId),
        image: await getPlayerFaceImage(transferData[i].playerId),
        toClub: (await getTeamLogo(transferData[i].toClubId))?.teamLogoUrl,
        fromClub: (await getTeamLogo(transferData[i].fromClubId))?.teamLogoUrl,
      });
    }

    return {
      success: true,
      transfers: topTransfer,
    };
  } catch (error) {
    console.error(`Failed to receive API data: ${error}`);
    return {
      success: false,
      transfers: []
    }
  }
}