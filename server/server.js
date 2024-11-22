import fastify from "fastify";

const fastifyApp =  fastify();

fastifyApp.listen({ port: 8080 }).then(() => console.log(`HTTP Server running on PORT`));