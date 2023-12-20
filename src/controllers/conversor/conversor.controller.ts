import { Request, Response, NextFunction } from 'express';
import { ConversorService } from '../../services/conversor/conversor.service';
import * as exceljs from 'exceljs';

const conversor = async (req: Request, res: Response, next: NextFunction) => {
    const { dateConversor, ufQuantity } = req.body;
    const { username } = res.locals.user
    try {
        const dataResponseConvertion = await ConversorService.conversor(dateConversor, ufQuantity, username);
        res.status(200).json(dataResponseConvertion);
    } catch (err) {
        next(err);
    }
};

const getAllConvertions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dataResponse = await ConversorService.getAllConvertions();
        res.status(200).json(dataResponse);
    } catch (err) {
        next(err);
    }
};
const exportXLS = async (req: Request, res: Response, next: NextFunction) => {
    console.log("aqui viene ")
    try {
        const dataResponseConvertion = await ConversorService.getAllConvertions()    
        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet("Convertions");
    
        worksheet.columns = [
        { header: "Fecha Actividad", key: "fa", width: 10 },
        { header: "Usuario", key: "user", width: 10 },
        { header: "Monto Origen", key: "mo", width: 10 },
        { header: "Fecha Conversion", key: "fc", width: 10 },
        { header: "Valor Moneda", key: "vm", width: 10 },
        { header: "Monto Conversion", key: "mc", width: 10 },

        ];
    
        dataResponseConvertion.forEach((convertion) => {
            worksheet.addRow({
                fa:convertion.activityDate, 
                user:convertion.username, 
                mo: convertion.originAmount, 
                fc: convertion.conversionDate,
                vm: convertion.ufValue,
                mc: convertion.amountConverted});
        });
        worksheet.getRow(1).eachCell((cell) => {
            cell.font = { bold: true };
        });
        res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          );
          res.setHeader("Content-Disposition", `attachment; filename=convertions.xlsx`);
      
          return workbook.xlsx.write(res).then(() => {
            res.status(200);
          });
        // res.status(200).json(dataResponseLogin);
    } catch (err) {
        next(err);
    }
};

export const ConversorController = {
    conversor,
    getAllConvertions,
    exportXLS
};
