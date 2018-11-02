var Client = require('node-rest-client').Client;
var username = 'ARatnani';
var apiKey = 'fc2a7d607c39780ddb797b27a76572a79d82ff12';
var fxmlUrl = 'https://flightxml.flightaware.com/json/FlightXML3/';
var client_options = {
    user: username,
    password: apiKey
};
var client = new Client(client_options);
client.registerMethod('airlineInfo', fxmlUrl + 'AirlineInfo', 'GET');
var airlineInfoArgs = {
    parameters: {
       airlineCode: 'ACA'
    }
};
client.methods.airlineInfo(airlineInfoArgs, function (data, response) {
    console.log(data);
});
                            
