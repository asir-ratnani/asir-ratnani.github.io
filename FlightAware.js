let Client = require('node-rest-client').Client;
let username = 'ARatnani';
let apiKey = 'fc2a7d607c39780ddb797b27a76572a79d82ff12';
let fxmlUrl = 'https://flightxml.flightaware.com/json/FlightXML2/';
let client_options = {
    user: username,
    password: apiKey
};
let client = new Client(client_options);
client.registerMethod('airlineInfo', fxmlUrl + 'AirlineInfo', 'GET');
let airlineInfoArgs = {
    parameters: {
       airlineCode: 'UAL'
    }
};
client.methods.airlineInfo(airlineInfoArgs, function (data, response) {
    console.log(data);
});
