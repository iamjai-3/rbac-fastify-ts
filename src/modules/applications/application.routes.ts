import { FastifyInstance } from 'fastify';
import {
  createApplicationsHandler,
  getApplicationsHandler
} from './applications.controllers';
import { createApplicationJsonSchema } from './applications.schemas';

export async function applicationRoutes(app: FastifyInstance) {
  app.post(
    '/',
    { schema: createApplicationJsonSchema },
    createApplicationsHandler
  );

  app.get('/', getApplicationsHandler);
}
