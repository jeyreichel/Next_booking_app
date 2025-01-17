import { type Room } from "@prisma/client";
import { type ChangeEvent } from "react";


type SelectRoomsProps = {
    rooms: undefined | Room[],
    setRoom: React.Dispatch<React.SetStateAction<RoomType>>
    setDate: React.Dispatch<React.SetStateAction<DateType>>
}

/**
 * SelectRooms component is meant to be used with Booking component. It selects the room. Any new selection will reset the date.
 */
export const SelectRooms: React.FC<SelectRoomsProps> = ({rooms, setRoom, setDate}) => {

    const handleRoomSelection = (e: ChangeEvent<HTMLSelectElement>) => {
        setRoom((prev) => ({ ...prev, roomId: e.target.value}));
        setDate((prev) => ({ ...prev, justDate: null, dateTime: null}));
    };

    return(
        <div>
            <select 
                className="select select-primary w-full max-w-xs mb-2" 
                defaultValue={"DEFAULT"}
                onChange={(e) => handleRoomSelection(e)}
            >
                <option disabled value="DEFAULT">Select room...</option>
                {rooms 
                    ? rooms.map(room => 
                    <option key={room.id} value={room.id}>{room.name}</option>)    
                    : null    
                }
            </select>
        </div>
    );
};
