
import express from 'express'
import { RegisterRoutes } from './generated/routes';

export async function createApp1(): Promise<express.Application> {
  const app = express();

  
  // Use body parser to read sent json payloads
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());

  RegisterRoutes(app);

  return app;
}