import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
const UsersDetailsExcel = (usersDetails) => {
    
 
      const worksheet = XLSX.utils.json_to_sheet(usersDetails);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      FileSaver.saveAs(excelData, 'users Details.xlsx');
 
}

export default UsersDetailsExcel