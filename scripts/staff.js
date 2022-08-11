function loadStaff() {
    for (let per of staff) {
        let new_div = document.createElement("div");
        new_div.classList.add("section");
        new_div.classList.add("staff");

        let img = document.createElement("img");
        img.src = per["Image"];
        img.classList.add("staffImage");
        new_div.appendChild(img);

        let name = document.createElement("h2");
        name.textContent = per["Name"];
        new_div.appendChild(name);

        let subjectTitle = document.createElement("h3");
        subjectTitle.textContent = "Job at school";
        new_div.appendChild(subjectTitle);

        let job = document.createElement("p");
        job.textContent = per["Job"];
        new_div.appendChild(job);

        let officeTitle = document.createElement("h3");
        officeTitle.textContent = "Office";
        new_div.appendChild(officeTitle);

        let officeLocation = document.createElement("p");
        officeLocation.textContent = "Office is in " + per["Office"];
        new_div.appendChild(officeLocation);

        if (per["Likes"] != "") {
            let likesTitle = document.createElement("h3");
            likesTitle.textContent = "Likes";
            new_div.appendChild(likesTitle);

            let likes = document.createElement("p");
            likes.textContent = per["Likes"];
            new_div.appendChild(likes);
        }

        if (per["Dislikes"] != "") {
            let dislikesTitle = document.createElement("h3");
            dislikesTitle.textContent = "Dislikes";
            new_div.appendChild(dislikesTitle);

            let dislikes = document.createElement("p");
            dislikes.textContent = per["Dislikes"];
            new_div.appendChild(dislikes);
        }

        if (per["Info"] != "") {
            let otherTitle = document.createElement("h3");
            otherTitle.textContent = "Other information";
            new_div.appendChild(otherTitle);

            let otherInfo = document.createElement("p");
            otherInfo.textContent = per["Info"];
            new_div.appendChild(otherInfo);
        }

        mainSection.appendChild(new_div);
    }
}

loadStaff();