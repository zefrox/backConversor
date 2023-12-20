import { environments } from '../../common/environment';
import moment from 'moment';
import axios from 'axios';
import { UfResponseProvider } from '../../common/dto/conversor.dto';


const getUF = async (dateToConsult: Date): Promise<UfResponseProvider> => {
    const url = `${environments.urlGetUF}${moment(dateToConsult).year()}/${moment(dateToConsult).month()}/dias/${moment(dateToConsult).day()}${environments.urlGetUFFinal}`;
    try{
        const {data} = await axios.get(url)
        const valorUF: string = data.UFs[0].Valor.split(',')[0]
        const dataUF = {
            valueUF: Number(valorUF.replace('.', '')),
            dateUF: data.UFs[0].Fecha

        }
        return dataUF

    }catch(err){
        throw err   
    }
};

export const UfProvider = {
    getUF
};



