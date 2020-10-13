const body = document.querySelector('body');
const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');
const symbolToggle = document.getElementById('symbol-toggle');
const navButton = document.querySelector('nav button');
const navLinks = document.querySelectorAll('.nav-links');
const upArrows = document.querySelectorAll('.back');

/**
 * Use CSS to open and close hamburger menu
 */

const openMenu = () => {
  symbolToggle.classList.remove('fa-bars');
  symbolToggle.classList.add('fa-times');
  navButton.setAttribute('aria-expanded', true);
};

const closeMenu = () => {
  symbolToggle.classList.remove('fa-times');
  symbolToggle.classList.add('fa-bars');
  navButton.setAttribute('aria-expanded', false);
};

/*
 Set up event listeners for menu links
*/

navLinks.forEach((link) =>
  link.addEventListener('click', function(e) {
    mainNav.classList.toggle('active');
    closeMenu();
  })
);

/*
 Set up event listeners for up arrows
 remove focus
*/

upArrows.forEach((upArrow) =>
  upArrow.addEventListener('click', function(e) {
    upArrow.blur();
  })
);

/*
 Set up event listener for hamburger icons
*/

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
  if (symbolToggle.classList.contains('fa-bars')) {
    openMenu();
  } else {
    closeMenu();
  }
});

/*
  On page refresh, get rid on annoying fragment link
 */

//check for Navigation Timing API support
if (window.performance) {
  if (performance.navigation.type == 1) {
    // remove fragment as much as it can go without adding an entry in browser history:
    window.location.replace('#');

    // slice off the remaining '#' in HTML5:
    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1));
    }
    window.scrollTo(0, 0);
  }
}
