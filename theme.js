const themeCheckbox = document.getElementById('theme-checkbox');
const htmlElement = document.documentElement;

// Apply saved theme and sync checkbox on load
const savedTheme = localStorage.getItem('theme') || 'light';

if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    if (themeCheckbox) themeCheckbox.checked = true;
}

if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
        if (themeCheckbox.checked) {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    });
}