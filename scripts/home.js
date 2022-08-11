function removeMarkers() {
    let markers = map.childNodes;
    for (let elem of markers) {
        if (elem.classList.contains("marker")) {
            markers.remove(elem);
        }
    }
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

function tranX(x) {
    return 100 * (x / 1407);
}

function tranY(x) {
    return 100 * (x / 769);
}

loadBlocks();

map.onclick = () => {
    console.log("yes");
}