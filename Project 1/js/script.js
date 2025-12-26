// Simple entrance animations
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("main img");
  const text = document.querySelector("main p");
  const input = document.querySelector("main input");

  setTimeout(() => {
    logo.style.transition = "all 0.8s ease";
    logo.style.opacity = "1";
    logo.style.transform = "translateY(0)";
  }, 300);

  setTimeout(() => {
    text.style.transition = "all 0.8s ease";
    text.style.opacity = "1";
  }, 700);

  setTimeout(() => {
    input.style.transition = "all 0.8s ease";
    input.style.opacity = "1";
  }, 1100);
});

// Input focus animation
const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
  searchInput.style.boxShadow = "0 12px 30px rgba(211,47,47,0.5)";
});

searchInput.addEventListener("blur", () => {
  searchInput.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
});

// Fake search interaction (frontend only)
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert("Search feature is frontend demo only.");
    searchInput.value = "";
  }
});
