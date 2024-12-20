document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-button');
    const burgerMenu = document.querySelector('.burger-menu');
    const app = document.querySelector('.app');

    burgerButton.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');


        const elementsToBlur = document.querySelectorAll('.app > *:not(.left-side)');


        if (burgerMenu.classList.contains('active')) {
            elementsToBlur.forEach(element => {
                element.classList.add('blur');
            });
        } else {
            elementsToBlur.forEach(element => {
                element.classList.remove('blur');
            });
        }
    });

    const exitButton = document.querySelector('.burger-menu__exit-button');
    exitButton.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        const elementsToBlur = document.querySelectorAll('.app > *:not(.left-side)');
        elementsToBlur.forEach(element => {
            element.classList.remove('blur');
        });
    });
});