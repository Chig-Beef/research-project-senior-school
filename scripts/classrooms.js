function removeMarkers() {
    const markers = map.querySelectorAll('.marker');

    markers.forEach(mark => {
        mark.remove();
    });
}

function addRoom() {
}

function create_information(image, text, name) {
    clear_info();

    let head = document.createElement("h2");
    head.textContent = name;
    partInfo.appendChild(head);

    let info = document.createElement("p");
    info.textContent = text;
    partInfo.appendChild(info);

    partInfo.appendChild(document.createElement("br"))

    let img = document.createElement("img");
    img.src = "images/rooms/" + image;
    img.classList.add("infoImage")

    partInfo.appendChild(img);
}

function createMarker(x, y, w, h, ang) {
    let marker = document.createElement("div");
    marker.classList.add("marker");
    marker.style.left = `${tranX(x)}%`;
    marker.style.top = `${tranY(y)}%`;
    marker.style.width = `${tranX(w)}%`;
    marker.style.height = `${tranY(h)}%`;
    marker.style.transform = `rotate(${ang}deg)`;
    map.appendChild(marker);
    return marker;
}

function clear_info() {
    partInfo.textContent = "";
}

function rid(marker) {
    marker.classList.add("noBounds");
    return marker;
}

function tranX(x) {
    return 100 * (x / 1407);
}

function tranY(y) {
    return 100 * (y / 769);
}

function loadBlocks() {
    // block 1 done
    createMarker(499, 578, 396, 75, 4.5).onclick = () => {
        create_information(
            "block1.jpg",
            "This is block one.",
            "Block One"
            );
        addBlock1();
    };

    // block 2
    createMarker(632, 395, 261, 75, 4.5).onclick = () => {
        create_information(
            "block2.jpg",
            "This is block two.",
            "Block Two"
            );
        addBlock2();
    };

    // block 3 done
    createMarker(513, 184, 396, 75, 4.5).onclick = () => {
        create_information(
            "block3.jpg",
            "This is block three.",
            "Block Three"
            );
        addBlock3();
    };

    // block 4
    createMarker(298, 369, 180, 75, 4.5).onclick = () => {
        clear_info();
        partInfo.textContent = "This is the theatre. Assembly is held here every week in Thursday lesson 3.";
        addBlock4();
    };

    // block 9 done
    createMarker(922, 258, 110, 190, 4.5).onclick = () => {
        clear_info();
        partInfo.textContent = "This is block nine.";
        addBlock9();
    };
}

// Width: 1407
// Height: 769

loadBlocks();