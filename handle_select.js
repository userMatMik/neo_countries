const selectBtnElement = document.querySelector("#select-btn");

const selectOptionsElement = document.querySelector("#select-options");

selectBtnElement.addEventListener('click', ()=> {
    selectOptionsElement.classList.toggle("options-visible");
    chooseOptionOnClick();
    
})

const chooseOptionOnClick = () => {
    const optionsElements = document.querySelectorAll('.select__option');
    
    optionsElements.forEach((option) => {
        option.addEventListener('click', () => {
            console.log(option)
        })
    })

}



