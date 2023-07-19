import React from 'react'

const PaginationComponents = ({tableData}) => {




    const tableInstance =tableData
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

  return (
    <div className="flex justify-center">
    <div className="flex flex-col justify-between mt-4 ">
    <div className="flex justify-center">
  Page{' '}
  <strong>
    {tablePageIndex + 1} of {tableInstance.pageOptions.length}
 
  </strong>{' '}
</div>
      <div className="space-x-2">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="btn "
        >
          {"<<"}
        </button>
       
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="btn"
        >
          {"<"}
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="btn"
        >
          {" "}
          {">"}
        </button>
        <button className="btn" onClick={() => gotoPage(pageCount - 1)}  disabled={!canNextPage}>
  {'>>'}
</button>{' '}
      </div>
 
    </div>
  </div>
  )
}

export default PaginationComponents
