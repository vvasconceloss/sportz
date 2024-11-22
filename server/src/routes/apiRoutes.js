const routes = (fastify) => {
  fastify.get('/data', async (request, response) => {
    try {
      return response.code(200).type("text/plan").send("OK");
    } catch (requestError) {
      return console.error(`Error receiving route data: ${requestError}`);
    }
  });
}

export default routes;