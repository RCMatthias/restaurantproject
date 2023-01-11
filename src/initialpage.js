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
    

    aboutDiv.innerHTML="OAK voert een eigentijdse keuken waarbij inspiraties van over de hele wereld tot uiting worden gebracht in het menu. Hierbij wordt gebruik gemaakt van met name seizoens- en dagverse producten. De gerechten bestaan uit enkele ingrediënten, waarbij bepaalde verwerkingen ervoor zorgen dat elk gerecht hoog op smaak is."

    header.innerHTML = "Oak Restaurant: Fine Dining Experiences    "
    element.appendChild(header);
    element.appendChild(imageDiv);
    element.appendChild(aboutDiv);
    

    return element; 
}