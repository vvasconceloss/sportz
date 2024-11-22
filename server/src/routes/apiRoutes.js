import { fetchExternalData } from "../service/apiService.js";

const routes = (fastify) => {
  fastify.get('/data/:path', async (request, response) => {
    const path = request.params.path;

    try {
      const apiData = await fetchExternalData(path, request.query);
      return apiData;
    } catch (requestError) {
      return console.error(`Error receiving route data: ${requestError.message}`);
    }
  });
}

export default routes;