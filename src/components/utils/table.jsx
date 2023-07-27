import SearchUser from "./search";


const TableComponent = ({tableData,UsersLength}) => {
console.log(tableData,"ull")
 

    const tableInstance = tableData
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
      setGlobalFilter,
    } = tableInstance;
  
    const { globalFilter } = state;

  return (
    <div className=" mx-1 shadow-xl  ">
    

    <div className="   h-fit">
      <div className=" flex flex-col justify-center ">
   
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
                        className="  font-normal px-1  border  border-1 text-center border-gray-200"
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


  
  
      </div>
    </div>
  </div>
 
  )
}

export default TableComponent