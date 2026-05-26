import express from 'express';
import config from 'config';
import { chickenRouter } from './routes/chickens.routes.js';
import { logger } from './utils/logger.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';
import { database } from './utils/database.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1/chickens', chickenRouter);


// Error handler middleware - MUST BE THE LAST MIDDLEWARE
app.use(errorHandlerMiddleware);

// Environment based config
const mongoConfig = config.get('mongo');

await database.setup({
  ...mongoConfig,
  appName: config.get('appName'),
});

app.listen(port, () => {
    logger.info(`Example app listening at http://localhost:${port}`);
});