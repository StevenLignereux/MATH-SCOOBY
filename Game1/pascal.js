document.getElementById("valider").addEventListener("click", function () {
    var taille = document.getElementById("infos").value;
    afficherTriangle(TrianglePascal(taille));
});

document.getElementById("valider-1").addEventListener("click", function () {
    var taille = document.getElementById("stern").value;
    afficherStern(Stern(taille));
});

function TrianglePascal(taille) {
    var tab = new Array();

    for (var n = 0; n < taille; n++){ // parcours le nombre de lignes de 0 à 3
        tab[n] = new Array();

        for (var p = 0; p < n + 1; p++) {
            
            if (p == 0 || p == n) {
                tab[n][p] = 1;
            } else {
                tab[n][p] = tab[n - 1][p] + tab[n - 1][p - 1];
            }
        }
    }
    return tab;
}

function afficherTriangle(tab){

    for (var i = 0; i < tab.length; i++) {
        
        for (var j = 0; j < tab[i].length; j++) {
            document.getElementById("res").innerHTML += tab[i][j] + " ";
        }
        document.getElementById("res").innerHTML += "<br>";
    }
}

function Stern(numero) {
    var tab1 = TrianglePascal(numero+100);
    
    var tab2 = [];
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);

    for(var i = 4; i < numero; i++){
        var sum = 0;
        var newVal = Math.trunc(i / 2);
        for(var j = 0; j < newVal+1;j++){
            sum += tab1[i - j][j] % 2;
        }
        tab2.push(sum);
    }
    return tab2;
}