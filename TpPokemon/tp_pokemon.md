# TP React Native Pokemon

Vous allez créer une application qui va vous permettre de gérer des pokemons.

### Les principales fonctionnalités de l'application : 

1 - Page 1 : 

- Accueil : Choisir 2 options (Lister les pokémons - Afficher son pokédex).

2 - Page 2 : 

- Afficher la liste de tous les pokémons dans une liste de card avec : 
    - Nom.
    - Le ou les catégories du pokémon.
    - Une miniature du pokémon.
- La couleur de la card doit evoluer en fonction de la catégorie du pokémon.
- Vous êtes libre de choisir les couleurs pour les catégories.

3 - Page 3 : 

- Afficher le détail d'un pokémon quand on effectue une selection du pokémon.
- Le détail d'un pokémon : 
    - Un header avec la couleur de la catégorie, le nom et une image.
    - Une partie détails avec 
        - la description du pokémon. 
        - son poids.
        - sa taille.
    - Une partie chaine d'evolution :
        - Les différents phases d'evolutions.
        - Leurs noms.
        - Une image.


Quelques infos pour vous aider : 

 - L'URL pour récupérer les pokémons : https://pokeapi.co/api/v2/pokemon?offset=10&limit=50
 - On prendra les pokémons à partir du 10 ème jusqu'au 50 ème.
 - Prenez le temps de voir comment vous pouvez récupérer les informations.
 
Quelques contraintes : 

 - Utilsez au moins 3 pages.
 - Utilisez plusieurs components pour l'exercice.

### <u> Partie bonus </u>: 

Créer la partie pokédex :

 - L'objectif du pokédex est de vous permettre d'isoler ou de selectionner des pokémons.
 - Les pokémons seléctionnés doivent être affichés dans la liste pokédex (dans la partie Home).
 - Vous êtes libres de les afficher comme vous le souhaitez (liste tableau, liste de card, etc..)
 - Pour attraper un pokémon, il faut le selectionner dans la partie détails du pokémon (bouton, icone, etc.).
 - Pour le libérer, il faut de nouveau le selectionner et faire l'opération inverse (bouton, icone).
 - Vous pourriez avoir besoin de : npm install @react-native-async-storage/async-storage

Vidéo pour visualiser un exemple de projet qui peut être copié : https://target-mohamed-s3.s3.eu-west-3.amazonaws.com/pokemon.mp4
