import express from 'express';
import { chickenRouter } from './routes/chickens.routes.js';
import { logger } from './utils/logger.js';
import { chickenAgeMiddleware } from './middleware/chickenAge.middleware.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';

const app = express();
const port = 3000;

app.use(express.json());
// TODO: make more precise on URL
app.use(chickenAgeMiddleware);


// Error handler middleware - MUST BE THE LAST MIDDLEWARE
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    logger.info(`Example app listening at http://localhost:${port}`);
});