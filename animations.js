document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    let navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    window.addEventListener("scroll", function() {
        let scrollPosition = window.pageYOffset;
        let headerBg = document.querySelector("header::before");
        headerBg.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    });
});
