import SearchUser from "./search";
import { useTable,useSortBy,usePagination,useGlobalFilter } from "react-table"
import PaginationComponent from "../utils/pagination";
import { ConvertToExcel } from "./excelFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const TableComponent = ({tableData,columns,sortBy}) => {



    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      pageIndex,
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
      state: { pageIndex: tablePageIndex, pageSize: tablePageSize, },
      state,
      setGlobalFilter,
    } =useTable(
      {
        columns,
        data: tableData,
        initialState: {
          sortBy: [
            {
              id: sortBy, 
              desc: true,
            },
          ],
        },
      },
      useGlobalFilter, // Add useGlobalFilter here
      useSortBy,
      usePagination
    );
    const { globalFilter, } = state;
    const paginationProps = {
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      pageCount,
      gotoPage,
      pageIndex,
      tablePageIndex
    };

  return (
    <div className=" mx-1 shadow-xl  ">
    

    <div className="   h-fit">
      <div className=" flex flex-col justify-center ">
        <div className="flex">
      <SearchUser filter={globalFilter} className="  text-white bg-red-200" setFilter={setGlobalFilter}/>
      <p className="font-bold">Count:<span>{tableData?.length}</span></p><span className="text-red-500">  <button onClick={()=>ConvertToExcel(tableData)}> <FontAwesomeIcon icon={faFileArrowDown} size="xl"/></button></span>
      </div>
        <table  
          className="w-full  bg-white border-collapse border  border-1 border-gray-300  divide-y   text-gray-900"
          {...getTableProps()}

        >
          <thead className="bg-yellow-500 relative text-black text-xs ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="h-8 font-serif border  border-10 "
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
          <tbody
            className="divide-y divide-gray-200"
            {...getTableBodyProps()}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="  font-normal p-1  border  border-1 text-center border-gray-200"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        { tableData && tableData.length>10 && <PaginationComponent {...paginationProps}/> }

  
  
      </div>
    </div>
  </div>
 
  )
}

export default TableComponent