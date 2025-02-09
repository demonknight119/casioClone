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


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".Slider");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function moveSlide(step) {
        currentIndex += step;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        showSlide(currentIndex);
    }

    // Auto-slide every 3 seconds
    function autoSlide() {
        moveSlide(1);
        setTimeout(autoSlide, 3000);
    }

    // Start the slider
    showSlide(currentIndex);
    setTimeout(autoSlide, 3000);

    // Attach event listeners for manual controls
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
});


// main-contain

document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://casio-calculator-f3978-default-rtdb.firebaseio.com/calculator.json";
    let calculators = [];

    // Fetch data from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (!data || typeof data !== "object") {
                console.error("Invalid data format:", data);
                return;
            }
            calculators = Object.values(data);
            displayCalculators("All");
        })
        .catch(error => console.error("Error fetching data:", error));

    // Display calculators
    function displayCalculators(category, sortType = "", priceFilters = []) {
        const container = document.querySelector(".calculator-store #calculator-container");
        container.innerHTML = "";

        let filteredData = category === "All" ? calculators : calculators.filter(item => item.type === category);

        // Apply Price Filters
        if (priceFilters.length > 0) {
            filteredData = filteredData.filter(calc => {
                let price = calc.price ? parseInt(calc.price.replace(/[^\d]/g, "")) : 0;
                return priceFilters.some(filter => {
                    if (filter === "below-1000") return price < 1000;
                    if (filter === "1000-2000") return price >= 1000 && price <= 2000;
                    if (filter === "above-2000") return price > 2000;
                    return false;
                });
            });
        }

        // Apply Sorting
        if (sortType === "price-low-high") {
            filteredData.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, "")) - parseInt(b.price.replace(/[^\d]/g, "")));
        } else if (sortType === "price-high-low") {
            filteredData.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, "")) - parseInt(a.price.replace(/[^\d]/g, "")));
        }

        if (filteredData.length === 0) {
            container.innerHTML = "<p>No calculators found.</p>";
            return;
        }

        filteredData.forEach(calc => {
            let price = calc.price ? calc.price.replace("₹", "").trim() : "N/A";
            let card = `
                <div class="card">
                      <div>${calc.variant}</div>
                    <img src="${calc.image || 'placeholder.jpg'}" alt="${calc.title}">
                    <div id="type">${calc.type}</div>
                    <div class="card-title">${calc.title}</div>
                    <div id="currency">${calc.currency}</div>
                    <div class="card-price">₹ ${price}</div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    // Category Selection
    document.querySelectorAll(".calculator-store .category").forEach(tab => {
        tab.addEventListener("click", function () {
            document.querySelectorAll(".calculator-store .category").forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            displayCalculators(this.getAttribute("data-category"));
        });
    });

    // Sorting
    document.querySelector(".calculator-store #calculator-sort").addEventListener("change", function () {
        displayCalculators(document.querySelector(".calculator-store .category.active").getAttribute("data-category"), this.value);
    });

    // Clear Filters
    document.querySelector(".calculator-store #clear-calculator-filters").addEventListener("click", () => {
        document.querySelectorAll(".calculator-store .price-filter").forEach(checkbox => (checkbox.checked = false));
        displayCalculators("All");
    });
});
