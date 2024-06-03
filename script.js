function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    toggleDarkMode(!wasDarkmode);
}

function toggleDarkMode(isDarkmode) {
    document.body.classList.toggle('dark-mode', isDarkmode);
    document.querySelector('.header-block').classList.toggle('dark-header-block', isDarkmode);
    document.querySelector('.footer').classList.toggle('dark-footer-block', isDarkmode);
    document.querySelectorAll('.content-block').forEach(el => {
        el.classList.toggle('dark-content-block', isDarkmode);
        if (el.classList.contains('first-block')) {
            el.classList.toggle('dark-first-block', isDarkmode);
        }
        if (el.classList.contains('second-block')) {
            el.classList.toggle('dark-second-block', isDarkmode);
        }
        if (el.classList.contains('about-block')) {
            el.classList.toggle('dark-about-block', isDarkmode);
        }
    });

    document.querySelector('.center-item i').classList.toggle('selected-color', isDarkmode);
}

function onload() {
    const isDarkmode = localStorage.getItem('darkmode') === 'true';
    toggleDarkMode(isDarkmode);
}

document.addEventListener('DOMContentLoaded', onload);

function adjustLayout() {
    var screenWidth = window.innerWidth;

    if (screenWidth < 340) {
        var blocks = document.querySelectorAll('.text-side');

        blocks.forEach(function(block) {
            block.classList.remove('left-side');
            block.classList.remove('right-side');
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    adjustLayout();

    window.addEventListener('resize', adjustLayout);
});
