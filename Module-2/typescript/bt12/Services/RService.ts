export interface RService<T> {
    addRoom(room: T);
    displayRooms();
    updateRoomById(roomId: number, updatedRoom: T);
    displayAvailableRooms();
    getRoomById(roomId: number)
    searchRoomsByPrice(minPrice: number, maxPrice: number)
}
