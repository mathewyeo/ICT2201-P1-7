

let ctx;
let canvas;
let maze;
let mazeHeight;
let mazeWidth;
let car;
var carImage;


function startGame() {

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  car = new Car();
  carImage = new component(21, 21, "car.png", 0, 0, "image");

  maze = new Maze(15, 15, 25);

  document.addEventListener('keydown', keyDown);
  document.addEventListener('keyup', keyUp);

  maze.generate();
}

class Car {

  constructor() {
    this.init();
    console.log("car init")
  }


  init() {
    this.col = 0;
    this.row = 0;
  }

}



class MazeBorders {

  constructor(col, row) {
    this.col = col;
    this.row = row;

    this.rightBorder = true;
    this.topBorder = true;
    this.btmBorder = true;
    this.leftBorder = true;

    this.visited = false;
  }

}

class Maze {

  constructor(cols, rows, cellSize) {

    this.backgroundColor = "#ffffff";
    this.cols = cols;
    this.goalColor = "#FFFF00";
    this.mazeColor = "#000000";
    this.carColor = "#00449d";
    this.trailColor = "#2980B9"
    this.rows = rows;
    this.cellSize = cellSize;

    this.cells = [];

    this.obmax = (this.cols - 1)
    this.half = (this.cols - 1)/2
    this.obCol1 = this.getRandomInt(1, this.half) * this.cellSize + 2
    this.obRow1 = this.getRandomInt(1, this.obmax) * this.cellSize + 2
    this.obCol2 = this.getRandomInt(this.half, this.obmax-1) * this.cellSize + 2
    this.obRow2 = this.getRandomInt(1, this.obmax-1) * this.cellSize + 2
    

    this.generate()

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generate() {

    mazeHeight = this.rows * this.cellSize;
    mazeWidth = this.cols * this.cellSize;
    canvas.height = mazeHeight;
    canvas.width = mazeWidth;
    canvas.style.height = mazeHeight;
    canvas.style.width = mazeWidth;

    

    for (let col = 0; col < this.cols; col++) {
      this.cells[col] = [];
      for (let row = 0; row < this.rows; row++) {
        this.cells[col][row] = new MazeBorders(col, row);
      }
    }

    let rndCol = Math.floor(Math.random() * this.cols);
    let rndRow = Math.floor(Math.random() * this.rows);

    let stack = [];
    stack.push(this.cells[rndCol][rndRow]);

    let currCell;
    let dir;
    let foundNeighbor;
    let nextCell;

    while (this.hasUnvisited(this.cells)) {
      currCell = stack[stack.length - 1];
      currCell.visited = true;
      if (this.hasUnvisitedNeighbor(currCell)) {
        nextCell = null;
        foundNeighbor = false;
        do {
          dir = Math.floor(Math.random() * 4);
          switch (dir) {
            case 0:
              if (currCell.col !== (this.cols - 1) && !this.cells[currCell.col + 1][currCell.row].visited) {
                currCell.rightBorder = false;
                nextCell = this.cells[currCell.col + 1][currCell.row];
                nextCell.leftBorder = false;
                foundNeighbor = true;
              }
              break;
            case 1:
              if (currCell.row !== 0 && !this.cells[currCell.col][currCell.row - 1].visited) {
                currCell.topBorder = false;
                nextCell = this.cells[currCell.col][currCell.row - 1];
                nextCell.btmBorder = false;
                foundNeighbor = true;
              }
              break;
            case 2:
              if (currCell.row !== (this.rows - 1) && !this.cells[currCell.col][currCell.row + 1].visited) {
                currCell.btmBorder = false;
                nextCell = this.cells[currCell.col][currCell.row + 1];
                nextCell.topBorder = false;
                foundNeighbor = true;
              }
              break;
            case 3:
              if (currCell.col !== 0 && !this.cells[currCell.col - 1][currCell.row].visited) {
                currCell.leftBorder = false;
                nextCell = this.cells[currCell.col - 1][currCell.row];
                nextCell.rightBorder = false;
                foundNeighbor = true;
              }
              break;
          }
          if (foundNeighbor) {
            stack.push(nextCell);
          }
        } while (!foundNeighbor)
      } else {
        currCell = stack.pop();
      }
    }

    this.draw();

  }

  hasUnvisited() {
    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        if (!this.cells[col][row].visited) {
          return true;
        }
      }
    }
    return false;
  }

  hasUnvisitedNeighbor(mazeCell) {
    return ((mazeCell.col !== 0               && !this.cells[mazeCell.col - 1][mazeCell.row].visited) ||
            (mazeCell.col !== (this.cols - 1) && !this.cells[mazeCell.col + 1][mazeCell.row].visited) ||
            (mazeCell.row !== 0               && !this.cells[mazeCell.col][mazeCell.row - 1].visited) ||
            (mazeCell.row !== (this.rows - 1) && !this.cells[mazeCell.col][mazeCell.row + 1].visited));
  }

  draw() {

    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0, 0, mazeHeight, mazeWidth);

    ctx.fillStyle = this.goalColor;
    ctx.fillRect((this.cols - 1) * this.cellSize, (this.rows - 1) * this.cellSize, this.cellSize, this.cellSize);

    drawObstacle(21, 21, this.obCol1, this.obRow1);
    drawObstacle(21, 21, this.obCol2, this.obRow2);


    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        if (this.cells[col][row].rightBorder) {
          ctx.beginPath();
          ctx.moveTo((col + 1) * this.cellSize, row * this.cellSize);
          ctx.lineWidth = 3;
          ctx.lineTo((col + 1) * this.cellSize, (row + 1) * this.cellSize);
          ctx.stroke();
        }
        if (this.cells[col][row].topBorder) {
          ctx.beginPath();
          ctx.moveTo(col * this.cellSize, row * this.cellSize);
          ctx.lineWidth = 3;
          ctx.lineTo((col + 1) * this.cellSize, row * this.cellSize);
          ctx.stroke();
        }
        if (this.cells[col][row].btmBorder) {
          ctx.beginPath();
          ctx.moveTo(col * this.cellSize, (row + 1) * this.cellSize);
          ctx.lineWidth = 3;
          ctx.lineTo((col + 1) * this.cellSize, (row + 1) * this.cellSize);
          ctx.stroke();
        }
        if (this.cells[col][row].leftBorder) {
          ctx.beginPath();
          ctx.moveTo(col * this.cellSize, row * this.cellSize);
          ctx.lineWidth = 3;
          ctx.lineTo(col * this.cellSize, (row + 1) * this.cellSize);
          ctx.stroke();
        }
      }
    }
    
    carImage.newPos(car.col, car.row);
    carImage.update((car.col * this.cellSize) + 2, (car.row * this.cellSize) + 2);

  }



}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = document.getElementById("car-right");
    }
    this.width = width;
    this.height = height; 
    car.col = 0;
    car.row = 0;
    this.x = x;
    this.y = y;    
    this.update = function(Xpos, Ypos) {

        if (type == "image") {
            ctx.drawImage(
                this.image, 
                Xpos,
                Ypos,
                this.width,
                this.height
                );
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(Xpos, Ypos, this.width, this.height);
        }
    }
    this.newPos = function(Xpos, Ypos) {
        this.x += Xpos
        this.y += Ypos    
    }
}


