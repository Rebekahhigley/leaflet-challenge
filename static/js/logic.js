// instructions:
// Import and visualize the data by doing the following:

// Using Leaflet, create a map that plots all the earthquakes from 
// your dataset based on their longitude and latitude.

// Your data markers should reflect the magnitude of the earthquake by their 
// size and the depth of the earthquake by color. Earthquakes with higher magnitudes 
// should appear larger, and earthquakes with greater depth should appear darker in color.

// Hint: The depth of the earth can be found as the third coordinate for each earthquake.

// Include popups that provide additional information about the earthquake when its 
// associated marker is clicked.

// Create a legend that will provide context for your map data.

// Your visualization should look something like the preceding map.



// map object
let myMap = L.map("map", {
    center: [-32.8, 117.9], 
    zoom: 7   
});

// base layer
L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap); 


// getting the data
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";


d3.json(url).then(function (data) {  
});






