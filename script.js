document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  const icon = document.getElementById("themeIcon");
  const switchEl = document.getElementById("themeSwitch");

  const applyTheme = (theme, save = true) => {
    document.body.dataset.theme = theme;
    label.textContent = theme === "light" ? "Light Mode" : "Dark Mode";
    icon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    switchEl.setAttribute("aria-checked", theme === "light");
    if (save) localStorage.setItem("theme", theme);
  };

  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = stored || (prefersLight ? "light" : "dark");
  applyTheme(theme, false);

  toggle.checked = theme === "light";
  toggle.addEventListener("change", () =>
    applyTheme(toggle.checked ? "light" : "dark")
  );
});