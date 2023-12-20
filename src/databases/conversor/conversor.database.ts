import { IHistoricConverted, IIHistoricConvertedModel } from './types';
import ConversorSchema from './conversor.schema';


const getAll = async (): Promise<IHistoricConverted[] | null> => {
    return await ConversorSchema.find();
};

const create = async (userData: IHistoricConverted): Promise<any> => {
    const insertData = new ConversorSchema(userData);
    return await insertData.save();
};


export const ConversorDataBase = {
    getAll,
    create
};
