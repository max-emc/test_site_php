<?php
$serveur = "localhost";
$utilisateur = "viewer";
$mot_de_passe = "php_viewer";

function lire_base_de_donnees($base_de_donnees, $table) {
    global $serveur, $utilisateur, $mot_de_passe;

    $connexion = mysqli_connect($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);
    mysqli_set_charset($connexion, "utf8");

    if (!$connexion) {
        die("La connexion a échoué : " . mysqli_connect_error());
    }

    $requete = "SELECT * FROM $table";
    $resultat = mysqli_query($connexion, $requete);

    if (!$resultat) {
        die("La requête a échoué : " . mysqli_error($connexion));
    }

    mysqli_close($connexion);
    return $resultat;
}

function trouver_ville($ville) {
    $base_de_donnees = "villes";
    $table = "villes";
    global $serveur, $utilisateur, $mot_de_passe;

    $connexion = mysqli_connect($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);
    mysqli_set_charset($connexion, "utf8");

    if (!$connexion) {
        die("La connexion a échoué : " . mysqli_connect_error());
    }

    $requete = 'SELECT latitude, longitude FROM villes  WHERE ville = "' . $ville . '"';

    $resultat = mysqli_query($connexion, $requete);

    if (!$resultat) {
        die("La requête a échoué : " . mysqli_error($connexion));
    }

    mysqli_close($connexion);
    return $resultat;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'trouver_ville') {
    $ville = isset($_POST['ville']) ? $_POST['ville'] : '';

    $resultat = trouver_ville($ville);
    $donnees = mysqli_fetch_assoc($resultat);

    echo json_encode(array('resultat' => $donnees));
    exit;
}
?>

