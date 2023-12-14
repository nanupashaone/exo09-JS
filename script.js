let listeStagiaire = [];
let compteur = "";

function ajouterStagiaire() {
  const stagiaireInput = document.getElementById("stagiaireInput");
  const stagiaire = stagiaireInput.value;
  const nbStagiaire = document.getElementById("nombreStagiaires");

  if (stagiaire !== "") {
    listeStagiaire.push(stagiaire);
    compteur++;
    const nbStagiaire = compteur;
  }

  console.log(listeStagiaire);
  console.log(compteur);
}

function filtrerStagiaires() {
  const inputFiltre = document
    .getElementById("filtreInput")
    .value.toLowerCase();

  const filtre = listeStagiaire.filter(function (name) {
    return name.toLowerCase().includes(inputFiltre);
  });
  console.log(filtre);
}

function dernierStagiaire() {
    
    if (listeStagiaire.length > 0) {
        
        let dernierStagiaireAjoute = listeStagiaire[listeStagiaire.length - 1];

        
        console.log("Dernier stagiaire ajouté :", dernierStagiaireAjoute);

        
        return dernierStagiaireAjoute;
    } else {
        console.log("Aucun stagiaire ajouté");
        return null; 
    }
}
