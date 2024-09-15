let lists = document.getElementsByClassName("list");
let box = document.getElementById("box");
let draggedItem = null;

for (let list of lists) {
  // Handle drag start
  list.addEventListener("dragstart", (e) => {
    draggedItem = list;
  });

  // Allow dropping over the box
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary to allow dropping
  });

  // Handle the drop
  box.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedItem) {
      // Get the element directly under the mouse pointer during the drop
      const dropTarget = document.elementFromPoint(e.clientX, e.clientY);

      // Insert the dragged item before the target if it's a list item, otherwise append it at the end
      if (dropTarget && dropTarget.classList.contains("list")) {
        box.insertBefore(draggedItem, dropTarget);
      } else {
        box.appendChild(draggedItem);
      }
    }
  });
}
