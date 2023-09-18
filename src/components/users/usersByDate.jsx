






import {  useUsersSearchQuery } from '../../utils/graphql';
import TabbleOfUsersOrUser from './tableData';


const UsersByDate = ({startDate,fetchData}) => {
  

   
    const{data,loading}=useUsersSearchQuery({variables:{where:{createdAt:{gte:startDate}}}})

 
   
    console.log(startDate,"state")

    if(loading)return<div>Loading....</div>
    if(data){
      fetchData(data?.users)
    }
  return (
   <div></div>
  )
}

export default UsersByDate