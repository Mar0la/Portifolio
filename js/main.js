let = menu = document.querySelector('#menu-barra')
let = header = document.querySelector('header')


menu.onclick = () => {
   menu.classList.toggle('fa-times')
   header.classList.toggle('active')
}

menu.onscroll = () => {
    menu.classList.remove('fa-times')
    header.classList.remove('active')
}

/*--------MENU END--------*/


