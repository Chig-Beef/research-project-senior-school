function loadBlocks() {
    // block 1 done
    createMarker(499, 578, 396, 75, 4.5).onclick = () => {
        create_information(
            "block1.jpg",
            "This is block one.",
            "Block One"
            );
    };

    // block 2
    createMarker(632, 395, 261, 75, 4.5).onclick = () => {
        create_information(
            "block2.jpg",
            "This is block two.",
            "Block Two"
            );
    };

    // block 3 done
    createMarker(513, 184, 396, 75, 4.5).onclick = () => {
        create_information(
            "block3.jpg",
            "This is block three.",
            "Block Three"
            );
    };

    // block 4
    createMarker(298, 369, 180, 75, 4.5).onclick = () => {
        clear_info();
        partInfo.textContent = "This is the theatre. Assembly is held here every week in Thursday lesson 3.";
    };

    // block 9 done
    createMarker(922, 258, 110, 190, 4.5).onclick = () => {
        clear_info();
        partInfo.textContent = "This is block nine.";
    };
}

// Width: 1407
// Height: 769