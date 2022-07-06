

const body = document.body

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