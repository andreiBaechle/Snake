/*
@author
Andrei Baechle
*/

var timer;
var direction = 0;
var temp = { x: 0, y: 300 };
var snake = [temp];

// 0 = right, 1 = up, 2 = left, 3 = down
function startStop() {
  if (document.getElementById("btnSS").value == "Start" && direction != null) {
    document.getElementById("btnSS").value = "Stop";
    timer = setInterval(function() { run(); } , 20);
  }
  else {
    document.getElementById("btnSS").value = "Start";
    clearInterval(timer);
  }
}

function turnLeft() {
  if (direction == 3) {
    direction = 0;
  }
  else if (direction != null) {
    direction++;
  }
}

function turnRight() {
  if (direction == 0) {
    direction = 3;
  }
  else if(direction != null){
    direction--;

  }
}

function run() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(snake.slice(-1)[0].x, snake.slice(-1)[0].y, 4, 4);
  //right
  if (direction == 0 && temp.x < canvas.width){
    temp = { x: snake[snake.length-1].x + 4 , y: snake[snake.length-1].y};
  }
  //up
  if (direction == 1 && temp.y > 0){
    temp = { x: snake[snake.length-1].x , y: snake[snake.length-1].y - 4};
  }
  //left
  if (direction == 2 && temp.x > 0){
    temp = { x: snake[snake.length-1].x - 4, y: snake[snake.length-1].y};
  }
  //down 
  if (direction == 3 && temp.y < canvas.height){
    temp = { x: snake[snake.length-1].x , y: snake[snake.length-1].y + 4};
  }

  if (snake.includes(temp) ){
    direction = null;
    startStop();
  }
  snake.push(temp);

}