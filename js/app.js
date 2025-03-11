/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/
const sectionsList = document.querySelectorAll('section');

const navList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function makeAnchor(section) {


  let a = document.createElement('a');

  a.textContent = section.dataset.nav;

  a.href = '#' + section.id;

  a.className = 'menu__link';

return a;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {

  for (let i = 0; i < sectionsList.length; i++) {

    const section = sectionsList[i];

    let listItem = document.createElement('li');

    const a = makeAnchor(section);

    listItem.appendChild(a);

    navList.appendChild(listItem);
  }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const section of sectionsList) {

    const box = section.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) {

      section.classList.add('your-active-class');

      const link = navList.querySelector(`a[href="#${section.id}"]`);

      if (link) {

        link.classList.add('active');
      }
    } else {
      section.classList.remove('your-active-class');

      const link = navList.querySelector(`a[href="#${section.id}"]`);

      if (link) {

        link.classList.remove('active');
      }
    }
  }
}




// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event) {
  if (event.target.nodeName === 'A') {

    event.preventDefault();

    const tarID = event.target.getAttribute('href');

    const tarSect = document.querySelector(tarID);

    tarSect.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav();
// Scroll to section on link click
navList.addEventListener('click', scrollToAnchor);

// Update active section while scrolling
document.addEventListener('scroll', makeActive);

document.addEventListener('scroll', checkActiveSection);
