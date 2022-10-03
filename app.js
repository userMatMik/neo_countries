import { renderCountriesList } from "./dom-create-elements.js";
import { renderCountryDetails } from "./dom-create-elements.js";

export let countriesList;
export let countryData;

const API_URL = "https://restcountries.com/v3.1/all";
export const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    countriesList = data.map((country) => {
        return {
            name: country.name.common,
            capital: country.capital,
            population: country.population,
            region: country.region,
            flagUrl: country.flags.png,
            countryID: country.cca3,
        };
    })
    renderCountriesList(countriesList);
};

const getCountryDetails = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const countryCode = searchParams.get("country");
    const API_URL_DETAILS = `https://restcountries.com/v3.1/alpha/${countryCode}`
    const response = await fetch(API_URL_DETAILS);
    const data = await response.json();
    console.log(data)
    countryData = data.map((country) => {
        return {
            name: country.name.common,
            nativeName: Object.values(country.name.nativeName)[0].official,
            flagUrl: country.flags.svg,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            domain: country.tld,
            currencies: Object.values(country.currencies)[0].name,
            languages: Object.values(country.languages).join(", "),
            borders: country.borders,
            countryID: country.cca3,
        }
    })
    
    renderCountryDetails(...countryData);
}

if(window.location.search.includes("?country=")) {
    document.querySelector('.filters').classList.add('hidden');
    getCountryDetails();
} else {
    fetchData();
}