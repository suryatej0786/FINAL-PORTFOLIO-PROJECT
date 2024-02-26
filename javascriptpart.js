
document.querySelectorAll('.javaimage a, .cssimage a, .javascriptimage a, .angularjsimage a, .premiere a, .javaimage a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior:'smooth'
        });
    });
});
document.getElementById('toggleNav').addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'flex' : 'none';
    document.querySelector('.leftpanel').classList.toggle('expanded');
});

//second nav bar smooth transition

// Get the navbar and its offset position
// Get the navbar and its offset position
var navbar = document.querySelector('.navbarsecond');
var sticky = navbar.offsetTop;

// Function to add or remove the sticky class based on scrolling
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Event listener for scrolling
window.addEventListener('scroll', stickyNavbar);

// Event listener for toggling the navbar items on bars symbol click
document.getElementById('toggleNavsecond').addEventListener('click', function () {
    var navbarItems = document.querySelectorAll('.navbarsecond a');
    navbarItems.forEach(item => {
        item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
    });
});
