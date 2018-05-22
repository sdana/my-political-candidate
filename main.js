const mainArticle = document.querySelector("#my-candidate");

function addMissionStatement(){
    const missionStatementSection = document.createElement("section");
    let missionStatementHeader = document.createElement("h1");
    let missionStatementHeaderText = document.createTextNode("Mission Statement");
    let missionStatementTextP = document.createElement("p");
    let missionStatementText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum sodales neque sed semper. Fusce molestie magna sit amet lacus vulputate, a molestie mauris aliquet. Etiam ut felis in nunc tincidunt varius vel nec orci. Donec velit metus, pellentesque consequat sollicitudin et, consectetur sit amet nisl. Nullam vel tristique purus, at faucibus dolor. Nulla eu auctor lorem. Proin quis nibh nec elit tempus condimentum ut sit amet risus. Praesent ac nibh viverra, aliquet orci sed, fermentum dolor. Nam rhoncus sagittis tellus eu suscipit.");
    
    missionStatementHeader.style.fontSize = "xx-large";
    
    // missionStatementSection.appendChild(missionStatementHeader);
    // missionStatementHeader.appendChild(missionStatementHeaderText);
    // missionStatementTextP.appendChild(missionStatementText);
    // missionStatementSection.appendChild(missionStatementTextP);

    mainArticle.appendChild(missionStatementSection).appendChild(missionStatementHeader).appendChild(missionStatementHeaderText);
    mainArticle.appendChild(missionStatementTextP).appendChild(missionStatementText);
    console.log(missionStatementText);
}
function addAttribute(){
    let congressionalDisctrict = document.createAttribute("congressional-district");
    congressionalDisctrict.value = "5th District";
    mainArticle.setAttributeNode(congressionalDisctrict);
    console.log(mainArticle.attributes);
}


addMissionStatement();
addAttribute();

console.log(mainArticle.getAttribute("congressional-district"));
mainArticle.setAttribute("congressional-district", "6th District");
console.log(mainArticle.getAttribute("congressional-district"));

