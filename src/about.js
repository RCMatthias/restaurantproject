import createTabs from "./createTabs";

export default function aboutPage()  {
    const element = document.getElementById("content");
    const aboutDiv = document.createElement('div')
    
  

   /*  element.innerHTML=""; */
   document.getElementById("content").replaceChildren();
   createTabs();


    aboutDiv.innerHTML="OAK voert een eigentijdse keuken waarbij inspiraties van over de hele wereld tot uiting worden gebracht in het menu. Hierbij wordt gebruik gemaakt van met name seizoens- en dagverse producten. De gerechten bestaan uit enkele ingrediënten, waarbij bepaalde verwerkingen ervoor zorgen dat elk gerecht hoog op smaak is."
    
    element.appendChild(aboutDiv);
    return element; 
}