// Sticky Navbar
const nav = document.querySelector('#navbar');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', fixedNav);