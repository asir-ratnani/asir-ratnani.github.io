// 2-D Array Assignment - Departures/Arrivals Board
// Asir Ratnani
// October 26, 2018
//
// Extra for Experts:
// 

let widths = [425,200,150,100,100,125];
let rows = 15;
let cols = 6;
let cities = [["Calgary", "Air Canada", "ACA 1125", "5:15 AM", "5:21 AM", "On Time!"],
             ["Toronto", "Air Canada", "ACA 1125", "5:25 AM", "5:32 AM", "On Time!"]];
let grid;
let cellSize;

//let url = http://flightxml.flightaware.com/json/FlightXML3/METHODNAME
// Username = "ARatnani"
// API Key = "fc2a7d607c39780ddb797b27a76572a79d82ff12"
// fxmlUrl = "https://flightxml.flightaware.com/json/FlightXML3/"

// let url = 'https://flightxml.flightaware.com/json/FlightXML3/AirportBoards?airport_code=CYXE'


function preload() {
}


function setup() {
  createCanvas(1100, 750);
  // loadJSON(url, gotData)
  cellSize = height / rows;

  // grid = create2dArray(cols, rows);

  cleanUpTheGrid();
}

function draw() {
  background(125);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++ ) {
    for (let x = 0; x < cols; x++) {
      
      if(grid[y][x] === "C") {
        fill(0);
        textSize(32);
        textAlign(CENTER, BASELINE);
        text(cities[x], widths[x] / 2, height / rows - 10);
      }
      if (grid[y][x] === "M") {
        fill(0);
        textSize(32);
        textAlign(CENTER);
        text(cities[x], widths[x] / 4, height / rows + 60);
      }

      else if (grid[y][x] === "T") {
        fill(0,0,255);
      }
      else if (grid[y][x] === "E") {
        fill(255,0,225);
      }
      else if (grid[y][x] === "V") {
        fill(255,0,0);
      }
      else if (grid[y][x] === "W") {
        fill(29,225,255);
      }
      else if (grid[y][x] === "P") {
        fill(222,220,25);
      }
      else {
        fill (255);
      }
      let startingX = 0;
      let i = 0;
      while (i < x) {
        startingX += widths[i];
        i++;
      }
      noFill();
      rect (startingX, y*cellSize, widths[x], height / rows );
  }
}
}
function create2dArray(cols,rows) {
  let departuresGrid = [];
  for (let y = 0; y < rows; y++) {
    departuresGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        departuresGrid[y].push(0);
    }
      else {
        departuresGrid[y].push(1);
      }
    }
  }
  return departuresGrid;
}

function cleanUpTheGrid() {
  for (let i=0; i<grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}
