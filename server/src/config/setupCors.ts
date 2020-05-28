import { Express } from 'express';
import cors, { CorsOptions } from 'cors';

/**
 * Setup cors for the API
 */
export default (expressApp: Express): void => {
  const API_URL = process.env.API_URL || 'http://localhost:5000';
  const NODE_ENV = process.env.NODE_ENV;
  const corsList =
    NODE_ENV !== 'production' ? ['http://localhost', API_URL] : [];

  const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
      if (origin && corsList.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  expressApp.use(cors(corsOptions));
};
