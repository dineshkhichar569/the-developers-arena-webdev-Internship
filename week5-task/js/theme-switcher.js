const toggleBtn = document.querySelector(".themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  root.classList.toggle("dark");

  if (root.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.style.backgroundColor = "#f7f9fc";
    toggleBtn.style.color = "black";
} else {
    localStorage.setItem("theme", "light");
    toggleBtn.style.backgroundColor = "black";
    toggleBtn.style.color = "#f7f9fc";
  }

  console.log("theme");
});
