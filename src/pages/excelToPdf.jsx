import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { PDFDocument, pdf, rgb } from 'pdf-lib';


const ExcelToPdf = () => {

    const [excelFile, setExcelFile] = useState(null);

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setExcelFile(file);
    }
    const convertExcelToPDF = async () => {
        if (excelFile) {
          // Read Excel file
          const excelData = await readFile(excelFile);
    
          // Create a PDF document
          const pdfDoc = await createPDF(excelData);
          console.log(pdfDoc)
    
          // Download or display the PDF
          // For simplicity, you can implement a download or display feature here.
        }
      };
      const readFile = async (file) => {
        const fileReader = new FileReader();
        return new Promise((resolve, reject) => {
          fileReader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            // Process the workbook data as needed
            resolve(workbook);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
          fileReader.readAsArrayBuffer(file);
        });
      };
    
      const createPDF = async (excelData) => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([612, 792]); // Standard US Letter size
      
        // Create a font and add it to the PDF
        const font = await pdfDoc.embedFont('Helvetica');
        const fontSize = 12;
      
        // Add text to the page
        const { width, height } = page.getSize();
        const text = 'Hello, PDF!';
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        const x = (width - textWidth) / 2;
        const y = height - 70;
      
        const drawTextOptions = {
          font: font,
          size: fontSize,
          color: rgb(0, 0, 0), // Black color
        };
      
        page.drawText(text, { x, y, ...drawTextOptions });
      
        // Serialize the PDF document to a Uint8Array
        const pdfBytes = await pdfDoc.save();
      
        return pdfBytes;
      };
    

    
    
        

    return (
        <div>
          <input type="file" accept=".xlsx" onChange={handleFileUpload} />
          <button onClick={convertExcelToPDF}>Convert to PDF</button>
        </div>
      
  )
}

export default ExcelToPdf