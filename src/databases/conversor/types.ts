import { Document } from 'mongoose';

export interface IHistoricConverted {
    activityDate: string;
    username: string;
    originAmount: number;
    conversionDate: string;
    ufValue: number;
    amountConverted: number; 
}



export interface IIHistoricConvertedModel extends Document, IHistoricConverted {
    _id: string;
}