export default function contactPage()  {
    const element = document.getElementById("content");
    const contactForm = document.createElement('div')

    contactForm.innerHTML = "contact us here:";

    element.appendChild(contactForm);
    
    return element; 
}