import { Button } from '@material-tailwind/react'
import React, { useMemo } from 'react'
import {useNavigate} from 'react-router-dom'
import { useTable,usePagination,useGlobalFilter } from "react-table"
import {useEventTableQuery} from '../../utils/graphql'
import SearchUser from '../users/searchUser'


const ViewLocationComponent = () => {
  // const column = useMemo(()=>, []);
  // const location = useMemo(()=>, []);

  const tableInstance = useTable({
   
  });
  //the below are basically arraays and functions from usetable hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                    {row.cells.map((cell)=>{
                        return  <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                    })}
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default ViewLocationComponent;
