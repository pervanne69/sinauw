
const body = document.body

const animationItems = document.querySelectorAll('._animation-items')

const animationItemsSecond = document.querySelectorAll('._animation-items-second')

const videoIframes = [
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/tRpoI6vkqLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/5sffVBeaOeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
]


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    speed: 500,
    roundLengths: true,
    // freeModeMomentumVelocityRatio: 10,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,

    },
    pagination: {
        el: ".swiper-pagination",

    },
});



$(document).ready(function() {

    const coursesMainButton = $('.courses__main-button')
    $('.courses__item').each(function() {
        $(this).hover(function() {
            coursesMainButton.css({
                'margin-top': '80px'
            })
        }, function() {
            coursesMainButton.css({
                'margin-top': '137px'
            })
        })
    })
})

if (animationItems.length > 0) {
    window.addEventListener('wheel', animationOnScroll)
    window.addEventListener('scroll', animationOnScroll)
    function animationOnScroll() {
        for (let index = 0; index < animationItems.length; index++) {
            const animationItem = animationItems[index]
            const animationItemHeight = animationItem.offsetHeight
            const animationItemOffset = offset(animationItem).top
            const animationStart = 4

            let animationItemPoint = window.innerHeight - animationItemHeight / animationStart

            if (animationItemHeight > window.innerHeight) {
                animationItemPoint = window.innerHeight - window.innerHeight / animationStart
            }
            if ((scrollY > (animationItemOffset - animationItemPoint)) && (scrollY < (animationItemOffset + animationItemHeight))) {
                animationItem.classList.add('_active')
                animationItem.classList.add('stop-counting')
            } else {
                animationItem.classList.remove('_active')
            }
        }
        if (animationItemsSecond.length > 0) {
            for (let index = 0; index < animationItemsSecond.length; index++) {
                const animationItem = animationItemsSecond[index]
                const animationItemHeight = animationItem.offsetHeight
                const animationItemOffset = offset(animationItem).top
                const animationStart = 2.5

                let animationItemPoint = window.innerHeight - animationItemHeight / animationStart

                if (animationItemHeight > window.innerHeight) {
                    animationItemPoint = window.innerHeight - window.innerHeight / animationStart
                }
                if ((scrollY > (animationItemOffset - animationItemPoint)) && (scrollY < (animationItemOffset + animationItemHeight))) {
                    animationItem.classList.add('_active-second')
                    animationItem.classList.add('stop-counting')
                } else {
                    animationItem.classList.remove('_active-second')
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollY || document.documentElement.scrollLeft,
            scrollTop = window.scrollX || document.documentElement.scrollTop
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}

const headerLang = body.querySelector('.header__lang')

const burgerLogo = body.querySelector('.burger__logo')

const headerBurger = body.querySelector('.header__burger')

const burgerItems = body.querySelector('.burger__items')

const burgerCloseBtn = body.querySelector('.burger__label img')


headerLang.addEventListener('click', () => {
    headerLang.classList.toggle('header__lang-passive')
    headerLang.classList.toggle('header__lang-active')
})

burgerLogo.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger-passive')
    headerBurger.classList.toggle('header__burger-active')
    if (headerBurger.classList.contains('header__burger-active')) {
        body.classList.add('overflow-hidden')
    } else {
        body.classList.remove('overflow-hidden')
    }
})


burgerItems.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', () => {
        headerBurger.classList.toggle('header__burger-passive')
        headerBurger.classList.toggle('header__burger-active')
        if (headerBurger.classList.contains('header__burger-active')) {
            body.classList.add('overflow-hidden')
        } else {
            body.classList.remove('overflow-hidden')
        }
    })
})

burgerCloseBtn.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger-passive')
    headerBurger.classList.toggle('header__burger-active')
    if (headerBurger.classList.contains('header__burger-active')) {
        body.classList.add('overflow-hidden')
    } else {
        body.classList.remove('overflow-hidden')
    }
})



setTimeout(animationOnScroll, 200)