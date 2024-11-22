import dotenv from "dotenv";
import fastify from "fastify";
import routes from "./src/routes/apiRoutes.js";

dotenv.config();
const fastifyApp =  fastify();

fastifyApp.register(routes, { prefix: '/sportz' });

fastifyApp.listen({ port: process.env.PORT }).then(() => console.log(`HTTP Server running on PORT ${process.env.PORT}`));