import React from 'react'
import { useParams } from 'react-router-dom'
import { useUsersSearchQuery } from '../utils/graphql'
import TabbleOfUsersOrUser from '../components/users/tableData'

const ViewUsersByState = () => {
    const {id}=useParams()
    console.log("id",id)
    const {data:dataByState,loading,refetch}=useUsersSearchQuery({variables:{where:{states:{some:{id:{equals:id}}}
}}})
if(loading){
    return(<div>Loading....</div>)
}
console.log("dataByState",dataByState)

  return (
    <div className='w-full'>
              {dataByState  && <TabbleOfUsersOrUser users={dataByState?.users}  />}

    </div>
  )
}

export default ViewUsersByState