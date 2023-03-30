import { Button } from "@material-tailwind/react";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import { useEventTableQuery } from "../../utils/graphql";
import SearchUser from "../users/searchUser";
import { useStatesQuery } from "../../utils/graphql";  

const Table = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const { data, loading, error } = useStatesQuery();

  console.log("this is from seller table $$",data);

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Events", accessor: "events" },
      { Header: "Banned Sellers", accessor: (row) => row.state.name },
    ],
    []
  );


  return (
    <div>ghhdhf</div>
  )
}

export default Table