import jsPDF from 'jspdf';
import 'jspdf-autotable';
import format from 'date-fns/format'

export const  DownloadBidHistory = (vehicle) => {
    const pdf = new jsPDF();
    const logoImg = '../logo.jpeg';
  
    const datePrinted =        `Date Printed: ${new Date().toLocaleDateString()}`;
    const sellerName =         `Seller Name:               ${vehicle?.event?.seller?.name}`;
    const AuctionId =          `Auction Id:                   ${vehicle?.vehicleIndexNo}`;
    const vehicleName =        `Vehicle:                       ${vehicle?.make}`;
    const registrationNumber = `Registration Number:  ${vehicle?.registrationNumber}`;
  
    pdf.addImage(logoImg, 'JPEG', 20, 10, 40, 20);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text(datePrinted, 150, 40);
  
    pdf.setFont('helvetica', 'bold');
    pdf.text('BID SHEET', 100, 60);
    pdf.setFont('helvetica', 'normal');
  
    // Add textual content before the table
    pdf.text(sellerName, 20, 80);
    pdf.text(AuctionId, 20, 90);
    pdf.text(vehicleName, 20, 100);
    pdf.text(registrationNumber, 20, 110);
  
    // Add the table after the textual content
    const sortedBids = vehicle?.userVehicleBids.slice().sort((a, b) => a.amount - b.amount);
  
    const tableHeaders = ["First Name", "Last Name", "Mobile", "Bid Date & Time", "Amount"];
    const tableData = sortedBids.map((bid) => [
      bid?.user?.firstName,
      bid?.user?.lastName,
      bid?.user?.mobile,
      format(new Date(bid.createdAt), 'dd/MM/yy, HH:mm:ss'),
      bid.amount.toString(),
    ]);
  
    pdf.autoTable({
      head: [tableHeaders],
      body: tableData,
      startY: 120, 
    });
    const signatureText = "Dealer Signature: ____________________";
    pdf.setFont('helvetica', 'italic');
    pdf.text(signatureText, 20, pdf.autoTable.previous.finalY + 20);
    pdf.save('bid_history.pdf');
  
  };

  