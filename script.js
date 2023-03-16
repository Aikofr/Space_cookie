// Je stock tout mes icone menu
const tabs = document.querySelectorAll('.tab')
// Je stock tout mon content
const tabContents = document.querySelectorAll(".tab-content")


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


// STOCKAGE DES DONNEES :

//Stock dans une variable - Une très légére opti et code plus lisible
const CLICKS_KEY = "clicks";

// Vérifie si le navigateur prend en charge le stockage local
if (typeof(Storage) !== "undefined") {
    // Récupère le nombre de clics sauvegardé localement (s'il existe)
    let clicks = localStorage.getItem(CLICKS_KEY);
    if (clicks !== null) {
      // Met à jour le nombre de clics avec la valeur stockée localement
      document.getElementById("clicks").textContent = clicks;
    }
  } else {
    // Le navigateur ne prend pas en charge le stockage local
    document.getElementById("clicks").textContent = "Désolé, votre navigateur ne prend pas en charge le stockage local.";
  }
  

  // Fonction appelée lorsque le joueur clique sur le bouton
  function onClick() {
    // Récupère le nombre de clics actuel
    let clicks = parseInt(document.getElementById("clicks").innerHTML);
    // Incrémente le nombre de clics
    clicks++;
    // Affiche le nouveau nombre de clics
    document.getElementById("clicks").textContent = clicks;
    // Stocke le nouveau nombre de clics localement
    localStorage.setItem(CLICKS_KEY, clicks);
  
    // console.log(clicks)
  }
  
      // Plus opti de passer par un EventListener ? 
    // document.getElementById("button").addEventListener("click", onClick);



const modeSombreToggle = document.querySelector('.checkbox');

modeSombreToggle.addEventListener('click', () => {
    document.body.classList.toggle('body-sombre');
});