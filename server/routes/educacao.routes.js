import { Router } from 'express';
import {
  getAllEducations,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../controllers/educacao.controller.js';

//--ROUTES--//
const educationRoutes = Router();

// http://localhost:4242/api/education/getAll
educationRoutes.get('/get', getAllEducations);
educationRoutes.post('/create', createEducation);
educationRoutes.put('/update/:id', updateEducation);
educationRoutes.delete('/delete/:id', deleteEducation);

export { educationRoutes };
