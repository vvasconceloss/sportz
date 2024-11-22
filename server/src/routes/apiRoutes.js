import { fetchExternalData } from "../service/apiService.js";

const routes = (fastify) => {
  fastify.get('/data/:path', async (request, response) => {
    const path = request.params.path;

    try {
      const apiData = await fetchExternalData(path, request.query);
      response.status(200).send({ success: apiData });
    } catch (requestError) {
      response.status(500).send({ error: `Error receiving route data: ${requestError.message}` });
    }
  });
}

export default routes;