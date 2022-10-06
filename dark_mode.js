import { updateMap } from "./leaflet_map.js";

export const checkboxElement = document.querySelector('input[type="checkbox"]');
let theme = localStorage.getItem("themeSettings");
export const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;


checkboxElement.addEventListener('change', () => {
    if (checkboxElement.checked) {
        document.body.className = 'dark'
        theme = 'dark';
        if (window.location.search.includes("?country=")) {
            updateMap()
        }    
    } else {
        document.body.className = 'light';
        theme = 'light';
        if (window.location.search.includes("?country=")) {
            updateMap()
        }  
    }
    localStorage.setItem('themeSettings', theme);
})

if ((theme === "dark") || prefersDarkMode) {
    document.body.className = 'dark';
    checkboxElement.checked = true;
}

if (theme === "light") {
    document.body.className = 'light';
    checkboxElement.checked = false;
}


