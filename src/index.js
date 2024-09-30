import loadHome from './loadPage.js';
import loadMenu from './loadMenu.js';
import loadAbout from './loadAbout.js';
import loadSidebars from './loadSidebars.js';

// loadHome();
loadMenu();
// loadSidebars();

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', loadHome);

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', loadMenu);

const aboutBtn = document.getElementById('about');
aboutBtn.addEventListener('click', loadAbout);