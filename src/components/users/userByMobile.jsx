import React, { useEffect, useState } from "react";

import { useUserQuery } from "../../utils/graphql";


const UserByMobile = ({mobile,fetchData}) => {

  const [user, setUser] = useState([]);
  const { data, loading, } = useUserQuery(
    {
      variables: { where: { mobile: String(mobile) } },
    },
    {
      enabled:false
    }
  );
 
  useEffect(() => {
    if (data && data.user) {
      const userArray = [Object.fromEntries(Object.entries(data.user))];
      setUser(userArray);
      fetchData(userArray)
    }
  }, [data]);




  if (loading) return <div>Loading....</div>;
  return (

    <div></div>
  );
};

export default UserByMobile;
