import React, {  useMemo,useState } from 'react'
import { useFindAuctionsQuery } from '../../utils/graphql'
import TableComponent from '../utils/table';
import { FormatDate } from '../utils/dateFormat';
import { useNavigate } from 'react-router-dom';



const AuctionTable = () => {
    const [currentPage, setCurrentPage] = useState(0);
   const {data,loading}=useFindAuctionsQuery()
const navigate=useNavigate()
  

console.log("find auction",data?.findAuctions)

  const columns=useMemo(
    () =>[
      { Header: "Listing Id", accessor: "listingId" },
      { Header: "Institution Name ", accessor: "institution_details.name" },
      { Header: "Property Type ", accessor: "propertyType" },
      { Header: "Emd Submission Date", accessor: ({ emdSubmissionDate }) =>new Date(emdSubmissionDate),Cell: ({ value }) => ( value ?   FormatDate(value) : "-"), },
      { Header: "Auction Start Date", accessor: ({auctionStartDate})=>new Date(auctionStartDate), Cell:({value})=>FormatDate(value)},
      { Header: "Auction End Date", accessor: ({auctionEndDate})=>new Date(auctionEndDate), Cell:({value})=>FormatDate(value)},
      { Header: "Reserve Price", accessor: "reservePrice" },
      { Header: "Address", accessor: "address" },
      { Header: "Contact Details", accessor: "contactDetails" },
      { Header: "city", accessor: "city" },
    ],[])
 
  

 



    // const handlePageChange = (newPage) => {
    //   setCurrentPage(newPage);
    // };

    
   

  if (loading) return <p>Loading...</p>;
  

  return (
    <div>
      <div className='text-end m-5'>
        <button className='btn bg-red-500'onClick={()=>navigate('/add-find-auction')}>New Auction Item</button>
      </div>
        <div className="text-center font-extrabold my-5 text-lg min-w-full">  Find Auction Table </div>

         <TableComponent tableData={data?.findAuctions} columns={columns}/>
    </div>
  )
}

export default AuctionTable