import express from 'express';
import { ChickensController } from '../controllers/chickens.controller.js';
import { chickenAgeMiddleware } from '../middleware/chickenAge.middleware.js';

export const chickenRouter = express.Router();

chickenRouter.get('/', ChickensController.getChickens);
chickenRouter.get('/:id', ChickensController.getChickenById);
chickenRouter.post('/', chickenAgeMiddleware, ChickensController.createChicken);
chickenRouter.put('/:id', chickenAgeMiddleware, ChickensController.replaceChicken);
chickenRouter.patch('/:id', chickenAgeMiddleware, ChickensController.updateChicken);
chickenRouter.delete('/:id', ChickensController.deleteChicken);