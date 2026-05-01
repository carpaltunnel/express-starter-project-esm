import express from 'express';
import { ChickensController } from './controllers/chickens.controller.js';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/v1/chickens', ChickensController.getChickens);
app.get('/api/v1/chickens/:id', ChickensController.getChickenById);
app.post('/api/v1/chickens', ChickensController.createChicken);
app.put('/api/v1/chickens/:id', ChickensController.replaceChicken);
app.patch('/api/v1/chickens/:id', ChickensController.updateChicken);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});