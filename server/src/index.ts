import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const port = process.env.PORT || 3000;
const dbConnectionString = process.env.DB_CONNECTION_STRING || 'default_connection_string';

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express + TypeScript Server');
});

const startServer = async () => {
  try {
    connectDB(dbConnectionString);
  } catch (err) {
    console.log(err);
  }
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

startServer();
