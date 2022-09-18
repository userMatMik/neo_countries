const API_URL = 'https://restcountries.com/v3.1/all';


const renderCountriesList = (countriesList) => {
    const listElement = document.createElement('ul');
    countriesList.forEach((country) => {
        listElement.appendChild(countryElement(country))
    })
} 

const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data)
    const countriesList = data.map((country) => {
        return {
            name: country.name.common,
            capital: country.capital,
            population: country.population,
            region: country.region,
            flagUrl: country.flags.png,
        };
    } )
    
    renderCountriesList(countriesList);
};

fetchData();