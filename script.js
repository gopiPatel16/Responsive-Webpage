// Function to resize the page based on screen width
function resizePage() {
  const screenWidth = window.innerWidth;
  const body = document.body;

  if (screenWidth > 992 && screenWidth <= 1600) {
    body.style.transform = "scale(0.9)";
    body.style.transformOrigin = "0 0";
  } else if (screenWidth >= 700 && screenWidth <= 767) {
    body.style.transform = "scale(0.8)";
    body.style.transformOrigin = "0 0";
  } else if (screenWidth >= 600 && screenWidth < 700) {
    body.style.transform = "scale(0.75)";
    body.style.transformOrigin = "0 0";
  } else if (screenWidth <= 600) {
    body.style.transform = "scale(0.5)";
    body.style.transformOrigin = "0 0";
  } else {
    body.style.transform = "scale(1)";
  }
}

// Event listener for window resize
window.addEventListener("resize", resizePage);

// Initial call
resizePage();

// Toggle left menu visibility
document.getElementById("toggle-menu").addEventListener("click", () => {
  const leftMenu = document.querySelector(".left-menu");
  leftMenu.classList.toggle("collapsed");
});

// Additional CSS for collapsed menu
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    .left-menu.collapsed {
      display: none;
    }
  </style>`
);
