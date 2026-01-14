document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle")
  const label = document.getElementById("themeLabel")
  const icon = document.getElementById("themeIcon")

  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") toggle.checked = true

  function updateUI() {
    const isLight = toggle.checked
    label.textContent = isLight ? "Light Mode" : "Dark Mode"
    icon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon"
    document.body.dataset.theme = isLight ? "light" : "dark"
    localStorage.setItem("theme", isLight ? "light" : "dark")
  }

  toggle.addEventListener("change", updateUI)
  updateUI()
})
