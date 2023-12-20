import { Router } from 'express';

import Authenticationrouter from './authenticationRoute';
import ConversorRouter from './conversorRoute';


const routersProject = Router();
routersProject.use('/auth', Authenticationrouter);
routersProject.use('/conversor', ConversorRouter);
export default routersProject;


