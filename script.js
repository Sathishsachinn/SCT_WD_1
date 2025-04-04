// Change navbar background color on scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById("explore-btn").addEventListener("click", function(){
    window.location.href = "https://www.redbull.com/";
});