let tasksData = {};

const toDo = document.querySelector("#to-do");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const tasks = document.querySelectorAll(".task");
let taskElement = null;
let allColumn = [toDo, progress, done];

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    // console.log(e)
    taskElement = task;
  });
});

if (localStorage.getItem("tasks")) {
  const data = JSON.parse(localStorage.getItem("tasks"));

  for (const col in data) {
    const column = document.querySelector(`#${col}`);
    data[col].forEach((task) => {
      addNewTask(task.title, task.descr, column);
      // let div = document.createElement("div");
      // div.classList.add("task");
      // div.setAttribute("draggable", "true");
      // div.innerHTML = `
      // <h2>${task.title}</h2>
      // <p>${task.descr}</p>
      // <button>delete</button>
      // `;
      // column.appendChild(div);

      // div.addEventListener("drag", () => {
      //   taskElement = div;
      // });
    });
    updateCount();
  }
}

function addNewTask(task, desc, column) {
  let div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
  <h2>${task}</h2>
  <p>${desc}</p>
  <button>Delete</button>
  `;

  column.appendChild(div);
  div.addEventListener("drag", (e) => {
    taskElement = div;
  });
  // const deleteButton = document.querySelector("button"); ye glt hai cuz fir ab sbse pehla wala dhund ra hia joki hai add new ytask wala
  const deleteButton = div.querySelector("button");
  deleteButton.addEventListener("click",()=>{
    div.remove();
    updateCount()
  })
}

function updateCount() {
  allColumn.forEach((col) => {
    const tasks = col.querySelectorAll(".task");
    const count = col.querySelector(".right");
    count.innerText = tasks.length;

    tasksData[col.id] = Array.from(tasks).map((t) => {
      return {
        title: t.querySelector("h2").innerText,
        descr: t.querySelector("p").innerText,
      };
    });
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  });
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

    // allColumn.forEach((col) => {
    //   const tasks = col.querySelectorAll(".task");
    //   const count = col.querySelector(".right");
    //   count.innerText = tasks.length;

    //   tasksData[col.id] = Array.from(tasks).map((t) => {
    //     return {
    //       title: t.querySelector("h2").innerText,
    //       descr: t.querySelector("p").innerText,
    //     };
    //   });
    //   // console.log(tasksData)
    //   localStorage.setItem("tasks", JSON.stringify(tasksData));
    // });
    updateCount();
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

  document.querySelector("#text-title-content").value='';
  document.querySelector("#text-area-content").value=''


  addNewTask(taskTitle, textArea, toDo);
  // let div = document.createElement("div");

  // div.classList.add("task");
  // div.setAttribute("draggable", "true");

  // div.innerHTML = `
  //               <h2>${taskTitle}</h2>
  //               <p>${textArea}</p>
  //               <button>Delete</button>
  //               `;
  // toDo.appendChild(div);

  modal.classList.remove("active");

  allColumn.forEach((col) => {
    const tasks = col.querySelectorAll(".task"); // querySelectorAll list detio hai isliye sirf map sai kaam nahi chlta
    const count = col.querySelector(".right");
    count.innerText = tasks.length;

    tasksData[col.id] = Array.from(tasks).map((t) => {
      return {
        title: t.querySelector("h2").innerText,
        descr: t.querySelector("p").innerText,
      };
    });
    // console.log(tasksData)
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  });
});
