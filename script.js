// Je stock tout mes icone menu
const tabs = document.querySelectorAll('.tab')
// Je stock tout mon content
const tabContents = document.querySelectorAll(".tab-content")

    // Récupère le nombre de clics sauvegardé localement (s'il existe)
    let clicks = localStorage.getItem("clicks");

    // Récupère les stats par click (s'il existe)
    let perClicks = localStorage.getItem("perclicks");
    let perClicksPrice = localStorage.getItem("perclicksprice");

    // Récupère les stats par click (s'il existe)
    let perSeconds = localStorage.getItem("perseconds");
    let perSecondsPrice = localStorage.getItem("persecondsprice");


// STOCKAGE DES DONNEES :
// Vérifie si le navigateur prend en charge le stockage local
if (typeof(Storage) !== "undefined") {

    if (clicks !== null) {
      // Met à jour le nombre de clics avec la valeur stockée localement
      document.getElementById("clicks").textContent = clicks;
    } 

    //Initialise la donnée perClicks
    if (perClicks !== null) {
      // Met à jour le nombre de perclicks avec la valeur stockée localement
      document.getElementById("perClicks").textContent = perClicks;
      console.log("perClicks trouvé !")
    } else {
      // Initialise le nombre de perclicks à 1 s'il n'existe pas encore
      localStorage.setItem("perclicks", 1);
      console.log("perClicks pas trouvé, dépars a 1 !")
    }

    //Initialise la donnée perClicksPrice
    if (perClicksPrice !== null) {
      // Met à jour le nombre de perClicksPrice avec la valeur stockée localement
      document.getElementById("perClicksPrice").textContent = perClicksPrice;
      console.log("perClicksPrice trouvé !")
    } else {
      // Initialise le nombre de perclicksprice à 25 s'il n'existe pas encore
      localStorage.setItem("perclicksprice", 25);
      console.log("perClicksPrice pas trouvé, dépars a 25 !")
    }

    //Initialise la donnée perSeconds
    if (perSeconds !== null) {
      // Met à jour le nombre de perClicksPrice avec la valeur stockée localement
      document.getElementById("perSeconds").textContent = perSeconds;
      console.log("perSeconds trouvé !")
    } else {
      // Initialise le nombre de perSeconds à 0 s'il n'existe pas encore
      localStorage.setItem("perseconds", 0);
      console.log("perSeconds pas trouvé, dépars a 0 !")
    }

    //Initialise la donnée perSeconds
    if (perSecondsPrice !== null) {
      // Met à jour le nombre de perSecondsPrice avec la valeur stockée localement
      document.getElementById("perSecondsPrice").textContent = perSecondsPrice;
      console.log("perSecondsPrice trouvé !")
    } else {
      // Initialise le nombre de perSecondsPrice à 30 s'il n'existe pas encore
      localStorage.setItem("persecondsprice", 30);
      console.log("perSecondsPrice pas trouvé, dépars a 30 !")
    }

    // if (perSeconds >= 1){
    //   launchAutomatiqueCookie(true)
    // }

} else {
  // Le navigateur ne prend pas en charge le stockage local
  document.getElementById("clicks").textContent = "Désolé, votre navigateur ne prend pas en charge le stockage local.";
}



// Fonction appelée lorsque le joueur clique sur le bouton
function onClick() {
  // Récupère le nombre de clics actuel + boost
  let clicks = parseInt(document.getElementById("clicks").textContent);
  let perClicks = parseInt(document.getElementById("perClicks").textContent);
  
  // Incrémente le nombre de clics
  clicks += perClicks;  // Affiche le nouveau nombre de clics

  document.getElementById("clicks").textContent = clicks;
  // Stocke le nouveau nombre de clics localement
  localStorage.setItem("clicks", clicks);
}

// function launchAutomatiqueCookie(bool){
//   let giveCook = bool;
//   console.log(giveCook)

//   if (giveCook == true){
//     setInterval(function(){
//       let perSeconds = localStorage.getItem("perseconds");
//       let clicks = parseInt(document.getElementById("clicks").textContent);
//         clicks += +perSeconds;

//       document.getElementById("clicks").textContent = clicks;
//       localStorage.setItem("clicks", clicks);
//     }, 1000)
//   }
// }


// ICI CA MARCHE MAIS CEST DE LA MERDE
// setInterval(function() {
//   let clicks = parseInt(document.getElementById("clicks").textContent);
//   let perSeconds = parseInt(document.getElementById("perSeconds").textContent);
//   clicks += perSeconds;
//   document.getElementById("clicks").textContent = clicks;
//   localStorage.setItem("clicks", clicks);
//   console.log("JE NE SUIS PAS OPTI DU TOUT")
// }, 1500);
  

function cpcUp(){
  let clicks = parseInt(document.getElementById("clicks").textContent);

  if (clicks >= perClicksPrice) {
    let perClicks = parseInt(document.getElementById("perClicks").textContent);
    perClicks++;
    document.getElementById("perClicks").textContent = perClicks;
    clicks -= perClicksPrice;
    perClicksPrice = perClicksPrice * 1.2;
    perClicksPrice = Math.round(perClicksPrice);
    document.getElementById("clicks").textContent = clicks;
    document.getElementById("perClicksPrice").textContent = perClicksPrice;
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("perclicks", perClicks);
    localStorage.setItem("perclicksprice", perClicksPrice);

  } else {
    alert("Not Enough Cookies!");

  }
}


function secUp(){
  let clicks = parseInt(document.getElementById("clicks").textContent);

  if(clicks >= perSecondsPrice) {
    let perSeconds = parseInt(document.getElementById("perSeconds").textContent);
    perSeconds++;
    document.getElementById('perSeconds').textContent = perSeconds;

    clicks -= perSecondsPrice;
    perSecondsPrice = perSecondsPrice * 2;
    perSecondsPrice = Math.round(perSecondsPrice)
  document.getElementById('perSecondsPrice').textContent = perSecondsPrice;
  document.getElementById("clicks").textContent = clicks;

  localStorage.setItem("clicks", clicks);
  localStorage.setItem("persecondsprice", perSecondsPrice)
  localStorage.setItem("perseconds", perSeconds);
  // launchAutomatiqueCookie(true)
  } else {
    alert("Not Enough Cookies!");
  }
}


function tabsAnimation(num){
  //On retirer la class de la tab a retirer (tab + content)
  tabs.forEach((tab, index) => {
    tab.classList.remove("active-tab")
      tabContents[index].classList.remove("active-tab-content")
  })

  // On ajoute la class pour montrer tab + content
  tabs[num].classList.add("active-tab")
  tabContents[num].classList.add("active-tab-content")
}
  

const modeSombreToggle = document.querySelector('.checkbox');
modeSombreToggle.addEventListener('click', () => {
    document.body.classList.toggle('body-sombre');
});