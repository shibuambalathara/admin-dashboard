import SearchUser from "./searchUser";


const TableComponent = (tableInstance1,UsersLength) => {
console.log(UsersLength,"ull")
 

    const tableInstance = tableInstance1.tableData
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
    <div className="w-full   ">
    

    <div className=" max-w-7xl mx-auto h-fit">
      <div className=" flex flex-col justify-center m-auto w-full">
      {/* <div className="flex">
         
       
         { UsersLength && UsersLength.UsersLength>1 &&    <SearchUser
                filter={globalFilter}
                className="  text-white "
                setFilter={setGlobalFilter}
              />}
        
    
            </div>  */}
        <table  
          className="w-full  bg-white border-collapse border  border-1 border-gray-300  divide-y   text-gray-900"
          {...getTableProps()}

        >
          <thead className="bg-gray-50 relative ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="py-2 px-2  border  border-10 "
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
                        className="px-2 py-2 text-md  border  border-1 text-center border-gray-200"
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