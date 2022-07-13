
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


body.querySelectorAll('.footer__list-body:not(:first-child)').forEach(el => {
    el.querySelectorAll('.footer__list .footer__item').forEach(item => {
        item.classList.remove('item-visited')
        item.addEventListener('click', () => {
            el.querySelectorAll('.footer__list .footer__item').forEach(itemInner => {
                itemInner.classList.remove('item-visited')
            })
           item.classList.add('item-visited')
        })
    })
})


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

const footerTop = body.querySelector('.footer__top')

const footerLists = body.querySelector('.footer__lists')

const footerMessengers = body.querySelector('.footer__messengers')

const footerLogo = body.querySelector('.footer__logo img')


if (window.innerWidth <= 932) {
    footerTop.classList.add('footer__top-flex-dir-column')
    footerLists.classList.add('footer__lists-flex-dir-column')
    footerMessengers.classList.add('footer__logo-section-align-center')
    footerLogo.classList.add('footer__logo-align-center')
    body.querySelectorAll('.footer__list-body').forEach(element => {
        element.classList.add('footer__list-body-slide')
        element.querySelector('.footer__list').classList.add('footer-list-slide')
        const footerTitle = element.querySelector('.footer__title')
        footerTitle.addEventListener('click', () => {
            element.classList.toggle('footer__list-body-active')
            element.classList.toggle('footer__list-body-passive')
        })
    })
} else {
    footerTop.classList.remove('footer__top-flex-dir-column')
    footerLists.classList.remove('footer__lists-flex-dir-column')
    footerMessengers.classList.remove('footer__logo-section-align-center')
    footerLogo.classList.remove('footer__logo-align-center')
    body.querySelectorAll('.footer__list-body').forEach(element => {
        element.classList.remove('footer__list-body-slide')
        element.querySelector('.footer__list').classList.remove('footer-list-slide')
        const footerTitle = element.querySelector('.footer__title')
        footerTitle.addEventListener('click', () => {
            element.classList.toggle('footer__list-body-active')
            element.classList.toggle('footer__list-body-passive')
        })
    })
}


window.addEventListener('resize', () => {
    if (window.innerWidth <= 932) {
        footerTop.classList.add('footer__top-flex-dir-column')
        footerLists.classList.add('footer__lists-flex-dir-column')
        footerMessengers.classList.add('footer__logo-section-align-center')
        footerLogo.classList.add('footer__logo-align-center')
        body.querySelectorAll('.footer__list-body').forEach(element => {
            element.classList.add('footer__list-body-slide')
            element.querySelector('.footer__list').classList.add('footer-list-slide')
            const footerTitle = element.querySelector('.footer__title')
            footerTitle.addEventListener('click', () => {
                element.classList.toggle('footer__list-body-active')
                // element.classList.toggle('footer__list-body-passive')
            })
        })
    } else {
        footerTop.classList.remove('footer__top-flex-dir-column')
        footerLists.classList.remove('footer__lists-flex-dir-column')
        footerMessengers.classList.remove('footer__logo-section-align-center')
        footerLogo.classList.remove('footer__logo-align-center')
        body.querySelectorAll('.footer__list-body').forEach(element => {
            element.classList.remove('footer__list-body-slide')
            element.querySelector('.footer__list').classList.remove('footer-list-slide')
            const footerTitle = element.querySelector('.footer__title')
            footerTitle.addEventListener('click', () => {
                element.classList.toggle('footer__list-body-passive')
                // element.classList.toggle('footer__list-body-passive')
            })
        })
    }
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