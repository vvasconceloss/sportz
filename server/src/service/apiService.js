import axios from "axios";

export const fetchExternalData = async (path, query) => {
  const externalApiUrl = `${process.env.EXTERNAL_API_URL}${path}`;
  
  try {
    const responseData = await axios.get(externalApiUrl, {
      params: query,
      headers: {
        'x-rapidapi-key': process.env.EXTERNAL_API_KEY,
        'x-rapidapi-host': process.env.EXTERNAL_API_HOST
      }
    });
    return {
      success: true,
      data: responseData.data,
      error: null,
    };
  } catch (requestError) {
    console.error(`Failed to access data from external API: ${requestError}`);
    return {
      success: false,
      data: null,
      error: requestError
    };
  }
}