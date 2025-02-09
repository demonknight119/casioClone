document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");
    const overlay = document.getElementById("overlay");

    // Open Side Menu
    hamburger.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });

    // Close Side Menu
    closeMenu.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        overlay.classList.remove("active");
    });

    // Close when clicking outside
    overlay.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        overlay.classList.remove("active");
    });
});


// slider

let slideIndex = 0;
        const slides = document.querySelectorAll(".slider img");
        const totalSlides = slides.length;

        function moveSlide(step) {
            slideIndex += step;
            if (slideIndex < 0) slideIndex = totalSlides - 1;
            if (slideIndex >= totalSlides) slideIndex = 0;
            document.querySelector(".slider").style.transform = `translateX(-${slideIndex * 100}vw)`;
        }






        // {
        //     "variant" : "",
        //     "image" : "",
        //     "title" : "",
        //     "type"  : "",
        //     "price" : ""
        //   }