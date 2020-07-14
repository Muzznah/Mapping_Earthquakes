// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center(US coordinates) and zoom level(“4” on a scale 0–18).
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center( for Los Angeles, California) and zoom level(“14” on a scale 0–18).
let map = L.map('mapid').setView([34.0522, -118.2437], 5);

// // An alternative to using the setView() method used above is:
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// //  Add a circle to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
// 	color: 'black',
//     fillColor: ' #ffff99',
//     fillOpacity: 0.3,
//     radius: 300
//  }).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
    L.circleMarker(city.location, {color: '#ffa64d',
    fillColor: '#ffa64d',
    fillOpacity: 0.3,
    radius: city.population/100000
 }).addTo(map)
    .bindPopup(`<h2>${city.city}, ${city.state}</h2> <hr><h3>Population ${city.population.toLocaleString()}</h3>`)
});
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);