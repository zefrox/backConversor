import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { UserDataBase } from '../../databases/user/user.database';
import { environments} from '../../common/environment';
import { ILoginResponse } from '../../common/dto/user.dto'
import { parseStringToHash, validateHash } from '../../common/helper/encrypt';

const login = async (usernameBody: string, passwordBody: string): Promise<ILoginResponse | null> => {
    const foundUser = await UserDataBase.getByUsername(usernameBody)
    if (!foundUser) {
        return null
    }
    const validHash = await validateHash(passwordBody, foundUser.password);
    if (!validHash) {
        return null
    }
    const { username, password, role } = foundUser
    const token = await sign({ username, password, role } , environments.jwt.secret, { expiresIn: environments.jwt.expired });
    return {
        token,
        user: {
            username,
            role 
        }
    };
}

export const UserService = {
    login
};