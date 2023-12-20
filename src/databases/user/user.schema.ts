import mongoose from 'mongoose';
import { IUserModel} from './types';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        require: [true, 'The Username is required']
    },
    password: {
        type: String,
        require: [true, 'The password is required']
    },
    role: {
        type: String,
        require: [true, 'The Role is required']
    }
});

export default mongoose.model<IUserModel>('users', UserSchema )