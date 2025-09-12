import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { routes } from "./routes";
import httpStatus from "http-status";
import { exceptionMiddleware } from "./shared/middlewares";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.setErrorHandler(exceptionMiddleware);

app.register(fastifyCors, { origin: "*" });

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Pets-api",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  transform: jsonSchemaTransform,
});

app.register(routes);

app.get("/health", (req, reply) =>
  reply.send("Tudo certinho com a API😎 ").status(httpStatus.OK)
);

app.register(fastifySwaggerUi, { routePrefix: "/docs" });

const port = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen({ port }).then(() => {
  console.log(`Server is running on port ${port}`);
});
