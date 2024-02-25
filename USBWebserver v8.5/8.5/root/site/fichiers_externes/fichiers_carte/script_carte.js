function rechercher_ville(ville) {
    return fetch('../../fichiers_externes/lecture.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'action=trouver_ville&ville=' + encodeURIComponent(ville),
    })
    .then(response => response.json())
    .then(data => {
        const donnees = data.resultat;
        const latitude = donnees['latitude'];
        const longitude = donnees['longitude'];
        const coordonnees = [latitude, longitude];

        return coordonnees;
    })
    .catch(error => {
        console.error('Erreur lors de la requête AJAX:', error);
        throw error;
    });
}

rechercher_ville("Avesnes-sur-Helpe")
    .then(coordonnees_depart => {
        const map = L.map('carte').setView(coordonnees_depart, 13);
        const marker = L.marker(coordonnees_depart).addTo(map);

        L.tileLayer(
           'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           }).addTo(map);

        const boutons = document.getElementsByClassName('ville');

        Array.from(boutons).forEach(bouton => {
            bouton.addEventListener('click',
                function() {
                    const ville = bouton.textContent;
                    rechercher_ville(ville)
                        .then(coordonnees => {
                            marker.setLatLng(coordonnees)
                                .bindPopup(ville)
                                .openPopup();
                            map.setView(coordonnees, 13);
                        })
                        .catch(error => {
                            console.error('Erreur lors de la recherche de la ville:', error);
                        });
                });
        });
    })
    .catch(error => {
        console.error('Erreur lors de la recherche de la ville de départ:', error);
    });
