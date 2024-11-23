import { apiClientConfig } from "./apiClient.config.js";

export const getTopMarketValueTransfer = async () => {
  try {
    const response = await apiClientConfig.get('football-get-market-value-transfers');
    const transferData = response.data.data.response?.transfers.slice(0, 3);

    return {
      success: true,
      transfers: transferData
    };
  } catch (error) {
    console.error(`Failed to receive API data: ${error}`);
    return {
      success: false,
      transfers: []
    }
  }
}