const menuEmail =  document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')

const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) { //si el aside esta abierto, se le agrega la clase 'inactive' para que se cierre
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) { //si el aside esta abierto, se le agrega la clase 'inactive' para que se cierre
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    console.log('click');
    
    if (!isMobileMenuClosed) { //si el menu en mobile esta abierto, se le agrega la clase 'inactive' para que se cierre
        mobileMenu.classList.add('inactive')
    } 
    else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}