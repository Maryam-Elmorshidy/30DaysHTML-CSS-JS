// console.log("hi");
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();
const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let note = `<p class="input-box" contenteditable="true">
          <img src="./images/delete.png" alt="delete" />
        </p>`;
  notesContainer.innerHTML += note;
});
// createBtn.addEventListener("click", () => {
//     let inputBox = document .createElement("p")
//     let img = document.createElement("img")
//     inputBox.className= "input-box"
//     inputBox.setAttribute("contenteditable" , "true")
//     img.src="./images/delete.png"
//     notesContainer.appendChild(inputBox).appendChild(img)
//   });

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      // note.onkeyup =: This assigns an event
      // listener to the keyup event of the note
      // (which is an individual element). The
      // keyup event happens when the user lifts
      // their finger off any key on the keyboard.
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
