import csv

villes = {
    "Bully-les-Mines": [50.445811, 2.720701],
    "Arras": [50.291059, 2.759810],
    "Prisches": [50.075787, 3.761909],
    "Croix-Caluyau": [50.148812, 3.584227],
    "fort de Bondues": [50.718536, 3.074191],
    "Chateau de la huda à Trélon": [50.05805, 4.102],
    "Preux-au-bois": [50.1647503, 3.6588723],
    "Maubeuge": [50.2796417, 3.9674127],
    "Lille": [50.6365654, 3.0635282],
    "Saint-Waast-la-Vallée": [49.6998615, 3.6423576],
    "Clermont-Ferrand": [45.7774551, 3.0819427],
    "Saint-Floris": [50.6273631, 2.5701302],
    "Avesnelles": [50.1182023, 3.9473593],
    "Avesnes-sur-Helpe": [50.1218835, 3.9321056],
    "Dunkerque": [51.0347708, 2.3772525],
    "Angoulême": [45.6484505, 0.1561947],
    "la Madelaine": [49.286141, -0.7447897],
    "Loos": [50.6092082, 3.0162523],
    "Buchenwald": [45.7337796, 14.7071943],
    "Cartignies": [50.0918633, 3.8456091],
    "Escaudain": [50.3333247, 3.3438289],
    "Denain": [50.3270926, 3.3943729],
    "Valenciennes": [50.3579317, 3.5234846],
    "Gross-Rosen": [50.9973735, 16.2765214],
    "Berlaimont": [50.2026418, 3.8123133],
    "Glay": [47.4054737, 6.890636],
    "Natzwiler-Struthof": [48.447912, 7.245408],
    "hameau de la Gaubertie": [45.788644419615395, 1.0961882292715905],
}

# Nom du fichier CSV
nom_fichier_csv = "villes.csv"

# Ouverture du fichier en mode écriture
with open(nom_fichier_csv, mode='w', newline='') as fichier_csv:
    # Création de l'objet writer
    writer = csv.writer(fichier_csv)

    # Écriture de l'en-tête
    writer.writerow(['Ville', 'Latitude', 'Longitude'])

    # Écriture des données
    for ville, coordonnees in villes.items():
        writer.writerow([ville, coordonnees[0], coordonnees[1]])

print(f"Le fichier CSV '{nom_fichier_csv}' a été créé avec succès.")
