const handleBackToTop = () => {
    const toTopBtn = document.querySelector('.back-to-top');
    const scrollPosition = window.scrollY;
    if(scrollPosition > 250) {
        toTopBtn.classList.add('active');
    } else {
        toTopBtn.classList.remove('active');
    }
}

const createLinkElement = () => {
    const linkElement = document.createElement('a');
    linkElement.href = '#top';
    linkElement.classList.add('back-to-top');

    const iconElement = document.createElement('ion-icon');
    iconElement.name = "arrow-up-outline";

    linkElement.appendChild(iconElement)
    document.body.appendChild(linkElement);  
}

document.addEventListener('scroll', handleBackToTop);
window.onload = handleBackToTop;
window.onload = createLinkElement;