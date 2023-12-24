// 2-D Array Demo - Grid Colouring
// Asir Ratnani
// October 22, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 50;
let cols = 50;
let grid;
let cellSize;


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }

  cellSize =  width / cols;
  grid = create2dArray(cols, rows);
  stroke(125);
}

function draw() {
  background(255);
  displayGrid();
  if (keyIsPressed){
    if (key === " ") {
      update();
    }
  }

}

function keyPressed() {
  if (key === "r") {
    grid = create2dArray(cols,rows);
  }
  else if (key === "o") {
    update();
  }

  else if (key === "c") {
    resetGrid();
  }
}

function update() {
  //need second 2-d array, so you don't mess up the first one
  let nextTurn = [];
  for (let i = 0; i < rows; i++) {
    nextTurn[i] = [];
  }


  //Loop through the grid
  for (let y = 0; y < rows; y++) {
    for (let x= 0; x < cols; x++) {
      
      let neighbours = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j= -1; j <= 1; j++) {
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows) {
            neighbours += grid[y+j][x+i];
          }
        }
      }
      neighbours -= grid[y][x];

      //applying rules of the game

      if (grid[y][x] === 1) {//alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
      if (grid[y][x] === 0) {
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

    }
  }

  grid = nextTurn;
}


function mousePressed(){
  let x = floor(mouseX/ cellSize);
  let y = floor(mouseY / cellSize);
  if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++ ) {
    for (let x = 0; x < cols; x++) {
      if(grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
  }
}
}

function create2dArray(cols,rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        randomGrid[y].push(0);
    }
      else {
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}

function resetGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      grid[y][x] = 0;
    }
  }
}
