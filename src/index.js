import './sass/main.scss';

import refs from './refs/refs_html.js'
const { body, ul, input } = refs;
// console.log(ul);

import data from './menu.json'
// console.log(data);

import template from './templates/menu.hbs'
// console.log(template);



//Розмітка
const item = template(data)
// console.log(item);

ul.insertAdjacentHTML('beforeend', item)


//Переключення теми


const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};
const {light, dark} = theme;

input.addEventListener('change', (e) => {
    body.classList.replace(light, dark)
    localStorage.setItem('class', dark);
    localStorage.setItem('checked', true);
    if (!input.checked) {
        body.classList.replace(dark, light)

        localStorage.setItem('class', light);
        localStorage.setItem('checked', false);
    
    }
    if (input.checked) {

         body.classList.replace(light, dark)
    localStorage.setItem('class', dark);
    localStorage.setItem('checked', true);
       }

});


savedTheme()


function savedTheme() {
    body.classList.add(light)
    input.checked = false;
 let className = localStorage.getItem('class');
    let lockalBool = localStorage.getItem('checked');
    if (className === light || dark) {
        console.log('uyjgh');
        input.checked = lockalBool;
        body.classList.add(className);
    }

}



