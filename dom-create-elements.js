//country details


export const renderCountryDetails = (countryData) => {
    
}


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