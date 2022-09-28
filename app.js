import { renderCountriesList } from "./dom-create-elements.js";
import { renderCountryDetails } from "./dom-create-elements.js";

export let countriesList;
export let countryData;

console.log(window.location.search)

const API_URL = "https://restcountries.com/v3.1/all";
const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data)
    countriesList = data.map((country) => {
        return {
            name: country.name.common,
            capital: country.capital,
            population: country.population,
            region: country.region,
            flagUrl: country.flags.png,
            countryID: country.cioc,
        };
    } )
    
    renderCountriesList(countriesList);
};

const getCountryDetails = async () => {

    const searchParams = new URLSearchParams(window.location.search);
    const countryCode = searchParams.get("country");

    const API_URL_DETAILS = `https://restcountries.com/v3.1/alpha/${countryCode}`
    const response = await fetch(API_URL_DETAILS);
    const data = await response.json();
    countryData = data.map((country) => {
        return {
            name: country.name.common,
            flagUrl: country.flags.png,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            capital: country.capital,
            domain: country.tld,
            currencies: country.currencies,
            languages: country.languages,
            borders: country.borders,
        }
    })
    renderCountryDetails(countryData);
    console.log(countryData);
}

if(window.location.search.includes("?country=")) {
    document.querySelector('.filters').classList.add('hidden');
    getCountryDetails();
} else {
    fetchData();
}