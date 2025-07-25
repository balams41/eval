console.log ('hello')

 let  listeDeTaches = [];


//  ajouter fonction
 function ajouterTache(tache) {
listeDeTaches.push(tache);
}

document.getElementById("liste").appendChild(ul);
document.getElementById("nouvelleTache");(id)
document.getElementById("btnAjouter") .addEventListener(click)

function ajouterTache(nouvelleTache) {
  if (nouvelleTache.trim() !== "") {
    listeDeTaches.push(nouvelleTache);

      document.getElementById("liste").appendChild(li);
       const li = document.createElement("li");
        li.textContent = nouvelleTache;
   
  }
}

     document.getElementById("btnAjouter").addEventListener("click", () => {  
     const input = document.getElementById("nouvelleTache");
      btn.className = "btnAjouer";
      ajouterTache(input.value);
})

function afficherTaches() {
const ul = document.getElementById('liste');
}

   const li = document.createElement('li');
    li.textContent = tache;
     const boutonSupprimer = document.createElement('button');
      boutonSupprimer.textContent = "Supprimer";










































