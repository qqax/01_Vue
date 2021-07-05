import theme from "./theme.js";

theme.coolUpdate();

window.addEventListener('storage', (e) => {
    theme.coolUpdate();
})