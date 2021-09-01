import './sass/main.scss';
import refs from './refs/refs_html.js'
const { body, ul, input } = refs;
import data from './menu.json'
import template from './templates/menu.hbs'
//Розмітка
const item = template(data)
ul.insertAdjacentHTML('beforeend', item)
//Переключення теми
const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};
const {light, dark} = theme;
 
body.classList.add(
  localStorage.getItem('theme') === null ? light : localStorage.getItem('theme')
);
if (body.classList.value === dark) {
    input.checked = true;
};

input.addEventListener('change', () => {
    if (input.checked === true) {
        body.classList.remove(light)
        body.classList.add(dark)
        localStorage.setItem('theme', dark);
        }
    if (input.checked === false) {
        body.classList.remove(dark);
        body.classList.add(light);
        localStorage.setItem('theme', light);
        }
});
