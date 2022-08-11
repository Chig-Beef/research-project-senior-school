function loadTeachers() {
    for (let teach of teachers) {
        let new_div = document.createElement("div");
        new_div.classList.add("section");
        new_div.classList.add("teacher");

        let img = document.createElement("img");
        img.src = teach["Image"];
        img.classList.add("teacherImage");
        new_div.appendChild(img);

        let name = document.createElement("h2");
        name.textContent = teach["Name"];
        new_div.appendChild(name);

        let subjectTitle = document.createElement("h3");
        subjectTitle.textContent = "Subjects";
        new_div.appendChild(subjectTitle);

        let subjectList = document.createElement("ul");

        for (let sub of teach["Subjects"]) {
            let subject = document.createElement("li");
            subject.textContent = sub["Name"] + ", year(s) " + sub["Year"];
            subjectList.appendChild(subject);
        }
        new_div.appendChild(subjectList);

        let officeTitle = document.createElement("h3");
        officeTitle.textContent = "Office";
        new_div.appendChild(officeTitle);

        let officeLocation = document.createElement("p");
        officeLocation.textContent = "Office is in " + teach["Office"];
        new_div.appendChild(officeLocation);

        if (teach["Likes"] != "") {
            let likesTitle = document.createElement("h3");
            likesTitle.textContent = "Likes";
            new_div.appendChild(likesTitle);

            let likes = document.createElement("p");
            likes.textContent = teach["Likes"];
            new_div.appendChild(likes);
        }

        if (teach["Dislikes"] != "") {
            let dislikesTitle = document.createElement("h3");
            dislikesTitle.textContent = "Dislikes";
            new_div.appendChild(dislikesTitle);

            let dislikes = document.createElement("p");
            dislikes.textContent = teach["Dislikes"];
            new_div.appendChild(dislikes);
        }

        if (teach["Info"] != "") {
            let otherTitle = document.createElement("h3");
            otherTitle.textContent = "Other information";
            new_div.appendChild(otherTitle);

            let otherInfo = document.createElement("p");
            otherInfo.textContent = teach["Info"];
            new_div.appendChild(otherInfo);
        }
        
        mainSection.appendChild(new_div);
    }
}

loadTeachers();