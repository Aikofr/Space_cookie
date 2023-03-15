// Je range mes onglets dans un tableau
const tabs = document.querySelectorAll('.tab')
// Je prend tout mon tab-content
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