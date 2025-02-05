document.addEventListener("DOMContentLoaded", function () {
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
  function expandSearch() {
    searchWrapper.classList.add("expanded");
    closeSearchBtn.style.display = "block";
    middleNav.classList.add("hidden");
    searchInput.placeholder = "";
    searchInput.focus();
  }

  function collapseSearch() {
    searchWrapper.classList.remove("expanded");
    closeSearchBtn.style.display = "none";
    middleNav.classList.remove("hidden");
    searchInput.value = "";
    searchInput.blur();
  }

  // Search Event Listeners
  searchBtn.addEventListener("click", expandSearch);
  searchInput.addEventListener("click", expandSearch);
  closeSearchBtn.addEventListener("click", collapseSearch);

  // Close search when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideSearch = searchWrapper.contains(event.target);
    if (!isClickInsideSearch && searchWrapper.classList.contains("expanded")) {
      collapseSearch();
    }
  });

  // Side Menu Functions
  function openMenu() {
    sideMenu.classList.add("active");
    overlay.style.display = "block";
    // document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
  }

  // Side Menu Event Listeners
  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // Submenu Toggle Functionality
  const collapseBtns = document.querySelectorAll(".collapse-btn");
  collapseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const menuItem = this.closest(".menu-item");
      const submenu = menuItem.nextElementSibling;
      const icon = this.querySelector("i");

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

  // Prevent search wrapper click from closing itself
  searchWrapper.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
