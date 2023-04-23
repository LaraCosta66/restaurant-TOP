import './styles/header.css'
import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact"

const content = document.querySelector('#content');
const header = document.createElement('div');
const homeBtn = document.createElement('button')
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')
homeBtn.textContent = 'Home'
header.classList.add('header')
menuBtn.textContent = 'Menu'
contactBtn.textContent = 'Contact'
header.appendChild(homeBtn)
header.appendChild(menuBtn)
header.appendChild(contactBtn)
content.appendChild(header)


homeBtn.addEventListener('click', function(){
    Home()
})
menuBtn.addEventListener('click', function(){
    Menu()
})
contactBtn.addEventListener('click', function(){
    Contact()
})