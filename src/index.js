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
  
savedTheme()
input.addEventListener('change', (e) => {
        
    if (input.checked === true) {
        
        body.classList.remove(light)
        body.classList.add(dark)

        localStorage.setItem('class', dark);
        localStorage.setItem('checked', true);

        let lockalBool = localStorage.getItem('checked');

        input.setAttribute('checked', lockalBool)
    
    }
    if (input.checked===false) {
        body.classList.remove(dark);
        body.classList.add(light);
        
        localStorage.setItem('class', light);
        localStorage.setItem('checked', false);
        let lockalBool = localStorage.getItem('checked');

        input.setAttribute('checked',lockalBool)
       }

});




function savedTheme() {
   let className = localStorage.getItem('class');
    let lockalBool = localStorage.getItem('checked');
    const bodyCurrentClass = body.className
    console.log(bodyCurrentClass);
    if (lockalBool !== null) {
       
        input.setAttribute('checked', lockalBool)
         body.classList.add(className)

    }
    
}



