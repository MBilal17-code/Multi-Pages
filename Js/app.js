// Header scroll

let nav = document.querySelector('.navbar');
window.onscroll=()=>{
  if (document.documentElement.scrollTop>50) {
    nav.classList.add('header-scrolled');
  }
  else{
    nav.classList.remove('header-scrolled');
  }
}

// Nav Hide when click on navlinks

let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(
  (e)=>{
    e.addEventListener('click',()=>{
      navCollapse.classList.remove('show');
    })
  }
)