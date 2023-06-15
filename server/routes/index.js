import { Router } from 'express';
import { objectiveRoutes } from './objective.routes.js';

import { todoRoutes } from './todo.routes.js';
import { usersRoutes } from './user.routes.js';
import { areaInteresseRoutes } from './AreaInteresse.routes.js';
import { educationRoutes } from './educacao.routes.js';
import { languageRoutes } from './language.routes.js';
import { skillsRoutes } from './skills.routes.js';

const api = Router();
// http://localhost:4242/api/todo ....
api.use('/todo', todoRoutes);

// http://localhost:4242/api/user ....
api.use('/user', usersRoutes);

api.use('/objective', objectiveRoutes);

api.use('/areainteresse', areaInteresseRoutes);

// http://localhost:4242/api/educacao ....
api.use('/educacao', educationRoutes);

api.use('/language', languageRoutes);

api.use('/skills', skillsRoutes);


export { api };
