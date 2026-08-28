let taskData = {};

const todo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

let taskElement = null;
const allColumn = [todo, progress, done];

const modal = document.querySelector(".modal");
const bg = document.querySelector(".bg");
const addNewTaskButton = document.querySelector("#toggle-modal");

const addTaskButton = document.querySelector("#add-new-task");

const savedData = localStorage.getItem("tasks");
if (savedData) {
  const usefullData = JSON.parse(savedData);

  for (const column in usefullData) {
    const TaskArray = usefullData[column];
    const columnElement = document.querySelector("#" + column);

    TaskArray.forEach((e) => {
      createTask(e.title, e.content, columnElement);
    });
  }
}
function createTask(title, content, column) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.setAttribute("draggable", "true");
  task.innerHTML = `
  <h2>${title}</h2>
  <p>${content}</p>
  <div class="edit">
    <i class="fa-solid fa-pen"></i>
    <button>Delete</button>
</div>
  `;
  task.addEventListener("drag", () => {
    taskElement = task;
  });
  column.appendChild(task);
  const edit = task.querySelector("i");

  edit.addEventListener("click", () => {
    const editable = task.querySelectorAll("h2,p");
    editable.forEach((data) => {
      data.setAttribute("contenteditable", "true");

      data.addEventListener("blur", () => {
        const editable = task.querySelectorAll("h2,p");
        editable.forEach((data) => {
          data.setAttribute("contenteditable", "false");
          updateCount();
        });
      });
    });
  });

  const removeTask = task.querySelector("button");
  removeTask.addEventListener("click", () => {
    task.remove();
    updateCount();
  });
}
updateCount();
function updateCount() {
  // console.log("ok")

  allColumn.forEach((col) => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");
    count.innerText = tasks.length;

    const allTasks = Array.from(col.querySelectorAll(".task"));
    taskData[col.id] = allTasks.map((task) => {
      return {
        title: task.querySelector("h2").innerText,
        content: task.querySelector("p").innerText,
      };
    });
    // console.log(taskData)
  });
  localStorage.setItem("tasks", JSON.stringify(taskData));
}

addNewTaskButton.addEventListener("click", () => {
  modal.classList.add("active");
});
bg.addEventListener("click", () => {
  modal.classList.remove("active");
});

addTaskButton.addEventListener("click", () => {
  //   console.log("yellpo");
  const taskTitle = document.querySelector("#text-title-content").value;
  const taskcontent = document.querySelector("#text-area-content").value;

  createTask(taskTitle, taskcontent, todo);
  modal.classList.remove("active");

  document.querySelector("#text-title-content").value = "";
  document.querySelector("#text-area-content").value = "";
  updateCount();
});

function draggingSystem(column) {
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
    column.appendChild(taskElement);
    column.classList.remove("hover-over");

    updateCount();
  });
}
draggingSystem(todo);
draggingSystem(progress);
draggingSystem(done);
