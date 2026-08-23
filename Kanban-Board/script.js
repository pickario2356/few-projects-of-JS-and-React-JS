const toDo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const tasks = document.querySelectorAll(".task");

let taskElement = null;
tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    // console.log(e)
    taskElement = task;
  });
});

function draggingTask(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });
  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("hover-over");
  });
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  column.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log(taskElement,column)
    
    column.appendChild(taskElement);
    column.classList.remove("hover-over")
  });
}
draggingTask(toDo);
draggingTask(progress);
draggingTask(done);
