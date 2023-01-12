export default function initialPage()  {
    const element = document.getElementById("content");
    const imageDiv = document.createElement('img');
    const aboutDiv = document.createElement('div')
    const header = document.createElement('h1')
    imageDiv.src = "./oaklogo.jpg";
    imageDiv.innerHTML = "";
    imageDiv.alt="Oak Logo";
    imageDiv.classList += "logo"; 
    imageDiv.width="200"; 
    imageDiv.height="200";
    
    header.innerHTML = "Oak Restaurant: Fine Dining Experiences    "
    element.appendChild(header);
    element.appendChild(imageDiv);
    element.appendChild(aboutDiv);
    
    return element; 
}

import { emptyPage } from "./helpers";