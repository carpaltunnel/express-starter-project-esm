import express from 'express';
import { ChickensController } from '../controllers/chickens.controller.js';

export const chickenRouter = express.Router();

chickenRouter.get('/', ChickensController.getChickens);
chickenRouter.get('/:id', ChickensController.getChickenById);
chickenRouter.post('/', ChickensController.createChicken);
chickenRouter.put('/:id', ChickensController.replaceChicken);
chickenRouter.patch('/:id', ChickensController.updateChicken);
chickenRouter.delete('/:id', ChickensController.deleteChicken);