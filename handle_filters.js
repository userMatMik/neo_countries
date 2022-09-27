import { countriesList } from "./app.js";
import { renderCountriesList } from "./app.js";

const selectBtnElement = document.querySelector("#select-btn");
const selectOptionsElement = document.querySelector("#select-options");

const chooseOptionOnClick = () => {
    const optionsElements = document.querySelectorAll('.select__option');
    let selectedOption;
    optionsElements.forEach((option) => {
        option.addEventListener('click', () => {

            optionsElements.forEach((element) => element.classList.remove('option-selected'));
            option.classList.add('option-selected');
            
            selectedOption = option.innerText.toLowerCase();

            const countriesByRegion = countriesList.filter((country) => {
               return  country.region.toLowerCase() === selectedOption;
            })

            renderCountriesList(countriesByRegion);
        })
    })
}

selectBtnElement.addEventListener('click', ()=> {
    selectOptionsElement.classList.toggle('options-visible');
    chooseOptionOnClick();
    
})

//handle search input
document.querySelector("#search-input").addEventListener('input', (event)=> {
    let searchedQuerry = event.target.value.toLowerCase();
    
    const searchedCountries = countriesList.filter((country) => {
        return country.name.toLowerCase().includes(searchedQuerry)
    })

    renderCountriesList(searchedCountries)
})

selectBtnElement.addEventListener('blur', () => {
    // if (selectOptionsElement.classList.contains('options-visible')) {
    //     selectOptionsElement.classList.remove('options-visible')
    // }
    alert('lostfocus')

})