function drawObstacle(width, height, x, y) {
    this.image = document.getElementById("stop-img");
    this.width = width;
    this.height = height; 
    this.x = x;
    this.y = y;    
    ctx.drawImage(
      this.image, 
      this.x,
      this.y,
      this.width,
      this.height
      );
    }


function keyDown(event) {
  switch (event.keyCode) {
    case 37: // Left arrow pressed
    case 65: // A key pressed
      if (carImage.type == "image") {carImage.image.src = "car left.png";}
      if (!maze.cells[car.col][car.row].leftBorder 
          && !((car.col-1)* maze.cellSize + 2 == maze.obCol1 && (car.row  )* maze.cellSize + 2 == maze.obRow1)
          && !((car.col-1)* maze.cellSize + 2 == maze.obCol2 && (car.row  )* maze.cellSize + 2 == maze.obRow2)
          ) {
        car.col -= 1;
        updateSpeed("down");
      }
      break;

    case 39: // Right arrow pressed
    case 68: // D key pressed
      if (carImage.type == "image") {carImage.image.src = "car.png";}

      if (!maze.cells[car.col][car.row].rightBorder 
          && !((car.col+1)* maze.cellSize + 2 == maze.obCol1 && (car.row  )* maze.cellSize + 2 == maze.obRow1)
          && !((car.col+1)* maze.cellSize + 2 == maze.obCol2 && (car.row  )* maze.cellSize + 2 == maze.obRow2)
          ) {
        car.col += 1;
        updateSpeed("down");
      }
      break;

    case 40: // Down arrow pressed
    case 83: // S key pressed
      if (carImage.type == "image") {carImage.image.src = "car down.png";}
      if (!maze.cells[car.col][car.row].btmBorder 
          && !((car.col  )* maze.cellSize + 2 == maze.obCol1 && (car.row+1)* maze.cellSize + 2 == maze.obRow1)
          && !((car.col  )* maze.cellSize + 2 == maze.obCol2 && (car.row+1)* maze.cellSize + 2 == maze.obRow2)
          ) {
        car.row += 1;
        updateSpeed("down");
      }
      break;

    case 38: // Up arrow pressed
    case 87: // W key pressed
      if (carImage.type == "image") {carImage.image.src = "car up.png";}
      if (!maze.cells[car.col][car.row].topBorder 
          && !((car.col  )* maze.cellSize + 2 == maze.obCol1 && (car.row-1)* maze.cellSize + 2 == maze.obRow1)
          && !((car.col  )* maze.cellSize + 2 == maze.obCol2 && (car.row-1)* maze.cellSize + 2 == maze.obRow2) 
          ){
        car.row -= 1;
        updateSpeed("down");
      }
      break;
    default:
      break;
  }
  maze.draw();
}

