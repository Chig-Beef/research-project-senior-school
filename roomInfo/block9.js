function addBlock9() {
    //////// FLOOR ////////
    rid(createMarker(922, 258, 110, 190, 4.5)).onclick = () => {
        partInfo.textContent = "Block 9 upstairs is out of bounds, it is used for storage of musical equipment sometimes, nothing too interesting.";
    };

    //////// GROUND ////////

    // Art room
    createMarker(0, 0, 0, 0, 4.5).onclick = () => {
        partInfo.textContent = "This is the Senior School Art Room.";
    };

    // Couch area
    createMarker(0, 0, 0, 0, 4.5).onclick = () => {
        partInfo.textContent = "This area...";
    };

    // Toilets
    createMarker(0, 0, 0, 0, 4.5).onclick = () => {
        partInfo.textContent = "These are the Block 9 toilets.";
    };

    // Child room
    createMarker(0, 0, 0, 0, 4.5).onclick = () => {
        partInfo.textContent = "This is the...";
    };

    // Food room
    createMarker(0, 0, 0, 0, 4.5).onclick = () => {
        partInfo.textContent = "This is the food and hospitality room.";
    };
}