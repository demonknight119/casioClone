document.addEventListener("DOMContentLoaded", () => {
  // Search elements
  const searchWrapper = document.querySelector(".search-wrapper");
  const searchInput = document.querySelector("#search-input");
  const searchBtn = document.querySelector(".search-btn");
  const closeSearchBtn = document.querySelector(".close-search");
  const middleNav = document.querySelector(".mainNavbarDiv-middle-div");

  // Menu elements
  const menuBtn = document.querySelector(".menu-toggle");
  const sideMenu = document.querySelector(".sideMenuDiv");
  const closeBtn = document.querySelector(".close-menu");
  const overlay = document.querySelector(".menu-overlay");

  // Search Functions
  const expandSearch = () => {
    searchWrapper.classList.add("expanded");
    closeSearchBtn.style.display = "block";
    middleNav.classList.add("hidden");
    searchInput.placeholder = "";
    searchInput.focus();
  };

  const collapseSearch = () => {
    searchWrapper.classList.remove("expanded");
    closeSearchBtn.style.display = "none";
    middleNav.classList.remove("hidden");
    searchInput.value = "";
    searchInput.blur();
  };

  // Search Event Listeners
  searchBtn.addEventListener("click", expandSearch);
  searchInput.addEventListener("click", expandSearch);
  closeSearchBtn.addEventListener("click", collapseSearch);

  // Close search when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideSearch = searchWrapper.contains(event.target);
    if (!isClickInsideSearch && searchWrapper.classList.contains("expanded")) {
      collapseSearch();
    }
  });

  // Side Menu Functions
  const openMenu = () => {
    sideMenu.classList.add("active");
    overlay.style.display = "block";
    // document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeMenu = () => {
    sideMenu.classList.remove("active");
    overlay.style.display = "none";
    //document.body.style.overflow = ""; // Restore scrolling
  };

  // Side Menu Event Listeners
  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // Submenu Toggle Functionality
  const collapseBtns = document.querySelectorAll(".collapse-btn");
  collapseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const menuItem = btn.closest(".menu-item");
      const submenu = menuItem.nextElementSibling;
      const icon = btn.querySelector("i");

      if (submenu && submenu.classList.contains("submenu")) {
        if (submenu.style.display === "block") {
          // Hide submenu
          submenu.style.display = "none";
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
        } else {
          // Show submenu
          submenu.style.display = "block";
          icon.classList.remove("fa-plus");
          icon.classList.add("fa-minus");
        }
      }
    });
  });

  //adding carousel functionality
  const carousel = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  let currentSlide = 0;

  const slideCount = slides.length;

  const updateSlide = () => {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= slideCount - 1) {
      currentSlide = 0;
    }
    updateSlide();
  };

  const prevSlide = () => {
    currentSlide = currentSlide - 1;
    if (currentSlide < 0) {
      currentSlide = slideCount - 1;
    }
    updateSlide();
  };

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});
