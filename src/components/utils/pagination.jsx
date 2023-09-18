import React from 'react'

const PaginationComponents = (paginationData) => {

const {nextPage,gotoPage,canPreviousPage,previousPage,pageCount,canNextPage}=paginationData

    

  return (
    <div className="flex justify-center">
    <div className="flex flex-col justify-between mt-4 ">
    <div className="flex justify-center">
 total Page {pageCount}
  <strong>
    {/* {tablePageIndex + 1} of {tableData.pageOptions.length} Total Rows: {tableData.preSortedRows.length} */}
 
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
