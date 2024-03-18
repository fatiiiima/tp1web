function changerPolice() {
    var Element = document.getElementById("police");
    var selectedPolice = Element.value;
    var paragrapheElement = document.getElementById("paragraphe");
    paragrapheElement.style.fontFamily = selectedPolice;
}

function changercouleur() {
    var element = document.getElementById("color");
    var selectedcouleur = element.value;
    var paragrapheElement = document.getElementById("paragraphe");
    paragrapheElement.style.color = selectedcouleur;
}
function changertaille() {
    var Element = document.getElementById("number");
    var selectedtaille = Element.value;
    var paragrapheElement = document.getElementById("paragraphe");
    paragrapheElement.style.fontSize = selectedtaille + "px";
}