<?php
require "fichiers_externes\lecture.php";
$chemin = isset($_GET['page']) ? $_GET['page'] : '';
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" type="text/css" href="../../fichiers_externes/fichiers_carte/style_carte.css">
    <link rel="stylesheet" type="text/css" href="../../fichiers_externes/fichiers_accordeon/style_accordeon.css">
    <link rel="stylesheet" type="text/css" href="../../fichiers_externes/fichiers_barre_outils/style_barre_outils.css">
    <link rel="stylesheet" type="text/css" href="../../fichiers_externes/fichiers_bureau/style_bureau.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

    <script src="https://kit.fontawesome.com/57736e79f1.js" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

</head>
<body>

   <div class="bloc-note" id="bloc-note">
        <div class="sources">
            <?php 
                $resultat = lire_base_de_donnees("sources", $chemin);
                if ($resultat) {
                    while ($ligne = mysqli_fetch_assoc($resultat)) {
                        $site = $ligne['site'];
                        $url = $ligne['url'];
                        $balise = '
                            <div>
                                <a href="'. $url. '" target=_blank>'. $site. '</a>
                            </div>';
                        echo $balise;
                    }
                } else {
                    echo "Aucun résultat trouvé.";
                }
            ?>
        </div>
        <div class="arriere"></div>
        <div class="couverture" id="couverture"></div>
    </div>

    <div id="presentation">
        <?php
            include("resistance/" . $chemin . "/index.php");
        ?>
    </div>

    <div id="bloc-post-it"></div>
    <div class="tasse"></div>
    
    <div class="tablette">
        <div id="carte"></div>
    </div>

    <script type="text/javascript" src="../../fichiers_externes/fichiers_bureau/script_bureau.js" defer></script>
    <script type="text/javascript" src="../../fichiers_externes/fichiers_carte/script_carte.js"></script>

    <div id="BarreOutils">
        <audio src=".././medias/musique.mp3" type="audio/mpeg"></audio>
    </div>
    <script type="text/javascript" src="../../fichiers_externes/fichiers_barre_outils/script_barre_outils.js"></script>

    <div class="accordion-container" id="accordion-container"></div>
    <script type="text/javascript" src="../../fichiers_externes/fichiers_accordeon/script_accordeon.js"></script>
</body>
</html>
