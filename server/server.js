import dotenv from "dotenv";
import fastify from "fastify";

dotenv.config();
const fastifyApp =  fastify();

fastifyApp.listen({ port: process.env.PORT }).then(() => console.log(`HTTP Server running on PORT ${process.env.PORT}`));