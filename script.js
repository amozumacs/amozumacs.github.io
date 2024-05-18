function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    toggleDarkMode(!wasDarkmode);
}

function toggleDarkMode(isDarkmode) {
    document.body.classList.toggle('dark-mode', isDarkmode);
    document.querySelector('.header-block').classList.toggle('dark-header-block', isDarkmode);
    document.querySelector('.footer').classList.toggle('dark-footer-block', isDarkmode);
    document.querySelectorAll('.content-block').forEach(el => el.classList.toggle('dark-content-block', isDarkmode));
}

function onload() {
    const isDarkmode = localStorage.getItem('darkmode') === 'true';
    toggleDarkMode(isDarkmode);
}

document.addEventListener('DOMContentLoaded', onload);