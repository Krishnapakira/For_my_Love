// Music Play on Button Click
document.getElementById("playMusic").addEventListener("click", function () {
    document.getElementById("bg-music").play();
});

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
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
