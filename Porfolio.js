// JavaScript for Sidebar Toggle
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("open");
});
