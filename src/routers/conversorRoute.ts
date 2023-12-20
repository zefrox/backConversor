import { ConversorController } from '../controllers/conversor/conversor.controller';
import { Router } from 'express';
import VerificationTokenMiddleware from '../middleware/authentication'
import RoleMiddleware from '../middleware/role';

const ConversorRouter = Router();
ConversorRouter.post('/v1', [VerificationTokenMiddleware], ConversorController.conversor);
ConversorRouter.get('/v1', [VerificationTokenMiddleware, RoleMiddleware], ConversorController.getAllConvertions);
ConversorRouter.post('/v1/export', [VerificationTokenMiddleware, RoleMiddleware], ConversorController.exportXLS);
export default ConversorRouter;
