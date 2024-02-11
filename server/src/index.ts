import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

import routes from './main-route.js';

dotenv.config();

const port = process.env.PORT || 3000;
const dbConnectionString = process.env.DB_CONNECTION_STRING || 'default_connection_string';

const app: Express = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));



app.use(routes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express + TypeScript Server');
});

const startServer = async () => {
  try {
    connectDB(dbConnectionString);
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
  }
  
};

startServer();
