// Music Play on Button Click
document.getElementById("playMusic").addEventListener("click", function () {
    document.getElementById("bg-music").play();
});

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Set random position across the full screen
    heart.style.left = Math.random() * 100 + "vw";  // Random X position
    heart.style.top = "100vh"; // Start from the bottom of the screen

    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed

    document.querySelector(".hearts").appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);


// Scroll Animation for Images
window.addEventListener("scroll", function () {
    document.querySelectorAll(".animated-img").forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".animated-image");

    function checkScroll() {
        images.forEach((img) => {
            const position = img.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (position < windowHeight - 100) {
                img.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load
});
document.addEventListener("DOMContentLoaded", function () {
    const loveText = document.querySelector(".love-text");

    function showLoveText() {
        const position = loveText.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            loveText.classList.add("show-love");
        }
    }

    window.addEventListener("scroll", showLoveText);
    showLoveText(); // Run once on load
});
