import { IUserModel } from './types';
import UserSchema from './user.schema';

const getByUsername = async (username: string): Promise <IUserModel | null> => {
    return await UserSchema.findOne({username})
}

export const UserDataBase = {
    getByUsername
};