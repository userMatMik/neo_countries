import { checkboxElement } from "./dark_mode.js";

var map;
var mapLayers = {
    'lightLayer': L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }),
    'darkLayer': L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	    maxZoom: 20,
	    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    })
};

export const updateMap = () => {
    if (checkboxElement.checked) {
        map.addLayer(mapLayers.darkLayer);
        if (map.hasLayer(mapLayers.lightLayer)) {
            map.removeLayer(mapLayers.lightLayer);
        }
    } else {
        map.addLayer(mapLayers.lightLayer);
        if (map.hasLayer(mapLayers.darkLayer)) {
            map.removeLayer(mapLayers.darkLayer);
        }
    }
}

export const renderMap = (coordinates) => {
    if (localStorage.getItem("themeSettings") === 'dark') {
    
        map = L.map('map').setView(coordinates, 5);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	    maxZoom: 20,
	    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map);
    } else {
        map = L.map('map').setView(coordinates, 5);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map);
    } 
    var marker = L.marker(coordinates).addTo(map);
}


