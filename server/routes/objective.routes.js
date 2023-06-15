import { Router } from 'express';
import {
  getAllObjectives,
  createObjective,
  updateObjective,
  deleteObjective,
} from '../controllers/objective.controller.js';


const objectiveRoutes = Router();

// GET /api/objective/getAll
objectiveRoutes.get('/get', getAllObjectives);

// POST /api/objective/create
objectiveRoutes.post('/create', createObjective);

// PUT /api/objective/update/:id
objectiveRoutes.put('/update/:id', updateObjective);

// DELETE /api/objective/delete/:id
objectiveRoutes.delete('/delete/:id', deleteObjective);

export { objectiveRoutes };
