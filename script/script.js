function showBurgerMenu(condition) {

    let burgerMenu = document.getElementsByClassName('burger-menu')[0];

    if (condition) {

        burgerMenu.setAttribute('style', 'transform: translateX(0)');
    } else {
        burgerMenu.setAttribute('style', 'transform: translateX(100%)');
    }
}

function showModalWindow() {
    let modalWindow = document.getElementsByClassName('modal-window')[0];
    modalWindow.classList.toggle('modal-window--active');
}


let serviceTranslateValue;
let serviceTranslateCurrent = 0;
let servicePages = 2;
let serviceCurrentPage = 1;

setService();
globalThis.addEventListener('resize', setService);

function setService() {

    let pageWidth = globalThis.innerWidth;

    if (pageWidth > 1540) {
        serviceTranslateValue = 1299 + 30;
        servicePages = 2;
    }
    else if (950 < pageWidth && pageWidth <= 1540) {
        serviceTranslateValue = 727 + 117;
        servicePages = 3;
    }
    else if (780 < pageWidth && pageWidth <= 950) {
        serviceTranslateValue = 600 + 100;
        servicePages = 3;
    }
    else if (pageWidth <= 780) {
        serviceTranslateValue = 278;
        servicePages = 6;
    };

    swipeService(true);
}

function swipeService(reset, side) {
    let root = document.getElementsByClassName('section-services__content')[0];

    if (side === 'right') {
        if (servicePages === serviceCurrentPage) {
            serviceTranslateCurrent = 0;
            serviceCurrentPage = 1;
        } else {
            serviceTranslateCurrent -= serviceTranslateValue;
            serviceCurrentPage += 1;
        };
    } else if (side === 'left') {
        if (serviceCurrentPage === 1) {
            serviceTranslateCurrent = serviceTranslateValue * (servicePages - 1) * (-1);
            serviceCurrentPage = servicePages;
        } else {
            serviceTranslateCurrent += serviceTranslateValue;
            serviceCurrentPage -= 1;
        }
    }

    if (reset) serviceTranslateCurrent = 0;
    root.setAttribute('style', `transform: translateX(${serviceTranslateCurrent}px)`);
}


let reviewTranslateValue;
let reviewTranslateCurrent = 0;
let reviewPages = 2;
let reviewCurrentPage = 1;
setReview();
globalThis.addEventListener('resize', setReview);

function setReview() {
    let pageWidth = globalThis.innerWidth;

    if (pageWidth > 1500) {
        reviewTranslateValue = 1320 + 40;
        reviewPages = 2;
    }
    else if (1080 < pageWidth && pageWidth <= 1500) {
        reviewTranslateValue = 912 + 10;
        reviewPages = 2;
    }
    else if (720 < pageWidth && pageWidth <= 1080) {
        reviewTranslateValue = 604 + 10;
        reviewPages = 3;
    }
    else if (pageWidth <= 720) {
        reviewTranslateValue = 297;
        reviewPages = 6;
    };

    swipeReview(true);
}

function swipeReview(reset, side) {
    let root = document.getElementsByClassName('section-reviews__list')[0];

    if (side === 'right') {
        if (reviewPages === reviewCurrentPage) {
            reviewTranslateCurrent = 0;
            reviewCurrentPage = 1;
        } else {
            reviewTranslateCurrent -= reviewTranslateValue;
            reviewCurrentPage += 1;
            console.log(reviewTranslateCurrent)
        };
    } else if (side === 'left') {
        if (reviewCurrentPage === 1) {
            reviewTranslateCurrent = reviewTranslateValue * (reviewPages - 1) * (-1);
            reviewCurrentPage = reviewPages;
        } else {
            reviewTranslateCurrent += reviewTranslateValue;
            reviewCurrentPage -= 1;
        }
    }

    if (reset) reviewTranslateCurrent = 0;
    root.setAttribute('style', `transform: translateX(${reviewTranslateCurrent}px)`);
}


let currentMethod = 'events';
function filterGalery(method) {
    if (method !== currentMethod) {
        currentMethod = method;

        for (let i = 0; i < 2; i++) {
            document.getElementsByClassName('section-galery__button-filter')[i]
                .classList.toggle('section-galery__button-filter--active');

            document.getElementsByClassName('section-galery__content')[i]
                .classList.toggle('section-galery__content--active');
        }
    }
}