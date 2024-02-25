const TexteSourcesImages = "Sources des médias";
const TexteSourcesSites = "Sites et documents";
const TexteSourcesAnimations = "Sources des animations";

const sources = {

  "Rene_Ghislain_Ruelle": {
    [TexteSourcesSites]: [
      ["Le p'ptit forest édition spéciale mars 2023", "https://example.com/le-p'tit-forest"],
      ["Le maitron", "https://fusilles-40-44.maitron.fr/?article167694"],
      ["Mémoire 14-45", "https://www.memoire14-45.eu/fr/80ansfusilles-fortlobau/14-decembre-1943-execution-de-rene-ruelle-au-fort-de-bondues"],
      ["Avesnois tourisme", "https://www.tourisme-avesnois.com/sejour-avesnois-ardennes/6323870_memorial-rene-ruelle/"],
    ],
  [TexteSourcesImages] : [
      ["Ceux du maquis", "https://www.youtube.com/watch?v=w3WZDUnPxsw"],
    ]
  },

  "Suzanne_Blin_Lanoy": {
    [TexteSourcesSites]: [
      ["Le p'ptit forest édition spéciale mars 2023", "https://example.com/le-p'tit-forest", ""],
    ],
    [TexteSourcesImages]: [
      ["Le chant des partisans", "https://www.youtube.com/watch?v=ey_7JeK--u8"],
    ],
  },

  "Voix_du_nord": {
    [TexteSourcesSites]: [
      ["La voix du Nord", "https://www.lavoixdunord.fr/994466/article/2021-04-30/nee-dans-la-clandestinite-il-y-80-ans-la-voix-du-nord-ne-pactise-pas-avec-le-mal"],
      ["En fait", "https://enfaits.fr/2021/11/09/la-voix-du-nord-portrait-dun-resistant-de-guerre/"],
      ["Wikipédia", "https://fr.wikipedia.org/wiki/Voix_du_Nord"]
    ],
  },

  "La_maison_des_enfants_trelon": {
    [TexteSourcesSites]: [
      ["Association traits d'union", "https://www.associationtraitsdunion.org/wp-content/uploads/2013/12/a-la-memoire-de-jeanne-rousselle.pdf"],
    ],
  },

  "Marcel_Pinte" : {
    [TexteSourcesImages]: [
      ["Le petit Quinquin", "https://youtu.be/5vtGYCnWeAc?si=DVnYEkR9HQAXFsy3"],
      ["Google image", "https://i.la-croix.com/729x0/smart/2020/09/13/1201113796/Carte-resistant-Marcel-Pinte-lejeune-resistant-France_0.jpg"],

    ],
  },
};

const ContainerAccordeon = document.getElementById("accordion-container");
document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />'


function AjouterSources(nomFichier) {
  if (sources.hasOwnProperty(nomFichier)) {
    const sourcesPersonne = sources[nomFichier];

    for (const cle in sourcesPersonne) {
      if (sourcesPersonne.hasOwnProperty(cle)) {
        const listeSources = sourcesPersonne[cle];

        ContainerAccordeon.innerHTML += `<div class="accordion-header"><i class="fa fa-angle-right"></i>${cle}</div>`;

        const AccordeonContent = document.createElement("div");
        AccordeonContent.classList.add("accordion-content");
        ContainerAccordeon.appendChild(AccordeonContent);

        const liste = document.createElement("ul");
        AccordeonContent.appendChild(liste);

        listeSources.forEach(source => {
          liste.innerHTML += `<li><a href="${source[1]}" target='blank'>${source[0]}<a></li>`;
        });
      }
    }
  } else {
    throw new Error(`La clé "${nomFichier}" n'existe pas dans les sources.`);
  }
}