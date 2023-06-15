import { Router } from 'express';
import {
  getAllLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage,
} from '../controllers/language.controller.js';

const languageRoutes = Router();

// Rota para obter todos os idiomas
languageRoutes.get('/get', getAllLanguages);

// Rota para criar um novo idioma
languageRoutes.post('/create', createLanguage);

// Rota para atualizar um idioma existente
languageRoutes.put('/update/:id', updateLanguage);

// Rota para excluir um idioma
languageRoutes.delete('/delete/:id', deleteLanguage);

export { languageRoutes };
