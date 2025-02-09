document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("side-menu");
    const closeMenu = document.getElementById("close-menu");
    const overlay = document.getElementById("overlay");
    const bestsellers = document.getElementById("bestsellers");
    const newdrops = document.getElementById("newdrops");
    const men = document.getElementById("men");
    const women = document.getElementById("women");
    const aboutgshock = document.getElementById("aboutgshock");
    const findastore = document.getElementById("findastore");

    // Open Side Menu
    hamburger.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });
    bestsellers.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });
    newdrops.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });
    men.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });
    women.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });
    aboutgshock.addEventListener("click", function () {
        sideMenu.classList.add("open");
        overlay.classList.add("active");
    });
    findastore.addEventListener("click", function () {
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

