import { ConversorDataBase } from '../../databases/conversor/conversor.database';
import { UfProvider } from '../../providers/uf/uf.provider';
import { IHistoricConverted } from '../../databases/conversor/types';
import moment from 'moment';
import { UfResponseService } from '../../common/dto/conversor.dto';

const conversor = async (dateToConsult: Date, ufQuantity: number, username: string): Promise<UfResponseService> => {
    let UFValue;
    try {
        UFValue = await UfProvider.getUF(dateToConsult)
    }catch(err){
        throw new Error('Error to try to obtein UF')
    }
    
    const Calculated = UFValue.valueUF * ufQuantity
    const dataSaveHistoric: IHistoricConverted = {
        activityDate: moment(new Date()).format('DD/MM/YYYY'),
        username,
        originAmount:ufQuantity,
        conversionDate:  moment(dateToConsult).format('DD/MM/YYYY') ,
        ufValue: UFValue.valueUF,
        amountConverted: Number(Calculated)
        }
    let conversionSaved;
    try{
        conversionSaved = await ConversorDataBase.create(dataSaveHistoric)
    }catch(err){
        throw new Error('Error saving convertion')
    }
    
    if(!conversionSaved){
        throw new Error("Error in convertion")
    }
    return {
        convetionAmount: ufQuantity,
        UFValue: dataSaveHistoric.ufValue,
        convertionDate: dataSaveHistoric.conversionDate,
        amount: dataSaveHistoric.amountConverted
    }
    
};

const getAllConvertions = async (): Promise<IHistoricConverted[]> => {
    const conversionSaved = await ConversorDataBase.getAll()
    if(!conversionSaved){
        throw new Error("Error in convertion")
    }
    return conversionSaved;
};

export const ConversorService = {
    conversor,
    getAllConvertions
};
