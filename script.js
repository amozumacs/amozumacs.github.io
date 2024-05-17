function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);

    document.querySelector('.header-block').classList.toggle('dark-header-block', !wasDarkmode);
    document.querySelector('.footer').classList.toggle('dark-footer-block', !wasDarkmode);
    document.querySelectorAll('.content-block').forEach(el => el.classList.toggle('dark-content-block', !wasDarkmode));
}

function onload() {
    const isDarkmode = localStorage.getItem('darkmode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkmode);

    document.querySelector('.header-block').classList.toggle('dark-header-block', isDarkmode);
    document.querySelector('.footer').classList.toggle('dark-footer-block', isDarkmode);
    document.querySelectorAll('.content-block').forEach(el => el.classList.toggle('dark-content-block', isDarkmode));
}

window.onload = onload;

