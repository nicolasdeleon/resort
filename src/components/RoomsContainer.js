import React from 'react'
import RoomFilter from './RoomFilter.js'
import RoomList from './RoomList.js'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context
    if (loading) {
        return <Loading/>
        }
        return(
        <div>
            hello Froms Rooms Container
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
        )
}



export default withRoomConsumer(RoomContainer)

// OTRA FORMA DE IMPLEMENTARLO :

// "import React from 'react'
// import RoomFilter from './RoomFilter.js'
// import RoomList from './RoomList.js'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//         {(value) => {
//             const {loading, sortedRooms, rooms} = value
//             if (loading) {
//                 return <Loading/>
//             }
//             return(
//                 <div>
//                     hello Froms Rooms Container
//                     <RoomFilter rooms={rooms}/>
//                     <RoomList rooms={sortedRooms}/>
//                 </div>
//             )
//         }}
//         </RoomConsumer>

//     )
// }
