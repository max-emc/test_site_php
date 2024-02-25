const dossiers = document.getElementsByClassName("dossier");
const pages = document.getElementsByClassName("feuille");

for (var i = 0; i < dossiers.length; i++) {
	const dossier = dossiers[i];
	const page = pages[i];

	dossier.style.cursor = "pointer";

    let timer;
    dossier.addEventListener("mouseover", function() {
        timer = setTimeout(function() {
            page.style.animation = "sortirFeuille 2s forwards";
            couverture.style.animation = "ouvrirDossier 2s forwards";
        }, 500);
    });

    dossier.addEventListener("mouseout", function() {
        clearTimeout(timer);
    });
}
