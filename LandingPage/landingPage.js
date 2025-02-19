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

  // Get elements
  const slider = document.querySelector(".product-slider");
  const newDropsProgressBar = document.querySelector(".progress-bar");
  const prevBtn = document.querySelector(".nav-btn.prev");
  const nextBtn = document.querySelector(".nav-btn.next");
  const wishlistIcons = document.querySelectorAll(".wishlist-icon i");

  // Update progress bar
  const updateProgress = () => {
    const scrollPercentage =
      (slider.scrollLeft / (slider.scrollWidth - slider.clientWidth)) * 100;
    newDropsProgressBar.style.width = `${scrollPercentage}%`;
  };

  // Scroll slider
  const scroll = (direction) => {
    const scrollAmount = slider.clientWidth * 0.8; // Scroll 80% of visible width
    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Event Listeners
  slider.addEventListener("scroll", updateProgress);
  nextBtn.addEventListener("click", () => scroll("next"));
  prevBtn.addEventListener("click", () => scroll("prev"));

  // Wishlist toggle
  wishlistIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("fa-regular");

      // Optional: Add heart animation
      icon.style.transform = "scale(1.2)";
      setTimeout(() => {
        icon.style.transform = "scale(1)";
      }, 200);
    });
  });
  updateProgress();

  const topicsContainer = document.querySelector(".topics-container");
  const topicsPrevBtn = document.querySelector(".topics-nav-btn.prev");
  const topicsNextBtn = document.querySelector(".topics-nav-btn.next");
  const topicsProgressBar = document.querySelector(".topics-progress-bar");
  const topicsScroll = (direction) => {
    const scrollAmount = topicsContainer.clientWidth * 0.8;
    topicsContainer.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Update progress bar
  const updateTopicsProgress = () => {
    const scrollPercentage =
      (topicsContainer.scrollLeft /
        (topicsContainer.scrollWidth - topicsContainer.clientWidth)) *
      100;
    topicsProgressBar.style.width = `${scrollPercentage}%`;
  };

  topicsNextBtn.addEventListener("click", () => topicsScroll("next"));
  topicsPrevBtn.addEventListener("click", () => topicsScroll("prev"));
  topicsContainer.addEventListener("scroll", updateTopicsProgress);
  updateTopicsProgress();

  // Product Category Slider
  const productContainer = document.querySelector(
    ".product-category-container"
  );
  const productPrevBtn = document.querySelector(".products-nav-btn.prev");
  const productNextBtn = document.querySelector(".products-nav-btn.next");
  const productProgressBar = document.querySelector(
    ".product-category-progress-bar"
  );

  const productScroll = (direction) => {
    const scrollAmount = productContainer.clientWidth * 0.8;
    productContainer.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Update progress bar
  const updateProductProgress = () => {
    const scrollPercentage =
      (productContainer.scrollLeft /
        (productContainer.scrollWidth - productContainer.clientWidth)) *
      100;
    productProgressBar.style.width = `${scrollPercentage}%`;
  };

  productNextBtn.addEventListener("click", () => productScroll("next"));
  productPrevBtn.addEventListener("click", () => productScroll("prev"));
  productContainer.addEventListener("scroll", updateProductProgress);

  // Initial progress
  updateProductProgress();
});
