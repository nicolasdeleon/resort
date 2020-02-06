import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };
    // get Data
    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room =>
            room.featured === true)
        this.setState({
            rooms, // ES6 override
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        })
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            // podria ser images:images pero como es ES6 overridea el solo poner images
            let room = { ...item.fields, images, id }
            return room
        })
        return tempItems
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {
    RoomProvider,
    RoomConsumer,
    RoomContext
};