import React from 'react';
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomsList';

export default function RoomsContainer() {
    return (
        <div>
            Hello From Rooms Container
            <RoomsFilter/>
            <RoomsList/>
        </div>
    )
}
