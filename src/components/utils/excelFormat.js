import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { FormatDate } from './dateFormat';

export const ConvertToExcel = (data) => {
  
        const formattedData = data.map((item) => {
      if (item.createdAt) {
        return { ...item, createdAt: FormatDate(item.createdAt) };
      }
      return item;
    });

 
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      FileSaver.saveAs(excelData, 'excel_download.xlsx');
 
}

