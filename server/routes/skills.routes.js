import { Router } from 'express';
import {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skills.controller.js';

const skillsRoutes = Router();

// http://localhost:4242/api/skills/getAll
skillsRoutes.get('/get', getAllSkills);
skillsRoutes.post('/create', createSkill);
skillsRoutes.put('/update/:id', updateSkill);
skillsRoutes.delete('/delete/:id', deleteSkill);

export { skillsRoutes };
