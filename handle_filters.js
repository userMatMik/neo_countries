import { countriesList } from "./app.js";
import { renderCountriesList } from "./dom-create-elements.js";

const selectBtnElement = document.querySelector("#select-btn");
const selectOptionsElement = document.querySelector("#select-options");

let searchedQuerry = "";
let selectedOption = "";

const renderFilteredCountries = () => {
    const filteredCountries = countriesList.filter((country) => {
        return country.name.toLowerCase().includes(searchedQuerry) && (!selectedOption || country.region.toLowerCase() === selectedOption )
    }) 

    renderCountriesList(filteredCountries);
}

const chooseOptionOnClick = () => {
    const optionsElements = document.querySelectorAll('.select__option');
    
    optionsElements.forEach((option) => {
        option.addEventListener('click', () => {

            optionsElements.forEach((element) => element.classList.remove('option-selected'));
            option.classList.add('option-selected');
            
            selectedOption = option.innerText.toLowerCase();

            renderFilteredCountries();

            // const filteredCountriesByRegion = countriesList.filter((country) => {
            //    return  country.region.toLowerCase() === selectedOption;
            // })

            // renderCountriesList(filteredCountriesByRegion);
        })
    })
}

selectBtnElement.addEventListener('click', ()=> {
    selectOptionsElement.classList.toggle('options-visible');
    chooseOptionOnClick(); 
})

//handle search input
document.querySelector("#search-input").addEventListener('input', (event)=> {
    searchedQuerry = event.target.value.toLowerCase();
    renderFilteredCountries();
    
    // const searchedCountries = countriesList.filter((country) => {
    //     return country.name.toLowerCase().includes(searchedQuerry)
    // })

    // renderCountriesList(searchedCountries)
})

selectBtnElement.addEventListener('blur', () => {
    // if (selectOptionsElement.classList.contains('options-visible')) {
    //     selectOptionsElement.classList.remove('options-visible')
    // }
    alert('lostfocus')

})


