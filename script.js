 // Get the elements
 const menu = document.getElementById('menu-icon');
 const mobileMenu = document.getElementById('header__navbar');

 // Function to toggle the mobile menu
 menu.addEventListener('click', () => {
   mobileMenu.classList.toggle('open');
 }); 