function keyUp() {
  updateSpeed("up");
}


function buttonClick(event) {
  switch (event) {
    case 'left':
      if (carImage.type == "image") {carImage.image.src = "car left.png";}
      if (!maze.cells[car.col][car.row].leftBorder
          && !((car.col-1)* maze.cellSize + 2 == maze.obCol1 && (car.row  )* maze.cellSize + 2 == maze.obRow1)
          && !((car.col-1)* maze.cellSize + 2 == maze.obCol2 && (car.row  )* maze.cellSize + 2 == maze.obRow2)
          ) {
        car.col -= 1;
        updateSpeed("down");
      }
      break;

    case 'right':
      if (carImage.type == "image") {carImage.image.src = "car.png";}
      if (!maze.cells[car.col][car.row].rightBorder
          && !((car.col+1)* maze.cellSize + 2 == maze.obCol1 && (car.row  )* maze.cellSize + 2 == maze.obRow1)
          && !((car.col+1)* maze.cellSize + 2 == maze.obCol2 && (car.row  )* maze.cellSize + 2 == maze.obRow2)
          ) {
        car.col += 1;
        updateSpeed("down");
      }
      break;

    case 'down':
      if (carImage.type == "image") {carImage.image.src = "car down.png";}
      if (!maze.cells[car.col][car.row].btmBorder
          && !((car.col  )* maze.cellSize + 2 == maze.obCol1 && (car.row+1)* maze.cellSize + 2 == maze.obRow1)
          && !((car.col  )* maze.cellSize + 2 == maze.obCol2 && (car.row+1)* maze.cellSize + 2 == maze.obRow2)
          ) {
        car.row += 1;
        updateSpeed("down");
      }

      break;

    case 'up':
      if (carImage.type == "image") {carImage.image.src = "car up.png";}
      if (!maze.cells[car.col][car.row].topBorder
          && !((car.col  )* maze.cellSize + 2 == maze.obCol1 && (car.row-1)* maze.cellSize + 2 == maze.obRow1)
          && !((car.col  )* maze.cellSize + 2 == maze.obCol2 && (car.row-1)* maze.cellSize + 2 == maze.obRow2) 
          ) {
        car.row -= 1;
        updateSpeed("down");
      }
      break;
    default:
      break;
  }
  maze.draw();

}


function updateSpeed(event) {
    if (event == "down") {
      var speed = "5" + " km/h"
      document.getElementById("speed-tag").innerHTML = speed;
  }

    else if (event == "up") {
      var speed = "0" + " km/h"
      document.getElementById("speed-tag").innerHTML = speed;
    }
}




