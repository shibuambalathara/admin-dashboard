


import {   useUsersSearchQuery } from '../../utils/graphql';



const UsersByState = ({state,fetchData}) => {

  
 
    const{data,loading}=useUsersSearchQuery({variables:{where:{state:{contains:state}}}})

   

    
    if(loading)return<div>Loading....</div>
    if(data){
      console.log(data,"based on state")
       fetchData(data?.users)

    }
  return (
  
    <div></div>
  )
}

export default UsersByState