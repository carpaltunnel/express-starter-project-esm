import express from 'express';
import { chickenRouter } from './routes/chickens.routes.js';
import { logger } from './utils/logger.js';
import { chickenAgeMiddleware } from './middleware/chickenAge.middleware.js';

const app = express();
const port = 3000;

app.use(express.json());
// TODO: make more precise on URL
app.use(chickenAgeMiddleware);
app.use('/api/v1/chickens', chickenRouter);


app.listen(port, () => {
    logger.info(`Example app listening at http://localhost:${port}`);
});