import { countriesList } from "./app.js";
import { countryData } from "./app.js";

// console.log(countriesList)
// console.log(countryData)

//main page
const createInfoElement = (str, value) => {
    const infoDivElement =  document.createElement('div');
    
    const labelElement = document.createElement('strong');
    labelElement.innerText = `${str}: `;

    const valueElement = document.createElement('span');
    valueElement.innerText = value;

    infoDivElement.appendChild(labelElement);
    infoDivElement.appendChild(valueElement);

    return infoDivElement;
}

const createInfoContainer = (country) => {
    const infoContainerElement = document.createElement('div');

    const countryNameElement = document.createElement('h2');
    countryNameElement.innerText = country.name
    countryNameElement.classList.add('country-name')

    infoContainerElement.appendChild(countryNameElement);

    infoContainerElement.appendChild(createInfoElement("Capital", country.capital));
    infoContainerElement.appendChild(createInfoElement("Region", country.region));
    infoContainerElement.appendChild(createInfoElement("Population", country.population.toLocaleString()));

    infoContainerElement.classList.add('info-container');


    return infoContainerElement;
}

const createFlagElement = (country) => {
    const flagContainerElement = document.createElement('div');
    const flagImgElement = document.createElement('img');

    flagImgElement.src = country.flagUrl;
    flagImgElement.alt = `${country.name} flag`;

    flagContainerElement.appendChild(flagImgElement);

    return flagContainerElement;
}

const createCountryElement = (country) => {
    const countryElement = document.createElement('li');
    
    const linkElement = document.createElement('a');
    linkElement.href = `?country=${country.countryID}`
    
    linkElement.appendChild(createFlagElement(country))

    linkElement.appendChild(createInfoContainer(country));

    countryElement.appendChild(linkElement);
    // countryElement.appendChild(createInfoContainer(country));

    return countryElement
}

const createCountriesList = (countriesList) => {
    const listElement = document.createElement('ul');
    // console.log(countriesList)
    countriesList.forEach((country) => {
        listElement.appendChild(createCountryElement(country))
    })
    return listElement;
}

export const renderCountriesList = (countriesList) => {
    const mainElement = document.querySelector('#main');
    mainElement.innerHTML = "";
    mainElement.appendChild(createCountriesList(countriesList));
}

//country details
const createGoBackButtonElement = () => {
    const linkElement = document.createElement('a');
    linkElement.innerText = "Back";
    linkElement.classList.add('back-btn');
    linkElement.href = "/";

    return linkElement;
}

const test = (border) => {
    let borderCountryName;
    countryData.forEach((country) => {
        // if (country.countryID === border) {
        //     borderCountryName = country.name;
        // }
        console.log(countriesList)
    })
    console.log(countryData)
    return borderCountryName;
    
}

const createBorderCountryElement = (border) => {
    const borderCountryElement = document.createElement('a');
    borderCountryElement.innerText = test(border);
    borderCountryElement.href=`?country=${border}`;

    return borderCountryElement;
}

const createBordersElement = (countryData) => {
    const bordersContainerElement = document.createElement('div');
    
    const borderHeadingElement = document.createElement('h2')
    borderHeadingElement.innerText = 'Border Countries:';

    bordersContainerElement.appendChild(borderHeadingElement);

    countryData.borders.forEach((border) => {
        bordersContainerElement.appendChild(createBorderCountryElement(border, countryData));
    })

    return bordersContainerElement;
}
 
const createDiteailsContainerElement = (countryData) => {
    // console.log(countryData[0]);
    const detailsContainerElement = document.createElement('div');
    detailsContainerElement.classList.add('flex');

    const flagImgElement = createFlagElement(countryData);
    const countryDetailsContainerElement = document.createElement('div');

    const countryNameElement = document.createElement('h2');
    countryNameElement.innerText = countryData.name;

    countryDetailsContainerElement.appendChild(countryNameElement);

    const detailsFlexContainer = document.createElement('div');
    detailsFlexContainer.classList.add('flex')

    const detailsLeftSideContainer =  document.createElement('div');
    const detailsRightSideContainer =  document.createElement('div');

    detailsLeftSideContainer.appendChild(createInfoElement("Native name", countryData.nativeName));
    detailsLeftSideContainer.appendChild(createInfoElement("Population", countryData.population));
    detailsLeftSideContainer.appendChild(createInfoElement("Region", countryData.region));
    detailsLeftSideContainer.appendChild(createInfoElement("Subregion", countryData.subregion));
    detailsLeftSideContainer.appendChild(createInfoElement("Capital", countryData.capital));

    detailsRightSideContainer.appendChild(createInfoElement("Top level domain", countryData.domain));
    detailsRightSideContainer.appendChild(createInfoElement("Currencies", countryData.currencies));
    detailsRightSideContainer.appendChild(createInfoElement("Languages", countryData.languages));


    detailsFlexContainer.appendChild(detailsLeftSideContainer);
    detailsFlexContainer.appendChild(detailsRightSideContainer);

    countryDetailsContainerElement.appendChild(detailsFlexContainer);
    if (countryData.borders) {
        countryDetailsContainerElement.appendChild(createBordersElement(countryData))
    }

    detailsContainerElement.appendChild(flagImgElement);
    detailsContainerElement.appendChild(countryDetailsContainerElement);

    return detailsContainerElement;
}

export const renderCountryDetails = (countryData) => {
    // console.log(countryData)
    const mainElement = document.querySelector('#main');
    mainElement.innerHTML = "";
    mainElement.appendChild(createGoBackButtonElement());
    mainElement.appendChild(createDiteailsContainerElement(countryData));
}