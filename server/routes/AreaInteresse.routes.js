import { Router } from 'express';
import {
  getAllAreasInteresse,
  createAreaInteresse,
  updateAreaInteresse,
  deleteAreaInteresse,
} from '../controllers/AreaInteresse.controller.js';
    
//--ROUTES--//
const areaInteresseRoutes = Router();

// http://localhost:4242/api/areaInteresse/getAll
areaInteresseRoutes.get('/get', getAllAreasInteresse);
areaInteresseRoutes.post('/create', createAreaInteresse);
areaInteresseRoutes.put('/update/:id', updateAreaInteresse);
areaInteresseRoutes.delete('/delete/:id', deleteAreaInteresse);

export { areaInteresseRoutes };
