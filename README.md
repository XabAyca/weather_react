# La fameuse application météo
1. Introduction
Très connue du monde du développement lorsque l'on commence à utiliser un langage, et notamment React, tu vas devoir faire aujourd'hui une application permettant d'afficher la météo. Certains l'ont peut-être déjà faite, eh bien ce sera le moment de découvrir à quel point la logique par composant dans React est plus agréable à manipuler !  

La documentation de l'API à utiliser pour le projet est ici.  

2. Le projet  
Par défaut, tu devras récupérer la position de l'utilisateur afin d'afficher la météo des 5 prochains jours de là où il se situe.  

Tant que l'utilisateur n'a pas renseigné s'il accepte ou non la géolocalisation, et tant que la réponse de l'API n'a pas été reçue, tu afficheras un petit loading, grâce au module NPM react-loading.  

Si l'utilisateur refuse d'être géolocalisé, alors tu devras afficher un message indiquant à l'utilisateur que l'application ne peut pas afficher sa météo.  

Une fois la météo d'accueil de l'utilisateur affiché, il y aura sur ta page 4 boutons permettant de changer la ville : "San Francisco", "Libreville", "Tokyo" et "Montréal".  

En fonction du retour de l'API, tu devras afficher une icône (soleil, nuage, pluie...). Tu peux trouver ici la documentation à propos des Weather Conditions.  

La météo devra contenir des cards qui affichent au minimum : la température minimale, la température maximale, une icône, et le jour de la semaine.  

N'oublie pas de bien découper les composants de ton application afin d'éviter de répéter du code inutilement.  