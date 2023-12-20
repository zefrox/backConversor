import { Document } from 'mongoose';

export interface IUser {
    username: string;
    password: string;
    role: string;
}

export interface IUserModel extends Document, IUser {
    _id: string;
}