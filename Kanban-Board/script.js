let tasksData = {}


const toDo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
let allColumn = [toDo, progress, done];

const tasks = document.querySelectorAll(".task");

let taskElement = null;
tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    // console.log(e)
    taskElement = task;
  });
});
if(localStorage.getItem("tasks")){
  const data = JSON.parse(localStorage.getItem('tasks'));
  

}
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
    // console.log(taskElement,column)

    column.appendChild(taskElement);
    column.classList.remove("hover-over");

    allColumn.forEach(col => {
      const tasks = col.querySelectorAll(".task");
      const count = col.querySelector(".right");

      count.innerText = tasks.length;
    });
  });
}
draggingTask(toDo);
draggingTask(progress);
draggingTask(done);

// modal Related
const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const bg = document.querySelector(".bg");
toggleModalButton.addEventListener("click", () => {
  modal.classList.toggle("active");
});
bg.addEventListener("click", () => {
  modal.classList.remove("active");
});
// modal

const addNewTaskButton = document.querySelector("#add-new-task");

addNewTaskButton.addEventListener("click", () => {
  const taskTitle = document.querySelector("#text-title-content").value;
  const textArea = document.querySelector("#text-area-content").value;

  let div = document.createElement("div");

  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
                <h2>${taskTitle}</h2>
                <p>${textArea}</p>
                <button>Delete</button>
                `;
  toDo.appendChild(div);
  modal.classList.remove("active");

  allColumn.forEach((col) => {
    const tasks = col.querySelectorAll(".task");// querySelectorAll list detio hai isliye sirf map sai kaam nahi chlta 
    const count = col.querySelector(".right");
    count.innerText = tasks.length;

    tasksData[col.id]=Array.from(tasks).map(t=>{
      return{
       title:t.querySelector("h2"),
       descr:t.querySelector("p")
      }
    })
    // console.log(tasksData)
    localStorage.setItem("tasks",JSON.stringify(tasksData))
  }); 

  div.addEventListener("drag", () => {
    taskElement = div;
  });
});
