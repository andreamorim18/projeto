document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  const icon = document.getElementById("themeIcon");
  const switchEl = document.getElementById("themeSwitch");
  if (!toggle || !label || !icon || !switchEl) return;

  function getInitialTheme() {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light") return true;
      if (saved === "dark") return false;
    } catch {}
    return window.matchMedia("(prefers-color-scheme: light)").matches;
  }

  function applyTheme(isLight, save = true) {
    toggle.checked = isLight;
    label.textContent = isLight ? "Light Mode" : "Dark Mode";
    icon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
    switchEl.setAttribute("aria-checked", String(isLight));
    document.body.dataset.theme = isLight ? "light" : "dark";
    if (save) localStorage.setItem("theme", isLight ? "light" : "dark");
  }

  applyTheme(getInitialTheme(), false);
  toggle.addEventListener("change", () => applyTheme(toggle.checked, true));
  switchEl.addEventListener("click", () => setTimeout(() => applyTheme(toggle.checked, true), 0));
});