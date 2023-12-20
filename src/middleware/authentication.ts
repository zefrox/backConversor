
import jwt from 'jsonwebtoken';
import {environments} from '../common/environment';
import { Request, Response, NextFunction } from 'express';
// import { sign } from 'jsonwebtoken';

const VerificationTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log('a')
    const tokenRaw = req.headers['authorization']
    console.log('b')
    const token = tokenRaw?.replace('Bearer ', '')
    console.log('c')
    if (!token) { return res.status(403).send({message: "Token not found!"}); }
    console.log('d')
    // const tokensss = sign({ username: 'user', password: 'user', role: 'common' }, environments.jwt.secret, { expiresIn: environments.jwt.expired });
    // console.log('🚀 ~ tokensss:', tokensss)

    jwt.verify(token, environments.jwt.secret, function(err, decoded){
        if(err) {
            console.log(err.message)
            return err.message
        } 
        else {
            console.log(decoded)
            res.locals.user = decoded
            next();
        }
      });
      console.log('e')
};

export default VerificationTokenMiddleware;
