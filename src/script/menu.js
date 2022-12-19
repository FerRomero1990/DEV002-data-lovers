export const showMenu = () => {
const nav = document.getElementById('nav');
const toggle = document.getElementById('menu-toggle');

toggle.addEventListener('click',() => {
  nav.classList.toggle('show-nav')
})
}
