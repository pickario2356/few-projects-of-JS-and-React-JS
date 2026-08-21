const board = document.querySelector(".board");
// clientWidth = Content + padding// offsetWidth = Content + padding + border + scrollbar// scrollWidth = Pura content, including woh part jo overflow hokar hidden/scrollable hai
const modal = document.querySelector(".modal");
const startButton = document.querySelector(".play");
const startModal = document.querySelector(".startgame");
const restartButton = document.querySelector(".restart");
const restartModal = document.querySelector(".gameover");

const highScoreElement = document.querySelector("#high-score");
const ScoreElement = document.querySelector("#score");
const timerElement = document.querySelector("#time");

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let timer = `00:00`;

const boxHeight = 40;
const boxWidth = 40;

const rows = Math.floor(board.clientHeight / boxHeight);
const cols = Math.floor(board.clientWidth / boxWidth);

let intervalId = null;
let timeInterval = null;

const blocks = []; // blocks = somethingElse; // ❌ Can't do this// blocks[0] = something;  // ✅ Can do this
let snake = [
  { x: 1, y: 1 },
  // {x:2,y:9},
  // {x:2,y:10}
];
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
let direction = "down";

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText=`${row}-${col}`
    blocks[`${row}-${col}`] = block; // (row=0, col=0): blocks["0-0"] = block → matlab blocks ke andar "0-0" naam ki ek key banayi, aur uski value woh div element rakh diya.
    // blocks = {"0-0": <div>0-0</div>,"0-1": <div>0-1</div>,"1-0": <div>1-0</div>,"1-1": <div>1-1</div>} like object/dictionary thing
  }
}
highScoreElement.innerText = highScore;

function renderSnake() {
  blocks[`${food.x}-${food.y}`].classList.add("food");

  let head = null;
  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    // head.x<0 hua toh top sai bahr, .y<0 hua toh left sa bahr .x>=rows hua mtlb niche sai bahr cuz 0 sai start hai to actual aane sai ek pehle hi bnmd hojayeg
    clearInterval(intervalId); // setinterval aur setTimeout dono ek unique id dete hai toh clearinterval uss specific id ko find krke bnd kr deta haui
    clearInterval(timeInterval);
    modal.style.display = "flex";
    startModal.style.display = "none";
    restartModal.style.display = "flex";
    return;
  }

  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.unshift(head);

    score += 10;
    ScoreElement.innerText = score;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      highScoreElement.innerText = highScore;
    }
  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });
  snake.unshift(head);
  snake.pop();

  snake.forEach((segment) => {
    // console.log(segment)
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}
startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    renderSnake();
  }, 300);
  timeInterval = setInterval(() => {
    let [min, sec] = timer.split(":").map(Number);
    if (sec === 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }
    timer = `${min}:${sec}`;
    timerElement.innerText = timer;
  }, 1000);
});
restartButton.addEventListener("click", restartGame);
function restartGame() {
  clearInterval(intervalId);
  modal.style.display = "none";

  // purana food remove
  blocks[`${food.x}-${food.y}`].classList.remove("food");

  // purana snake remove
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  // reset
  snake = [{ x: 1, y: 1 }];
  direction = "down";

  // new food
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  blocks[`${food.x}-${food.y}`].classList.add("food");

  score = 0;
  timer = `00:00`;
  ScoreElement.innerText = score;
  highScoreElement.innerText = highScore;
  timerElement.innerText = timer;

  intervalId = setInterval(() => {
    renderSnake();
  }, 300);
}
addEventListener("keydown", (element) => {
  // console.log(element.key)
  if (element.key === "ArrowUp") {
    direction = "up";
  } else if (element.key === "ArrowDown") {
    direction = "down";
  } else if (element.key === "ArrowLeft") {
    direction = "left";
  } else if (element.key === "ArrowRight") {
    direction = "right";
  }
});
