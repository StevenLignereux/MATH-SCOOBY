var i = 0;
var tableau = [];

document.getElementById("envoyer-1").addEventListener("click", function () {

    var taille = document.getElementById("taille").value;
    
    document.getElementById("envoyer-2").addEventListener("click", function () {
        
        if (i < taille) {
            
            var chiffre = document.getElementById("tab").value;
            tableau.push(chiffre);
            i++;
        }

    });

});