import aboutPage from './about.js'
import contactPage from './contact.js';
import { clickHandler } from './helpers.js';

export default function createTabs() {
    const element = document.getElementById("content");
    const navBar = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');

    btn1.textContent="About";
    btn2.textContent="Contact";
    btn3.textContent="test3";

    navBar.appendChild(btn1);  
    navBar.appendChild(btn2);
    navBar.appendChild(btn3);
    navBar.classList.add("navbar")

    clickHandler(btn1, aboutPage);
    clickHandler(btn2, contactPage);


    element.appendChild(navBar);



    return element;
}

