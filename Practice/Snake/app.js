const board = document.querySelector(".board");
const menu = document.querySelector(".menu");
const start = document.querySelector("#forstart");
const homePage = document.querySelector(".start");
const restart = document.querySelector("#forrestart");
const loosePage = document.querySelector(".restart");

const scoreNum = document.querySelector("#score");
const highScoreNum = document.querySelector("#high-score");
const timerNum = document.querySelector("#time")

let score = 0;
let highScore = 0;
let timer = `00:00`;

const blockHeight = 40;
const blockWidth = 40;

const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);

const blocks = [];

let intervalId = null;
let timerId=null

let food = [
  { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) },
];

let snake = [{ x: 1, y: 1 }];
// loop
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
    // block.innerText = `${row}-${col}`;
  }
}
let direction = "right";
function snakeRender() {
  blocks[`${snake[0].x}-${snake[0].y}`].classList.add("fill");
  let head = null;

  if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  blocks[`${food[0].x}-${food[0].y}`].classList.add("food");
  if (head.x === food[0].x && head.y === food[0].y) {
    snake.unshift(head);
    blocks[`${food[0].x}-${food[0].y}`].classList.remove("food");
    food = [
      {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols),
      },
    ];
    score += 10;
    scoreNum.innerText = score;
  }
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill", "head");
  });
  if (head.x >= rows || head.y >= cols || head.x < 0 || head.y < 0) {
    // console.log("haa");
    clearInterval(intervalId);
    loose();
    return;
  }
  snake.unshift(head);
  snake.pop();
  snake.forEach((segment, indx) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    if (indx === 0) {
      blocks[`${segment.x}-${segment.y}`].classList.add("head");
    }
  });
  if(score>highScore){
    highScore = score;
    localStorage.setItem("highScore",highScore);
    highScoreNum.innerText = localStorage.getItem("highScore")
}
}

start.addEventListener("click", () => {
  menu.style.display = "none";
  intervalId = setInterval(() => {
    snakeRender();
  }, 300);
  timerId = setInterval(()=>{
 let [min,sec]=timer.split(":").map(Number)
    if(sec===59){
        min+=1;
        sec=0
    }else{
        sec+=1
    }
    timer=`${min}:${sec}`
    timerNum.innerText=timer
  },1000)
});

function loose() {
  menu.style.display = "flex";
  homePage.style.display = "none";
  loosePage.style.display = "flex";
  clearInterval(timerId);
  timer=`00:00`;
  timerNum.innerText=timer
}
restart.addEventListener("click", () => {
  menu.style.display = "none";
  score = 0;
  scoreNum.innerText= score
  snake = [{ x: 5, y: 5 }];
  blocks[`${food[0].x}-${food[0].y}`].classList.remove("food");

  food = [
    {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    },
  ];

  intervalId = setInterval(() => {
    snakeRender();
  }, 300);
  timerId = setInterval(() => {
  let [min, sec] = timer.split(":").map(Number);

  if (sec === 59) {
    min++;
    sec = 0;
  } else {
    sec++;
  }

  timer = `${min}:${sec}`;
  timerNum.innerText = timer;
}, 1000);
});
addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    direction = "up";
  } else if (event.key === "ArrowDown") {
    direction = "down";
  } else if (event.key === "ArrowLeft") {
    direction = "left";
  } else if (event.key === "ArrowRight") {
    direction = "right";
  }
});
