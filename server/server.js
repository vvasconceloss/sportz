import dotenv from "dotenv";
import fastify from "fastify";
import cors from "@fastify/cors";
import routes from "./src/routes/apiRoutes.js";

dotenv.config();
const fastifyApp =  fastify();
await fastifyApp.register(cors, {
  origin: '*',
  methods:['GET']
});

fastifyApp.register(routes, { prefix: '/sportz' });

fastifyApp.listen({ port: process.env.PORT }).then(() => console.log(`HTTP Server running on PORT ${process.env.PORT}`));