import { useEffect, useState } from "react";
import SearchByNumber from "../components/utils/searchByNumber";
import {
  OrderDirection,
  useUserQuery,
  useUsersQuery,
  useUsersSearchLazyQuery,
 
} from "../utils/graphql";
import TabbleOfUsersOrUser from "../components/users/tableData";
import SearchByDate from "../components/utils/SearchByDate";
import SeachByRole from "../components/utils/seachByRole";
import SearchByState from "../components/utils/searchByState";
import { useNavigate } from "react-router-dom";
import LimitedDataPaginationComponents from "../components/utils/limitedDataPagination";
import SearchByToken from "../components/utils/searchByToken";

const Users = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [inputData, setInputData] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dealerRole, setDealerRole] = useState();
  const [state, setState] = useState('');
  const [token, setToken] = useState(0);

  const [lastQueryType, setLastQueryType] = useState<
    "number" | "date" | "role" | "state" | "all"|"token"
  >("all");

  const [users, setUsers] = useState<any[]>([]);

  const {
    data: allUsers,
    
    refetch: refetchAll,
  } = useUsersQuery({
    variables: {
      skip: currentPage * pageSize,
      take: pageSize,
      orderBy: [{ idNo: OrderDirection.Desc }],
    },
  });

  const { data: userData, refetch: refetchMobile,loading:usersLoading } = useUserQuery({
    variables: { where: { mobile: String(inputData) } },
  });

  const [fetchByDate,{ data: byDateData, refetch: refetchByDateData,loading:startDateLoading }] = useUsersSearchLazyQuery({
    variables: { where: { createdAt: { gte: startDate } } },
  });

  const [fetchByRole,{ data: userRole, refetch: refetchUserRole,loading:roleLoading }] = useUsersSearchLazyQuery({
    variables: { where: { role: { equals: dealerRole } } },
  });
  const [fetchStateData, { data: stateData, refetch: refetchStateData,loading:stateLoading }] = useUsersSearchLazyQuery({
    variables: { where: { state: { equals: state } } },
  });
  const [fetchByToken,{ data: tokenData, refetch: refetchToken,loading:tokenLoading }] = useUsersSearchLazyQuery({
    variables: { where: { tempToken: { equals: token } } },
  });

  const refetchAllData = () => {
    switch (lastQueryType) {
      case "all":
        refetchAll();
        break;
      case "date":
        refetchByDateData();
        break;
      case "number":
        refetchMobile();
        break;
      case "role":
        refetchUserRole();
        break;
      case "state":
        refetchStateData();
        break;
        case "token":
          refetchToken();
          break;
    }
  };
  useEffect(() => {
    let fetchedUsers: any[] | undefined;
    switch (lastQueryType) {
      case "all":
        fetchedUsers = allUsers?.users || [];
        break;
      case "number":
        fetchedUsers = userData?.user ? [userData.user] : [];
        break;
      case "date":
        fetchedUsers = byDateData?.users || [];
        break;
      case "role":
        fetchedUsers = userRole?.users || [];
        break;
      case "state":
        fetchedUsers = stateData?.users || [];
        break;
        case "token":
        fetchedUsers = tokenData?.users || [];
        break;
      default:
        fetchedUsers = [];
    }
    setUsers(fetchedUsers);
  }, [lastQueryType, allUsers, userData, byDateData,stateData, userRole,tokenData]);

  const handleInputData = (data: any) => {
    setInputData(data);
    setLastQueryType("number");
  };

  const handleInputDate = (data: any) => {
    fetchByDate()
    setStartDate(data);
    setLastQueryType("date");
  };

  const handleInputRole = (data: any) => {
    fetchByRole()
    setDealerRole(data);
    setLastQueryType("role");
  };

  const handleInputState = (data:string ) => {
    fetchStateData()
    setState(data);
    setLastQueryType("state");
  };
  const handleToken = (data: number) => {
    fetchByToken()
    setToken(data);
    setLastQueryType("token");
  };
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };
  if(stateLoading ||roleLoading|| usersLoading ||tokenLoading||startDateLoading)
   return <div className="loading ">Loading... </div>
   
  

  return (
    <div className="w-full">
      <div className=" w-full ">
        <div className="text-end">
          <button
            onClick={() => navigate("/add-user")}
            className="mt-5  w-fit  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add User
          </button>
        </div>
        <div className="text-center font-extrabold mb-1  text-2xl w-full">
          {" "}
          Users Data Table{" "}
        </div>
      </div>
      <div className="md:flex my-2 justify-evenly M-5 shadow-xl">
        <SearchByNumber inputData={handleInputData} />
        <SearchByDate setDate={handleInputDate} />
        <SeachByRole setRole={handleInputRole} />
        <SearchByState setState={handleInputState} />
        <SearchByToken setToken={handleToken}/>
      </div>
      <div>
        <TabbleOfUsersOrUser users={users} refetch={refetchAllData} />
        {lastQueryType === "all" && (
          <LimitedDataPaginationComponents
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
