console.log("page chargée")

var tableauScore = document.getElementById("tableauScore");
// convertion en tableau
var tCookie = document.cookie.split('; ')

// création d'un faux tableau cookie pour plus de simplicitée
//var tCookie = ["1550=Richard", "2600=Sandrine", "3500=Pascal", "1950=Christian"]

console.log(tCookie)
tCookie.sort();
tCookie.reverse();
console.log("tableau trié " +tCookie)

for(let i = 0; i < tCookie.length; i++) {
    // console.log("le score est :" + tCookie[i].split("=")[0]) // enleve le = et après
    // console.log("le nom est :" + tCookie[i].split("=")[1]) // enleve le = et avant
    var nom = tCookie[i].split("=")[1];
    var score = tCookie[i].split("=")[0]

    tableauScore.innerHTML += "<tr><th>" + nom + "</th>" + "<th>" + score + "</th></tr>";
}

console.log(tCookie)