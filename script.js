const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


const tasks = document.querySelectorAll(".task");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

lucide.createIcons();

tasks.forEach(task => {
    task.addEventListener("click", () => {
        task.classList.toggle("completed");
    });
});