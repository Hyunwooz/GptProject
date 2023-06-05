const navbar = document.querySelector(".navbar__toggle")
const menu = document.querySelector(".navbar__menu")

const handleToggle = () => {
    menu.classList.toggle('hidden')
}

navbar.addEventListener('click',handleToggle)