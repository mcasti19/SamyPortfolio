// const changeThemeButton = document.getElementById('changeTheme');
// const darkThemeLink = document.getElementById('dark-theme');

// changeThemeButton.addEventListener('click', () => {
//     if (changeThemeButton.getAttribute('aria-pressed') === 'false') {
//         darkThemeLink.removeAttribute('disabled');
//         changeThemeButton.setAttribute('aria-pressed', 'true');
//         changeThemeButton.innerText = "Light";
//     } else {
//         darkThemeLink.setAttribute('disabled', '');
//         changeThemeButton.setAttribute('aria-pressed', 'false');
//         changeThemeButton.innerText = "Dark";
//     }
// });


const darkThemeLink = document.getElementById('dark-theme');

const darkTheme = () => {
    darkThemeLink.removeAttribute('disabled');
    document.querySelector('#dl-icon').setAttribute('class', 'bi bi-brightness-high-fill');
}
const lightTheme = () => {
    darkThemeLink.setAttribute('disabled', '');
    document.querySelector('#dl-icon').setAttribute('class', 'bi bi-moon-stars-fill');
}

const changeTheme = () => {
    darkThemeLink.getAttribute('disabled') === '' ?
        darkTheme() : lightTheme();
} 