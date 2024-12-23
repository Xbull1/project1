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

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.brand-menu__toggle');
    const brandMenuBody = document.querySelector('.brand-menu__body');

    let isExpanded = false;

    toggleButton.addEventListener('click', function () {
        isExpanded = !isExpanded;

        if (isExpanded) {
            brandMenuBody.style.height = 'auto';
            toggleButton.querySelector('.toggle-text').textContent = 'Скрыть';
            toggleButton.classList.add('expanded');
        } else {
            brandMenuBody.style.height = '';
            toggleButton.querySelector('.toggle-text').textContent = 'Показать все';
            toggleButton.classList.remove('expanded');
        }
    });
});