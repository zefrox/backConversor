import { Request, Response, NextFunction } from 'express';
import { UserService } from '../../services/user/user.service';

const login = async (req: Request, res: Response, next: NextFunction) => {
    const {username, password} = req.body;
    try{
        const dataResponseLogin = await UserService.login(username,password);
        if(!dataResponseLogin){
            return res.status(401).json('Not Authorized')
        }else {
            return res.status(200).json(dataResponseLogin)
        }
        
    } catch (err) {
        console.log('🚀 ~ err:', err)
        throw err;
    }
}
export const AuthenticationController = {
    login,
};
