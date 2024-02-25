const bloc = document.getElementById("bloc-post-it");
const couleurs = ["#FFEB3B", "#FFC0CB", "#87CEEB", "#98FB98", "#FFA500"];
const blocNote = document.getElementById("bloc-note");
const couverture = document.getElementById("couverture");

afficherSources = false;

blocNote.addEventListener("dblclick", function () {
    if (afficherSources) {
      blocNote.style.animation = "prendre-bloc-note 2s forwards";
      couverture.style.animation = "ouvrir-bloc-note 2s forwards";
    } else {
      couverture.style.animation = "fermer-bloc-note 2s forwards";
      blocNote.style.animation = "poser-bloc-note 2s forwards";
    }

    afficherSources = !afficherSources;
});

document.addEventListener('keydown', function() {
    if (event.key === ' ') {
      if (afficherSources) {
        blocNote.style.animation = "prendre-bloc-note 2s forwards";
        couverture.style.animation = "ouvrir-bloc-note 2s forwards";
      } else {
        couverture.style.animation = "fermer-bloc-note 2s forwards";
        blocNote.style.animation = "poser-bloc-note 2s forwards";
      }

      afficherSources = !afficherSources;
    }
});


for (let i = 0; i < couleurs.length; i++) {
  const couleur = couleurs[i];
  const postIt = document.createElement("div");
  postIt.className = "post-it";
  postIt.style.background = couleur;
  postIt.style.transform = `rotate(${i * 10}deg)`;
  bloc.appendChild(postIt);

  if (i == couleurs.length - 1) {
    const logo = document.createElement("img");
    logo.src = "../../medias/bureau/cachet_document_officiel.png";
    logo.style.width = "20%";
    postIt.appendChild(logo);

    const texteLogo = document.createElement("p");
    texteLogo.textContent = "Page suivante ou précédente";
    postIt.appendChild(texteLogo);

    const boutonVille = document.createElement("p");
    boutonVille.textContent = "ville";
    boutonVille.style.color = "blue";
    postIt.appendChild(boutonVille);

    const texteVille = document.createElement("p");
    texteVille.textContent = "Voir ur la carte";
    postIt.appendChild(texteVille);

    const sources = document.createElement("p");
    sources.textContent = "Bloc note";
    sources.style.background = "black";
    postIt.appendChild(sources);

    const texteSources = document.createElement("p");
    texteSources.textContent = "Sources";
    postIt.appendChild(texteSources);

  }
}

const pages = document.querySelectorAll("section");
for (let i = 0; i < pages.length; i++) {
  const page = pages[i];
  page.style.zIndex = `-${i}`;
  let tournerAuClique = true;

  const image = document.createElement('img');
  image.src = "../.././medias/bureau/cachet_document_officiel.png";
  page.appendChild(image);

  if (i < pages.length - 1) {
    page.style.cursor = "grab";

    image.addEventListener("click", () => {
      if (tournerAuClique) {
        page.style.animation = "pageSuivante 2s forwards";
        page.style.zIndex = `${i}`;
      } else {
        page.style.animation = "pagePrecedente 2s forwards";
        page.addEventListener('animationend', function() {
          page.style.zIndex = `-${i}`;
        });
      }

      tournerAuClique = !tournerAuClique;
    });
  }
};

