const barreOutils = document.getElementById("BarreOutils");
const audio = document.querySelector("audio");

const boutonAccueil = document.createElement("button");
barreOutils.appendChild(boutonAccueil);

const lien = document.createElement("a");
lien.href = "../../index.php";
boutonAccueil.appendChild(lien);

const iconeAccueil = document.createElement("i");
iconeAccueil.className = "fa-solid fa-house fa-2xl";
lien.appendChild(iconeAccueil);

const boutonAudio = document.createElement("button");
barreOutils.appendChild(boutonAudio);

const iconeAudio = document.createElement("i");
iconeAudio.className = "fa-solid fa-volume-off fa-2xl";
boutonAudio.appendChild(iconeAudio);

boutonAudio.addEventListener("click", function() {
	if (audio.paused) {
		audio.play();
		iconeAudio.className = "fa-solid fa-volume-high fa-2xl"
	} else {
		audio.pause();
		iconeAudio.className = "fa-solid fa-volume-off fa-2xl"
	};
});