burger = document.querySelector('.burger')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
navbar = document.querySelector('.navbar')


burger.addEventListener('click',()=>{
  rightNav.classList.toggle('v-class');
  navlist.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');

})
