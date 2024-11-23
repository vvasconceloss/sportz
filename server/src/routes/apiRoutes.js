import { fetchExternalData } from "../service/apiService.js";

const routes = (fastify) => {
  fastify.get('/data/:path', async (request, response) => {
    const path = request.params.path;

    try {
      const apiData = await fetchExternalData(path, request.query);

      if (apiData.success == false) {
        return response.status(400).send({
          success: false,
          error: apiData.error
        });
      }

      return apiData;
    } catch (requestError) {
      console.log(`Failed to receive data from the API service: ${requestError}`);
      return response.status(500).json({ error: requestError });
    }
  });
}

export default routes;