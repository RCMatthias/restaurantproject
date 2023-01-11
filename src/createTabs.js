export default function createTabs() {
    const element = document.getElementById("content");
    const navBar = document.createElement('div');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');

    btn1.textContent="test1";
    btn2.textContent="test2";
    btn3.textContent="test3";

    navBar.appendChild(btn1);  
    navBar.appendChild(btn2);
    navBar.appendChild(btn3);
    navBar.classList.add("navbar")

    btn1.addEventListener("click", )
    element.appendChild(navBar);

    return element;
}