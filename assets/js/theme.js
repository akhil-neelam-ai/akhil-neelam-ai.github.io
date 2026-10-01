(() => {
  const buttons = document.querySelectorAll("[data-theme-toggle]");
  const root = document.documentElement;

  const updateButtons = () => {
    const isDark = root.dataset.theme === "dark";
    buttons.forEach((button) => {
      button.textContent = isDark ? "Use light theme" : "Use dark theme";
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = nextTheme;
      try {
        localStorage.setItem("akhil-site-theme", nextTheme);
      } catch {
        // The theme still changes for this page if storage is unavailable.
      }
      updateButtons();
    });
  });

  updateButtons();
})();
