function couleurAleatoire() {
    var symbol="0123456789abcdef";
    var color="#";
    for(var i=0;i<6;i++){
        color=color+symbol[Math.floor(Math.random()*16)];
    }
    return color;
  }

  var maListe = document.getElementById("maListe");

  maListe.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      event.target.style.color = couleurAleatoire();
    }
  });