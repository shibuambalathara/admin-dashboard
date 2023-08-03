import {  useUsersSearchQuery } from '../../utils/graphql';
import TabbleOfUsersOrUser from './tabbleData';


const UsersByRole = ({role,fetchData}) => {

  


    const{data,loading}=useUsersSearchQuery({variables:{where:{role:{equals:role}}}})

   

    
    if(loading)return<div>Loading....</div>
    if(data){
      console.log(data?.users,"rolee")
      fetchData(data?.users)
    }
  return (
   <div></div>
  )
}

export default UsersByRole