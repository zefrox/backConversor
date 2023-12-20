import { Request, Response, NextFunction } from 'express';

const RoleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(res.locals.user.role === 'admin'){
        next();
    }else {
        res.status(403).send({
            message: "Require Admin Role!"
          });
          return;
    }
    
};

export default RoleMiddleware;
