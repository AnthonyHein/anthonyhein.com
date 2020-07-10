$(document).ready(function() {
    
    $("#intro-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#intro").offset().top - 100
        }, 1000);
    });
    $("#education-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#education").offset().top - 100
        }, 1000);
    });
    $("#work-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#work").offset().top - 100
        }, 1000);
    });
    $("#languages-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#languages").offset().top - 100
        }, 1000);
    });
    $("#extra-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#extra").offset().top - 100
        }, 1000);
    });
    $("#contact-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top - 100
        }, 1000);
    });
        $("#projects-btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projects").offset().top - 100
        }, 1000);
    });

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");
    var intro = document.getElementById("work");
    

    // Get the offset position of the navbar
    var sticky = intro.offsetTop - 150;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
    
});