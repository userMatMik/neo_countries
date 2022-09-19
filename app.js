const API_URL = 'https://restcountries.com/v3.1/all';


const createCountryElement = (country) => {
    const countryElement = document.createElement('li');
    console.log(country)
    return countryElement
}

const createCountriesList = (countriesList) => {
    const listElement = document.createElement('ul');
    console.log(countriesList)
    countriesList.forEach((country) => {
        listElement.appendChild(createCountryElement(country))
    })
    return listElement;
}

const renderCountriesList = (countriesList) => {
    const mainElement = document.querySelector('#main');
    mainElement.appendChild(createCountriesList(countriesList));
}

const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data)
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