import { Router } from 'express';
import { AuthenticationController  } from '../controllers/authentication/authentication.controller';
const AuthenticationRouter = Router();
AuthenticationRouter.post('/v1/login', AuthenticationController.login);
export default AuthenticationRouter;