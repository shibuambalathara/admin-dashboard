import { Button } from '@material-tailwind/react'
import React, { useEffect, useMemo,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTable,useSortBy,usePagination,useGlobalFilter } from "react-table"
import {useEventTableQuery, useUpdateEventMutation} from '../../utils/graphql'
import SearchUser from '../users/searchUser'

import format from 'date-fns/format'
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import Report from './report'
import Swal from "sweetalert2";


const EventsTableComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);


    const {data,loading,error,refetch}=useEventTableQuery({variables:{ skip: currentPage * pageSize,take:pageSize, orderBy: {startDate:"desc"}}})
console.log(data,"data")
const [addParticipants]=useUpdateEventMutation()

useEffect(()=>{
  refetch()
},[data])

    const navigate=useNavigate()
    
    // const handleCurrentPage=(action)=>{
    //   console.log(action,"action")
    //   if(action==='dec'&& currentPage>0){
    //     setCurrentPage(currentPage-1)
    //   }
    // }





  
   const handleReport=(report)=>{
    console.log(report,"report")

    const convertToExcel = (report) => {
      const worksheet = XLSX.utils.json_to_sheet(report);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      FileSaver.saveAs(excelData, 'Event-Report.xlsx');
    }
    convertToExcel(report);
   }
   const handleDealer=async(eventId)=>{




const { value: input } = await Swal.fire({
  title: 'Enter Mobile Number',
  html: '<input id="mobile" class="swal2-select"></input>',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('mobile').value
    ];
  }
});

  const mobileNumber=input[0]
 
  addParticipants({variables:{where: {id:eventId},
 data:{participants:{connect:{mobile:mobileNumber}}}
}}).then(()=>{
  Swal.fire({
    icon:'success',
    title:"Dealer Added Successfully" 
  })
  refetch()
}).catch((err)=>{
  Swal.fire({
    icon:'error',
    title:"User Does not Exist"
    
  })
  console.log(err,"error")})
}
   

    const columns = useMemo(
        () => [
        
           {
            Header: "Auction No",
            Cell: ({ row }) => (
       row.original.endDate>new Date().toISOString() ?row.original?.eventCategory==='open'? 
        <a className="btn bg-red-500 " href={`/openAuctionUpdatedByAdmin/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.eventNo}</a>
        :<span class="relative  h-3 w-3  ">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-30"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500">{row.original.eventNo}</span>
      </span>
        :row.original.eventNo
            
            )
          },
          { Header: "seller Name", accessor: "seller.name" },
          { Header: "Location", accessor: "location.name" },
          { Header: "Event Category ", accessor: "eventCategory" },
          //  { Header: "Start Date ", accessor: ({startDate})=>{return format(new Date( startDate),`dd/MM/yy, HH:mm`)} },
          {
            Header: "start Date",
            accessor: ({ startDate }) => new Date( startDate),
            sortType: "datetime",
            Cell: ({ value }) => format(value, "dd/MM/yy, HH:mm"),
          },
          { Header: "End Date ", accessor: ({endDate})=>{return format(new Date (endDate),`dd/MM/yy, HH:mm`)} },
          { Header: "Status ", accessor: "status" }, 
          {
            Header: "Add Partcipant",
            Cell: ({ row }) => (
              row.original.endDate>new Date().toISOString() ?       <button className="btn bg-orange-500" onClick={() => handleDealer(row.original.id)}>Add</button>:"Event Completed"
            )
          },
          {
            Header: "View Participants",
            Cell: ({ row }) => (
              <a className="btn bg-violet-500" href={`/participants/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.participantsCount}</a>

              )
          },
         
        {
          Header: "Vehicles ",
          Cell: ({ row }) => (
<>  { row.original.vehiclesCount===0  ?   <a className="btn btn-accent" href={`/add-vehicle/${row.original.id}`} target="_blank" rel="noopener noreferrer">Add Vehicle</a>
:              <a className="btn btn-secondary" href={`/view-vehicls/${row.original.id}`} target="_blank" rel="noopener noreferrer">{row.original.vehiclesCount}</a>
}</> 
            )
        },
          // {
          //   Header: "View Vehicles",
          //   Cell: ({ row }) => (
          //     // <button className="btn btn-secondary" onClick={()=>handleViewVehicle(row.original.id) }>View vehicls</button>

          //     )
          // },
         
          {
            Header: "Upload Excel File",
            Cell: ({ row }) => (
      //        <button className="btn btn-info" onClick={()=>handleUploadExcelFile(row.original.id) }>Upload</button>
      <a className="btn btn-info" href={`/excel-upload/${row.original.id}`} target="_blank" rel="noopener noreferrer">Upload</a>
   
      )
          },
   
          {
            Header: "View/Edit Event",
            Cell: ({ row }) => (
              <a className="btn btn-warning" href={`/edit-event/${row.original.id}`} target="_blank" rel="noopener noreferrer">View/Edit</a>

              )
          },
          {
            Header: "Report (excel)",
            Cell: ({ row }) => (
              <button className="btn btn-success" onClick={() => handleReport(row.original.Report)}>Download</button>
            )
          },
  
        
          
        ],
        []
      );

      const tableData=useMemo(() => (data ? data.events : []), [data]);
     
      
      
      const tableInstance=useTable({
        columns ,
        data: tableData,
        initialState: {
          sortBy: [
            {
              id: "start Date",
              desc: true,
            },
          ],
        },
      },useGlobalFilter,useSortBy,usePagination);
     
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
         
          page,
          prepareRow,
          nextPage,
          previousPage,
          canNextPage,
          canPreviousPage,
          pageOptions,
          pageCount,
          gotoPage,
          setPageSize: setTablePageSize,
          state: { pageIndex: tablePageIndex, pageSize: tablePageSize },
          state,
          setGlobalFilter
        } = tableInstance;
    
        const {globalFilter}=state
    

      if (loading) return <p>Loading...</p>;
      
    

  return (
    <div className="flex  flex-col w-full justify-around ">
         <div className='flex  justify-between  m-2'> 
        <div>
    <button
      onClick={() => navigate("/addevent")}
      className="btn btn-outline"
    >
     Add Event
    </button>
    </div>
    <div>
        <Report/>
        </div>
        </div> 
    <div className=" flex flex-col w-full justify-center m-auto ">
    <div className="mb-2">
  <div className="text-center font-extrabold my-5 text-lg min-w-full">  Events Data Table </div>

    <SearchUser filter={globalFilter} className="  text-white bg-red-200" setFilter={setGlobalFilter}/>
 
 
   
    {/* <input type='datetime-local' onChange={(e)=>setStartDate1(new Date( e.target.value).toISOString())}/>
    <input type='datetime-local' onChange={(e)=>setendDate1(new Date( e.target.value).toISOString())}/> */}
  </div>
      <table
        className="w-full divide-y divide-gray-200"
        {...getTableProps()}
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  scope="col"
                  className="py-3 pl-4"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200" {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="py-3 pl-4 text-center" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div className="flex justify-center">
            <div className="flex flex-col justify-between mt-4 ">
            <div className="flex justify-center">
          Page{' '}
          <strong>
            {currentPage + 1}
             {/* of {tableInstance.pageOptions.length} */}
         
          </strong>{' '}
        </div>
              <div className="space-x-2">
             
                {currentPage>0 ?  <button className="btn" onClick={(e)=>setCurrentPage(0)}>{" "}{"<<"}</button> :<button disabled></button>}

             {currentPage>0 ?  <button className="btn" onClick={(e)=>setCurrentPage(currentPage-1)}>{" "}{"<"}</button> :<button disabled></button>}
                <button className="btn" onClick={(e)=>setCurrentPage(currentPage+1)}>{" "}{">"}</button> 
         
         
              </div>
         
            </div>
          </div>
  </div>
  </div>
  )
}

export default EventsTableComponent