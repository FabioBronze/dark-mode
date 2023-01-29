"use strict";
const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
};

const loadTheme = () => {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toggleDarkMode();
  }
};

loadTheme();

document.querySelector("#change-theme").addEventListener("change", () => {
  toggleDarkMode();
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
