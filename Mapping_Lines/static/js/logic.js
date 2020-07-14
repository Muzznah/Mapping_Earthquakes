// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center(US coordinates) and zoom level(“4” on a scale 0–18).
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center( for Los Angeles, California) and zoom level(“14” on a scale 0–18).
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line(line from LAX to SFO.).
/* Let’s edit the logic.js file and add two more airport stops to our line variable:
 Salt Lake City International Airport (SLC) and Seattle-Tacoma International Airport (SEA).*/

let line = [
    [37.6213, -122.3790],//San FRancisco international airport
    [30.1975, -97.6664],// austin-bergstrom international airport
    [43.6777, -79.6248],//Toronto Pearson
  [40.6413, -73.7781]// JFK
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight:4,
    fillOpacity: 0.5,
    dashArray: '10, 10', 
    dashOffset: '5'
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);