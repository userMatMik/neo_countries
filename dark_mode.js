const checkboxElement = document.querySelector('input[type="checkbox"]');
let theme = localStorage.getItem("themeSettings");

checkboxElement.addEventListener('change', () => {
    if (checkboxElement.checked) {
        document.body.className = 'dark'
        theme = 'dark';
    } else {
        document.body.className = 'light';
        theme = 'light';
    }
    localStorage.setItem('themeSettings', theme);
})

if (theme === "dark") {
    document.body.className = 'dark';
    checkboxElement.checked = true;
}

if (theme === "light") {
    document.body.className = 'light';
}