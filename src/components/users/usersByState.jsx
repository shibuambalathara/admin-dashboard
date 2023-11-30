


import {   useUsersSearchQuery } from '../../utils/graphql';



const UsersByState = ({state,fetchData}) => {

  
 
    const{data,loading}=useUsersSearchQuery({variables:{where:{state:{contains:state}}}})

   

    
    if(loading)return<div>Loading....</div>
    if(data){
       fetchData(data?.users)

    }
  return (
  
    <div></div>
  )
}

export default UsersByState