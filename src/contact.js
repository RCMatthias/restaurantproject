import createTabs from "./createTabs";

export default function contactPage()  {
    const element = document.getElementById("content");
    const contactForm = document.createElement('div')

    document.getElementById("content").replaceChildren();
    createTabs();
    contactForm.innerHTML = "contact us here:";

    element.appendChild(contactForm);
    
    return element; 
}