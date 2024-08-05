let names = document.getElementById("name");
let content = document.getElementById("content");
let newsfeed = document.getElementById("newsfeed");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    let titlename = document.createElement("h3");
    let paragraph = document.createElement("p");
    let div = document.createElement("div");
    titlename.textContent = names.value
    paragraph.textContent = content.value;
    div.append(titlename, paragraph);
    newsfeed.append(div);
    names.value = "";
    content.value = "";

})



