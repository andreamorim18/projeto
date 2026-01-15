document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const label = document.getElementById("themeLabel");
  const icon = document.getElementById("themeIcon");
  const switchEl = document.getElementById("themeSwitch");

  if (!toggle || !label || !icon) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") toggle.checked = true;

  function updateUI(save = true) {
    const isLight = toggle.checked;

    label.textContent = isLight ? "Light Mode" : "Dark Mode";
    icon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";

    // Acessibilidade (sincroniza o switch)
    if (switchEl) switchEl.setAttribute("aria-checked", String(isLight));

    // Opcional: dataset (se você quiser usar no CSS no futuro)
    document.body.dataset.theme = isLight ? "light" : "dark";

    // Salva
    if (save) localStorage.setItem("theme", isLight ? "light" : "dark");
  }

  toggle.addEventListener("change", () => updateUI(true));

  // Inicializa sem regravar o localStorage desnecessariamente
  updateUI(false);
});
