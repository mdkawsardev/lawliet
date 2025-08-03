// Menu toggle button changing 
let menuBtn = document.querySelector('.menuBtn');
let number = 0;
menuBtn.addEventListener('click', () => {
    number++;
    if (number % 2 == 0) {
        menuBtn.innerHTML = '<i class="fa-solid fa-sliders"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
})

// This mission is for counter effect
let hasCounted = false;
let point1 = document.querySelector('.counter1 span');
let point2 = document.querySelector('.counter2 span');
let point3 = document.querySelector('.counter3 span');
function counter(element, count, speed) {
    let current = 0;
    const interval = setInterval(() => {
        element.innerText = current++;
        if (current > count) {
            clearInterval(interval);
        }
    }, speed);
}
function isInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}
window.addEventListener('scroll', () => {
    let counterPoints = document.querySelector('.counter_points');
    if (!hasCounted && isInViewport(counterPoints)) {

        counter(point1, point1.innerText, 100)
        counter(point2, point2.innerText, 10)
        counter(point3, point3.innerText, 350)
        hasCounted = true;
    }
})

// Preloader Operation here using IIFE function
function preloader(evt) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(evt);
        }, 1000);
    })
}
(async function () {
    await preloader();
    await preloader(
        document.querySelector('.loader').classList.add('d-none'),
        document.querySelector('.bigLoader').classList.remove('d-none')
    )
    preloader(
        document.body.classList.remove('overflow-hidden'),
        document.querySelector('.preloader').classList.add('d-none')
    )
}())

// Header Operation here 
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY == 0) {
        header.classList.remove('menuOut')

    } else if (window.scrollY > 500) {
        header.classList.add('menuIn');
        header.classList.remove('menuOut')

    } else if (window.scrollY <= 500) {
        header.classList.remove('menuIn');
        header.classList.add('menuOut');
    }
})

let contact_number = document.querySelector('.contact_number');
let actionToCall = document.querySelector('.actionToCall');
actionToCall.addEventListener('click', () => {
    contact_number.classList.remove('d-none')
    actionToCall.setAttribute('disabled', 'disabled');
    if (actionToCall.getAttribute('disabled')) {
        actionToCall.classList.add('disabled');
        actionToCall.classList.remove('custom_btn');
    } else {

    }
})
let closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
    contact_number.classList.add('d-none');
    actionToCall.classList.remove('disabled')
    actionToCall.classList.add('custom_btn');
    actionToCall.removeAttribute('disabled', 'disabled')
})

new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1024px
        1200: {
            slidesPerView: 2,
            spaceBetween: 30
        }
    }

    // And if we need scrollbar
});