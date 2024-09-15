let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected = null;
for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    // console.log(e);
    selected = e.target;
    // console.log(selected);

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", (e) => {
      if (selected) {
        rightBox.appendChild(selected);
        selected = null;
      }
    });
    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", (e) => {
      if (selected) {
        leftBox.appendChild(selected);
        selected = null;
      }
    });
  });
}
