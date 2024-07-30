const noteBox = document.querySelector(".notes-container");
const noteBtn = document.querySelector("button");

getNotes();

function createNote(){
   
    const note = document.createElement("p");
    const img = document.createElement("img");
    note.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    noteBox.appendChild(note).appendChild(img);
}

noteBox.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        console.log(e.target.tagName);
        e.target.parentElement.remove();
        saveLocally();
    }else if(e.target.tagName === "P"){
        
        document.querySelectorAll(".notes-container p").forEach(note => {
            
            console.log("jjjjjj");
            note.addEventListener("keydown", ()=>{
                saveLocally();
            })
        });
    }
})

function saveLocally(){
    console.log("saved");
    localStorage.setItem("notes", noteBox.innerHTML);
}

function getNotes(){
    console.log("yes");
    noteBox.innerHTML =  localStorage.getItem("notes");
}



noteBtn.addEventListener("click", () => {
    createNote();
});

