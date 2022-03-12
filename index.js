// javascript for index.html, about.html
window.onload = function()
{
    /* navbar */
    window.onscroll = function () {stick()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function stick()
    {
        if (window.pageYOffset >= sticky)
        {navbar.classList.add("sticky")}
        else {navbar.classList.remove("sticky");}
    }
    /* navbar */

    /* slideshow */
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3750); // Change image every 2 seconds
    }
    /* slideshow */
}