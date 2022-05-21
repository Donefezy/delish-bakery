const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('exit-button');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('nav-active')
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('nav-active')
})
