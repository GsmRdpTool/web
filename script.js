// Slideshow control
let slideIndex = 0;
let slides, dots;

function ShowSlide(direction) {
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Change index based on direction
    if (direction === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }

    // Wrap around
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // Show the selected slide
    slides[slideIndex].style.display = "block";
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add("active");
    }
}

// Autoplay slides every 5 seconds (optional)
setInterval(() => {
    ShowSlide(1);
}, 5000);

window.addEventListener("load", () => {
    ShowSlide(1); // Show the first slide
    document.querySelector(".loading").style.display = "none";
});

// Modal log viewer
function OpenLog(numLog) {
    const data = document.querySelector(`.log-${numLog}-data`).innerText;
    document.querySelector(".LogInfoBody").textContent = data;

    // Trigger modal open using Materialize
    const modal = document.getElementById("modalLogInfo");
    const instance = M.Modal.getInstance(modal) || M.Modal.init(modal);
    instance.open();
}

// Copy to clipboard
function SelfCopy(copyArea) {
    const text = copyArea.innerText || copyArea.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied to clipboard!");
    });
}

// Theme switching
document.addEventListener("DOMContentLoaded", () => {
    const themeKey = "theme";
    const light_mode = "light_mode";
    const dark_mode = "dark_mode";
    const root = document.documentElement;
    const currentTheme = localStorage.getItem(themeKey);
    const switcher = document.querySelector(".theme-switcher");

    if (currentTheme === light_mode) {
        root.classList.remove("dark");
        switcher.innerHTML = dark_mode;
    } else {
        root.classList.add("dark");
        switcher.innerHTML = light_mode;
    }

    switcher.addEventListener("click", () => {
        if (switcher.textContent === light_mode) {
            root.classList.remove("dark");
            switcher.innerHTML = dark_mode;
            localStorage.setItem(themeKey, light_mode);
        } else {
            root.classList.add("dark");
            switcher.innerHTML = light_mode;
            localStorage.setItem(themeKey, dark_mode);
        }
    });
});
