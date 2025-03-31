/* General Styling */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(to right, #ff9a9e, #fad0c4);
    color: white;
    margin: 0;
    padding: 0;
}

/* Music Button */
button {
    background: #ff4d6d;
    border: none;
    padding: 12px 24px;
    color: white;
    font-size: 18px;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #ff1e4d;
    transform: scale(1.1);
}

/* Floating Hearts Animation */
.hearts {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 50% 80%, 20% 100%, 0% 35%);
    animation: float 5s linear infinite;
}

@keyframes float {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh);
        opacity: 0;
    }
}

/* Animated Images */
.gallery {
    margin-top: 50px;
}

.animated-img {
    width: 200px;
    margin: 10px;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.5s ease-in-out;
}
