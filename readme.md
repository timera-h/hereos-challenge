# setup

1 - pull le cours
2 - copier le dossier module-2.5/intro-api-ajax
3 - coller le dossier dans "my-code", en dehors du dossier de cours
4 - naviguer dans le dossier collé dans un terminal
5 - lancer npm install
6 - ouvrer un second terminal
7 - dans le terminal 1 lancer npm run back
8 - dans le terminal 2 lancer npm run front
9 - ouvrez postman : tentez de faire des requêtes GET

# premières requêtes (GET)

GET -  http://localhost:8000/heroes
GET -  http://localhost:8000/heroes/222
GET -  http://localhost:8000/heroes?name=Hulk
GET -  http://localhost:8000/heroes?name=Captain+America
GET -  http://localhost:8000?appearance.gender=Female&appearance.race=Mutant&powerstats.strength=80

# créez un nouveau héro (POST)

POST  - http://localhost:8000/heroes

**Attention** :  
vous devrez envoyer des information dans le corps de la requête   
(onglet **Body** : dans le menu déroulant, choisir **type**: raw/json ou raw/JavaScript)

# supprimez un héro par so id (DELETE)

DELETE  - http://localhost:8000/heroes/100

Vérifiez en faisant un get du héro dont l'id est 100

# updatez un héro (PATCH)

PATCH  - http://localhost:8000/heroes/23

**Attention** :  
vous devrez envoyer des information de mise à jour dans le corps de la requête   
(onglet **Body** : dans le menu déroulant, choisir **type**: raw/json ou raw/JavaScript)

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->


# Heroes Challenge

Utiliser Axios + JSON-server + lite-server pour créer :  
Un CRUD de heroes avec la meilleure interface utilisateur possible !!!  
Vous travaillerez en équipe : faite tourner les rôles driver/navigator  
Présentation des projets le **vendredi à 11h30**  
Vote pour le meilleur projet, **vendredi à 12h30**
On votera vendredi à 


- features minimum
  - lister tous les heroes
  - voir le détails d'un heroe
  - supprimer un heroe
  - créer un nouveau heroe
  - filter les heroes par nom
  - classez les heroes par id ascendant/descendant

- Bonus:
  - ajouter d'autres filtres pour les héroes
  - rendre l'application responsive





