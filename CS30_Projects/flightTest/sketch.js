var clientID = '9XnrhLXdHu1Dg0TSrK6dImCv-7VzCyhNRKJcl86E';
var clientSecret = 'hIqUOlreTW0Zlm0rcPR-v9hkfu1oJo9dmbmR3fDK';
var baseUrl = 'https://api-alpha.clarifai.com/v1/';

var accessToken;

function setup() {
  noCanvas();

  var data = {
    'grant_type': 'client_credentials',
    'client_id': clientID,
    'client_secret': clientSecret
  }
  $.ajax(
  {
    'type': 'POST',
    'url': baseUrl + 'token',
    'data': data,
    success: function (response) { 
      console.log(response);
      accessToken = response;
      askClarifai();
    },
    error: function (err) { 
      console.log(err);
    }
  });


}

function askClarifai() {
  $.ajax({
    url: 'https://api.clarifai.com/v1/tag/',
    type: 'GET',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken.access_token);
    },
    data: {
      url: 'http://www.clarifai.com/img/metro-north.jpg'
    },
    success: function (response) { 
      console.log(response);
    },
    error: function (err) { 
      console.log(err);
    },
  });
}




// var Client = require('node-rest-client').Client;

// var username = 'ARatnani';
// var apiKey = 'fc2a7d607c39780ddb797b27a76572a79d82ff12';
// var fxmlUrl = 'https://flightxml.flightaware.com/json/FlightXML3/'

// var client_options = {
// 	user: username,
// 	password: apiKey
// };
// var client = new Client(client_options);

// client.registerMethod('findFlights', fxmlUrl + 'FindFlight', 'GET');
// client.registerMethod('weatherConditions', fxmlUrl + 'WeatherConditions', 'GET');

// var findFlightArgs = {
// 	parameters: {
// 		origin: 'KIAH',
// 		destination: 'KJFK',
// 		type: 'nonstop'
// 	}
// };

// client.methods.findFlights(findFlightArgs, function (data, response) {
// 	console.log('Number of Flights: %j', data.FindFlightResult.num_flights);
// 	console.log('First flight found: %j', data.FindFlightResult.flights[0]);
// });

// var weatherConditionsArgs = {
// 	parameters: {
// 		airport_code: 'KHOU'
// 	}
// };

// client.methods.weatherConditions(weatherConditionsArgs, function (data, response) {
// 	console.log('Current conditions at Hobby Airport: %j', data.WeatherConditionsResult.conditions[0]);
// })