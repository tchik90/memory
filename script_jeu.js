var toutesImg = document.querySelectorAll(".btnImage");
// récuparation des 12 images
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");

// récuparation des 12 images face caché
var img1Cache = document.getElementById("img1Cache");
var img2Cache = document.getElementById("img2Cache");
var img3Cache = document.getElementById("img3Cache");
var img4Cache = document.getElementById("img4Cache");
var img5Cache = document.getElementById("img5Cache");
var img6Cache = document.getElementById("img6Cache");
var img7Cache = document.getElementById("img7Cache");
var img8Cache = document.getElementById("img8Cache");
var img9Cache = document.getElementById("img9Cache");
var img10Cache = document.getElementById("img10Cache");
var img11Cache = document.getElementById("img11Cache");
var img12Cache = document.getElementById("img12Cache");

var btnRestart = document.getElementById("restart");
var btnAfficheScore = document.getElementById("afficheScore");
btnRestart.style.display = "none";
btnAfficheScore.style.display = "none";

var nbrBonneReponse = 0;

var afficheImg = ["img/Bear.png","img/Bear.png","img/Giraffe.png","img/Giraffe.png","img/Hippo.png","img/Hippo.png","img/Pig.png","img/Pig.png","img/Sheep.png","img/Sheep.png","img/StarFish.png","img/StarFish.png"];
var tCompteur = [];
var i = 0;

// variables pour le chrono
var dixiemes = document.getElementById("dix");
var secondes = document.getElementById("sec");
var sec = 0;
var dix = 0;
var AfficheSec = 0;

// variables pour l'affichage du score
var AfficheScore = document.getElementById("score");

var nbrClic = 0;
var nbrClicTotal = 0;
var tControle = [];
var tNumImg = [];
var tNumImgCache = [];

// PLACEMENT ALEATOIRE DES IMAGES
while(i < 12) {
    // nombre au hasard entre 0 et 11
    var selectCase = Math.floor(Math.random() * 12 + 1) - 1;

    // contrôle si la case a déja été selectionnée
    if(tCompteur.includes(selectCase)) {
    }
    else {
        tCompteur.push(selectCase);

        switch(tCompteur.length) {
            case 1:
                img1.setAttribute ("src", afficheImg[selectCase]);
                img1.style.display = "none";
                var srcImg1 = afficheImg[selectCase]; // tImg = img/Bear.png
                console.log('tImg1 = ' + srcImg1);
                break;
            case 2:
                img2.setAttribute ("src", afficheImg[selectCase]);
                img2.style.display = "none";
                var srcImg2 = afficheImg[selectCase];
                console.log('tImg2 = ' + srcImg2);
                break;
            case 3:
                img3.setAttribute ("src", afficheImg[selectCase]);
                img3.style.display = "none";
                var srcImg3 = afficheImg[selectCase];
                console.log('tImg3 = ' + srcImg3);
                break;
            case 4:
                img4.setAttribute ("src", afficheImg[selectCase]);
                img4.style.display = "none";
                var srcImg4 = afficheImg[selectCase];
                console.log('tImg4 = ' + srcImg4);
                break;
            case 5:
                img5.setAttribute ("src", afficheImg[selectCase]);
                img5.style.display = "none";
                var srcImg5 = afficheImg[selectCase];
                console.log('tImg5 = ' + srcImg5);
                break;
            case 6:
                img6.setAttribute ("src", afficheImg[selectCase]);
                img6.style.display = "none";
                var srcImg6 = afficheImg[selectCase];
                console.log('tImg6 = ' + srcImg6);
                break;
            case 7:
                img7.setAttribute ("src", afficheImg[selectCase]);
                img7.style.display = "none";
                var srcImg7 = afficheImg[selectCase];
                console.log('tImg7 = ' + srcImg7);
                break;
            case 8:
                img8.setAttribute ("src", afficheImg[selectCase]);
                img8.style.display = "none";
                var srcImg8 = afficheImg[selectCase];
                console.log('tImg8 = ' + srcImg8);
                break;
            case 9:
                img9.setAttribute ("src", afficheImg[selectCase]);
                img9.style.display = "none";
                var srcImg9 = afficheImg[selectCase];
                console.log('tImg9 = ' + srcImg9);
                break;
            case 10:
                img10.setAttribute ("src", afficheImg[selectCase]);
                img10.style.display = "none";
                var srcImg10 = afficheImg[selectCase];
                console.log('tImg10 = ' + srcImg10);
                break;
            case 11:
                img11.setAttribute ("src", afficheImg[selectCase]);
                img11.style.display = "none";
                var srcImg11 = afficheImg[selectCase];
                console.log('tImg11 = ' + srcImg11);
                break;
            case 12:
                img12.setAttribute ("src", afficheImg[selectCase]);
                img12.style.display = "none";
                var srcImg12 = afficheImg[selectCase];
                console.log('tImg12 = ' + srcImg12);
                break;
        }
        i++
    }
}

