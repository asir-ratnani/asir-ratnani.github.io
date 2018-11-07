// 2-D Array Assignment - Departures/Arrivals Board
// Asir Ratnani
// November 13, 2018
//
// Extra for Experts:
// 

let widths = [425,200,175,125,125,250];
let airlineArray = ["Air Canada", "WestJet", "Air Canada Jazz", "Delta", "Sunwing", "Tranwest Air"]
let rows = 15;
let cols = 6;
let grid;
let cellSize;
let info;
let departures, arrivals, scheduled, enroute;
let typeOfFlight;
let x,y;
let airlines;


// WebAuthentication
// WebAuthentication
// httpGet("http://flightxml.flightaware.com/json/FlightXML3/WeatherConditions?airport_code=KJFK&weather_date=0&howMany=1&offset=0");

//let url = http://flightxml.flightaware.com/json/FlightXML3/METHODNAME
// Username = "ARatnani"
// API Key = "fc2a7d607c39780ddb797b27a76572a79d82ff12"
// fxmlUrl = "https://flightxml.flightaware.com/json/FlightXML3/"

// let url = 'https://flightxml.flightaware.com/json/FlightXML3/AirportBoards?airport_code=CYXE'

function preload() {
  info = loadJSON("assets/AirportBoards.json");

}

function setup() {
  createCanvas(1300, 750);
  cellSize = height / rows;
  grid = create2dArray(cols, rows);
  x = 10;
  y = 45;
 

  departures = info.AirportBoardsResult.departures.flights;
  // arrivals = info.AirportBoardsResult.arrivals.flights;
  // scheduled = info.AirportBoardsResult.scheduled.flights;
  // enroute = info.AirportBoardsResult.enroute.flights;


  if (departures[7].airline === "WEN" ) {
    airlines = airlineArray[1]
    console.log("WestJet");
  }

  else {
    console.log("Other Airline");
  }

}

function draw() {
  background(125);
  displayGrid();
  displayJSON();
}

function displayJSON() {
  
  for (let j = 0; j < cols; j++) {
    y = 45;  
    for (let i =0; i < rows; i++) {
      if (departures[i].airline === "WEN" || departures[i].airline === "WJA"  ) {
        airlines = airlineArray[1];
      }
      else if(departures[i].airline === "ACA") {
        airlines = airlineArray[0];
      }
      else if(departures[i].airline === "JZA") {
        airlines = airlineArray[2];
      }
      else if (departures[i].airline === "SKW") {
        airlines = airlineArray[3]
      }
      if (departures[i].type === "Form_Airline") {
        
        // console.log(departures[i].destination.city);
        fill(0);
        textSize(20);
        textFont('Georgia');
        // textAlign(CENTER, BASELINE);
        text(departures[i].destination.city, x, y);
        text(airlines, widths[0] + x, y);
        text(departures[i].ident, widths[0] + widths[1] + x, y);
        text(departures[i].filed_departure_time.time, widths[0] + widths[1] + widths[2] + x, y);
        text(departures[i].actual_departure_time.time, widths[0] + widths[1] + widths[2] + widths[3] + x, y);
        text(departures[i].status, widths[0] + widths[1] + widths[2] + widths[3] + widths[4] + x , y);
        y += 50; 
      }
    }
    

  }
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
  for (let i=0; i < grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}
