import express from 'express';
import multer from 'multer';
import { ChickensController } from '../controllers/chickens.controller.js';
import { chickenAgeMiddleware } from '../middleware/chickenAge.middleware.js';
import { destination, filename } from '../utils/utils.js';

const multerStorage = multer.diskStorage({
  destination,
  filename,
});
const upload = multer({ storage: multerStorage })

export const chickenRouter = express.Router();

chickenRouter.get('/', ChickensController.getChickens);
chickenRouter.get('/:id', ChickensController.getChickenById);
chickenRouter.post('/', [chickenAgeMiddleware, upload.single('chickenImage')], ChickensController.createChicken);
chickenRouter.put('/:id', chickenAgeMiddleware, ChickensController.replaceChicken);
chickenRouter.patch('/:id', chickenAgeMiddleware, ChickensController.updateChicken);
chickenRouter.delete('/:id', ChickensController.deleteChicken);