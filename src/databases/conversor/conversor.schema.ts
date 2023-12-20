import mongoose from 'mongoose';
import { IUserModel } from '../user/types';

const Schema = mongoose.Schema;

const ConversorSchema = new Schema({
    activityDate: {
        type: String,
        require: [true, 'The Activity Date is required']
    },
    username: {
        type: String,
        require: [true, 'The Username is required']
    },
    originAmount: {
        type: Number,
        require: [true, 'The Origin Amount is required']
    },
    conversionDate: {
        type: String,
        require: [true, 'The Conversion Date is required']
    },
    ufValue: {
        type: Number,
        require: [true, 'The UF Value is required']
    },
    amountConverted: {
        type: Number,
        require: [true, 'The Amount Converted is required']
    }
});

export default mongoose.model<IUserModel>('conversor', ConversorSchema);
