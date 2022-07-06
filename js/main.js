

const body = document.body

const animationItems = document.querySelectorAll('._animation-items')

if (animationItems.length > 0) {
    console.log("yes")
    window.addEventListener('wheel', animationOnScroll)
    window.addEventListener('scroll', animationOnScroll)
    function animationOnScroll() {
        console.log("Событие сработало")
        for (let index = 0; index < animationItems.length; index++) {
            const animationItem = animationItems[index]
            const animationItemHeight = animationItem.offsetHeight
            const animationItemOffset = offset(animationItem).top
            const animationStart = 10000

            let animationItemPoint = window.innerHeight - animationItemHeight / animationStart

            if (animationItemHeight > window.innerHeight) {
                animationItemPoint = window.innerHeight - window.innerHeight / animationStart
            }
            if ((scrollY > (animationItemOffset - animationItemPoint)) && (scrollY < (animationItemOffset + animationItemHeight))) {
                animationItem.classList.add('_active')
            } else {
                animationItem.classList.remove('_active')
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

setTimeout(animationOnScroll, 500)