//ATTENTE CLIC SUR IMAGE
document.addEventListener("click", function() {
   
    img1Cache.onclick = function() {
        img1Cache.style.display = "none";
        img1.style.display = "block";


        tControle.push(srcImg1); // on stock la source de l'image dans le tableau
        tNumImg.push(img1) // on stock le getElementById dans le tableau
        tNumImgCache.push(img1Cache);

        console.log(tControle);
        console.log(tNumImg);
        console.log(tNumImgCache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }
    
    img2Cache.onclick = function() {
        img2Cache.style.display = "none";
        img2.style.display = "block";


        tControle.push(srcImg2); // on stock la source de l'image dans le tableau
        tNumImg.push(img2) // on stock le getElementById dans le tableau
        tNumImgCache.push(img2Cache);

        console.log(tControle);
        console.log(tNumImg);
        console.log(tNumImgCache);

        nbrClic++;
        nbrClicTotal++;
        
        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }
    
    img3Cache.onclick = function() {
        img3Cache.style.display = "none";
        img3.style.display = "block";


        tControle.push(srcImg3); // on stock la source de l'image dans le tableau
        tNumImg.push(img3) // on stock le getElementById dans le tableau
        tNumImgCache.push(img3Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img4Cache.onclick = function() {
        img4Cache.style.display = "none";
        img4.style.display = "block";


        tControle.push(srcImg4); // on stock la source de l'image dans le tableau
        tNumImg.push(img4) // on stock le getElementById dans le tableau
        tNumImgCache.push(img4Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img5Cache.onclick = function() {
        img5Cache.style.display = "none";
        img5.style.display = "block";


        tControle.push(srcImg5); // on stock la source de l'image dans le tableau
        tNumImg.push(img5) // on stock le getElementById dans le tableau
        tNumImgCache.push(img5Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img6Cache.onclick = function() {
        img6Cache.style.display = "none";
        img6.style.display = "block";


        tControle.push(srcImg6); // on stock la source de l'image dans le tableau
        tNumImg.push(img6) // on stock le getElementById dans le tableau
        tNumImgCache.push(img6Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img7Cache.onclick = function() {
        img7Cache.style.display = "none";
        img7.style.display = "block";


        tControle.push(srcImg7); // on stock la source de l'image dans le tableau
        tNumImg.push(img7) // on stock le getElementById dans le tableau
        tNumImgCache.push(img7Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img8Cache.onclick = function() {
        img8Cache.style.display = "none";
        img8.style.display = "block";


        tControle.push(srcImg8); // on stock la source de l'image dans le tableau
        tNumImg.push(img8) // on stock le getElementById dans le tableau
        tNumImgCache.push(img8Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img9Cache.onclick = function() {
        img9Cache.style.display = "none";
        img9.style.display = "block";


        tControle.push(srcImg9); // on stock la source de l'image dans le tableau
        tNumImg.push(img9) // on stock le getElementById dans le tableau
        tNumImgCache.push(img9Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img10Cache.onclick = function() {
        img10Cache.style.display = "none";
        img10.style.display = "block";


        tControle.push(srcImg10); // on stock la source de l'image dans le tableau
        tNumImg.push(img10) // on stock le getElementById dans le tableau
        tNumImgCache.push(img10Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img11Cache.onclick = function() {
        img11Cache.style.display = "none";
        img11.style.display = "block";


        tControle.push(srcImg11); // on stock la source de l'image dans le tableau
        tNumImg.push(img11) // on stock le getElementById dans le tableau
        tNumImgCache.push(img11Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }

    img12Cache.onclick = function() {
        img12Cache.style.display = "none";
        img12.style.display = "block";


        tControle.push(srcImg12); // on stock la source de l'image dans le tableau
        tNumImg.push(img12) // on stock le getElementById dans le tableau
        tNumImgCache.push(img12Cache);

        nbrClic++;
        nbrClicTotal++;

        // fonction avec : nbr de clics, image cliquée, et la source
        if(nbrClic == 2) {
            nbrClic = 0;
            controle();
            afficherScore(nbrClicTotal);
        }
    }
})


// FONCTION CONTROLE
function controle() {
    // on bloque le clic pendant 1sec
    var all = document.getElementsByTagName("input");
        for(var i = 0, max = all.length; i < max; i++)
        {
            all[i].disabled= "disabled";
        }
    setTimeout(() => {
        var all = document.getElementsByTagName("input");
        for(var i = 0, max = all.length; i < max; i++)
        {
            all[i].disabled= "";
        }
    }, 1000);
    

    // si 2 images identiques
    if(tControle[0] == tControle[1]) {
        console.log(tControle);
        console.log("vous avez trouvé deux images identiques");
        console.log(tControle);

        nbrBonneReponse++

        var info = document.getElementById("info");
        info.textContent = "Bravo !";
        info.style.color = "green"

        setTimeout(() => {
            tNumImg[0].style.display = "block";
            tNumImgCache[0].style.display = "none";
            
            tNumImg[1].style.display = "block";
            tNumImgCache[1].style.display = "none";

            var info = document.getElementById("info");
            info.textContent = "Continue...";
            info.style.color = "black"

            // on vide les tableaux
            tControle.pop();
            tControle.pop();
            tNumImg.pop();
            tNumImg.pop();
            tNumImgCache.pop();
            tNumImgCache.pop();

            if(nbrBonneReponse == 6) {
                partieFini();
            }
        }, 1000);

    // si 2 images différentes
    } else {
        console.log(tControle);
        console.log("vous n'avez pas trouvé deux images identiques");
        console.log(tControle);

        var info = document.getElementById("info");
        info.textContent = "Loupé !";
        info.style.color = "red"

        setTimeout(() => {
            tNumImg[0].style.display = "none";
            tNumImgCache[0].style.display = "block";
            
            tNumImg[1].style.display = "none";
            tNumImgCache[1].style.display = "block";

            var info = document.getElementById("info");
            info.textContent = "Essaye encore...";
            info.style.color = "black"

            // on vide les tableaux
            tControle.pop();
            tControle.pop();
            tNumImg.pop();
            tNumImg.pop();
            tNumImgCache.pop();
            tNumImgCache.pop();
        }, 1000);
    }
}

// DECLANCHEMENT DU CHRONO DE DEPART
var clisStart = 0;
document.addEventListener("click", function(){
    clisStart++
    if(clisStart == 1) {
        // on bloque le clic pendant 3sec
        var all = document.getElementsByTagName("input");
        for(var i = 0, max = all.length; i < max; i++)
        {
            all[i].disabled= "disabled";
        }
    setTimeout(() => {
        var all = document.getElementsByTagName("input");
        for(var i = 0, max = all.length; i < max; i++)
        {
            all[i].disabled= "";
        }
    }, 3000);
        var compteur = 3;
        info.textContent = compteur;
        info.style.color = "red";
        var timerStart = setInterval(function(){
            var info = document.getElementById("info");  
            compteur--;
            info.textContent = compteur;
            info.style.color = "red";

            if(compteur == 0){
                clearTimeout(timerStart);
                info.textContent = "C'est parti !";
                funcChrono()
            }
        }, 1000)
}
});

// FONCTION CHRONO
function funcChrono() {
    var Chrono = setInterval(function() {
        dix++
        
        if(dix < 10) {
            dix = "0" + dix;
        }
        
        if(dix > 100) {
        sec++
        dix = 0;
        }
        if(sec==0) {
            AfficheSec = "00";
        }
        if(sec < 10) {
            AfficheSec = "0" + sec;
        } else {
            AfficheSec = sec;
        }

        dixiemes.innerHTML = dix;
        secondes.innerHTML = AfficheSec;

        if(nbrBonneReponse == 6){
            clearTimeout(Chrono);
        };
    }, 10);
}

// CALCUL DU SCORE ET AFFICHAGE
function afficherScore(nbrClicTotal) {
    //var score = (dix + sec) / nbrClicTotal;
    var score = (nbrBonneReponse * 1000) - (sec * 20);
    AfficheScore.textContent = score;
    
    console.log(score);
    // trouvé + 1000
    // erreur -1000
    // - chrono * 50

    if(score < 0) {
        AfficheScore.textContent = "00";
    }
}

// FONCTION PARTIE FINI
function partieFini() {
    info.textContent = "Bravo tu as gagné !";
    info.style.color = "green"
    btnRestart.style.display = "flex";
    btnAfficheScore.style.display = "flex";
    
    // on recherhce le nom du joueur
    var params = new URL(document.location).searchParams;
    var nomDuJoueur = params.get("nom");

    // on recherche le score du joueur
    var scoreDuJoueur = document.getElementById("score").textContent;
 
    // COOKIE
    // date d'expiration sinon le cookie s'efface tout de suite
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1); // cookie d'un an
    var expires = "expires=" + date.toString();

    // cookie score + nom
    document.cookie = scoreDuJoueur + "=" + nomDuJoueur + "; " + expires;
    // document.cookie = "1550=Gerard" + "; " + expires;
    // document.cookie = "2000=Sandrine"  + "; " + expires;
    // document.cookie = "1400=Bernard" + "; " + expires;
    // document.cookie = "1760=Pascal" + "; " + expires;
        
    
}

// BOUTON RECOMMENCER UNE PARTIE
btnRestart.onclick = function() {
    location.reload();
}