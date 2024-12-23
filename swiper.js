document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector(".swiper");
    const slideWidth = 240;
    let swiper;

    // Функция для расчета
    function calculateSlidesPerView() {
        const swiperWidth = swiperContainer.clientWidth;
        return Math.floor(swiperWidth + 16) / (slideWidth + 16);
    }

    function initSwiper() {
        swiper = new Swiper(swiperContainer, {
            slidesPerView: calculateSlidesPerView(),
            spaceBetween: 16,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    function destroySwiper() {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }

    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            if (!swiper) {
                initSwiper();
            } else {
                swiper.params.slidesPerView = calculateSlidesPerView();
                swiper.update();
            }
        } else {
            destroySwiper();
        }
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});
