
const LimitedDataPaginationComponents = ({ currentPage,  onPageChange }) => {
   


    return (
        <div className="flex justify-center">
          <div className="flex flex-col justify-between mt-4">
            <div className="flex justify-center">
              Page <strong>{currentPage + 1}</strong> 
            </div>
    
            <div className="space-x-2">
              <button
                className="btn"
                onClick={() => onPageChange(0)}
                disabled={currentPage === 0}
              >
                {"<<"}
              </button>
              <button
                className="btn"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
              >
                {"<"}
              </button>
              <button
                className="btn"
                onClick={() => onPageChange(currentPage + 1)}
          
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      );
    };


export default LimitedDataPaginationComponents