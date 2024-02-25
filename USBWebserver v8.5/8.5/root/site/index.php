<?php
require "fichiers_externes\lecture.php"
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="style_principal.css">
    <link rel="stylesheet" type="text/css" href="fichiers_externes/fichiers_accordeon/style_accordeon.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />

    <title></title>
</head>
<body>

    <div class="archives" id="archives">
        <?php
            $resultat = lire_base_de_donnees("archives", "resistants");
            if ($resultat) {
                while ($ligne = mysqli_fetch_assoc($resultat)) {
                    $chemin = $ligne['chemin'];
                    $balise = '
                        <div class="dossier">
                            <div class="feuille">
                                <iframe src="resistance/' . $chemin . '/apercu.html"></iframe>
                            </div>
                            </a>
                            <div class="couverture">
                                <img src="medias/apercu/' . $chemin . '.jpg">
                                <h3>' . $ligne['nom'] . '</h3>
                            </div>
                            <a href="base.php?page=' . $chemin . '">
                                <button>lire</button>
                            </a>
                        </div>
                        ';
                    echo $balise;
                }
            } else {
                echo "Aucun résultat trouvé.";
            }
        ?>
    </div>

    <div class="accordion-container">
        <div class="accordion-header">
            <i class="fa fa-angle-right"></i>Sources des images
        </div>
        <div class="accordion-content">
            <ul id="sourcesImages"></ul>
            <?php 
                $resultat = lire_base_de_donnees("archives", "resistants");
                if ($resultat) {
                    while ($ligne = mysqli_fetch_assoc($resultat)) {
                        $balise = '<li>
                            ' . $ligne["nom"] . '
                            <a href="' . $ligne["url"] . '" target="_blank">' . $ligne["site"] . '</a>
                        </li>';
                        echo $balise;
                    }
                }
            ?>
        </div>
    </div>
    <script type="text/javascript" src="script_principal.js"></script>
    <script type="text/javascript" src="fichiers_externes/fichiers_accordeon/script_accordeon.js"></script>

</body>
</html>