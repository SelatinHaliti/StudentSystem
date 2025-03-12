window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav-bar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
        navbar.style.background = "rgba(255, 255, 255, 0.1)";
    }
});

document.getElementById("start-btn").addEventListener("click", function () {
    this.style.transform = "scale(0.9)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 200);
    alert("Let's get started!");
});

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        this.innerText = "☀️ Light Mode";
    } else {
        this.innerText = "🌙 Dark Mode";
    }
});
