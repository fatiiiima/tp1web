function generer(max,min){
    return Math.floor(Math.random() * (max-min +1)) +min;
}
function jouer(){
    var niv=prompt("niveau de difficulté: facile-intermediaire-difficile");
    var tentatives;
        var nbr;
    switch (niv) {
        case "facile":
            tentatives=10;
            nbr=generer(10,20);
            break;
        case "intermediaire":
            tentatives=8;
            nbr=generer(10,30);
            break;
        case "difficile":
            tentatives=5;
            nbr=generer(10,40);
            break;
    }
    while(tentatives>0){
        var n=parseInt(prompt("devinez le nombre"));
        if(nbr<n) {
            alert("plus petit");
        }
        else if(nbr>n) {
            alert("plus grand");
        }
        if(n===nbr){
            alert("vous avez gagné le numero est bien "+nbr);
            tentatives=1;
        }
        tentatives--;
    }
    if(tentatives===0 && n!=nbr){
        alert("vous avez perdu . le nombre est "+nbr);
    }
}
function jeu(){
    var essai="oui";
    while(essai==="oui"){
        jouer();
        essai=prompt("jouer de nouveau ? oui-non");
    }
}
jeu();
