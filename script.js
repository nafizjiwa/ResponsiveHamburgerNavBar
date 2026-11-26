// TO MAKE THE TOGGLE BUTTON HIDE AND SHOW THE MENU BAR MUST USE JAVASCRIPT

// first save toggle button
const navbarToggle = document.querySelector('.navbar-toggle');
// second save navbar menu
const navbarMenu = document.querySelector('.navbar-menu');

// then add a click event to toggle button
navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
  //then create active in css to make visible 
});
