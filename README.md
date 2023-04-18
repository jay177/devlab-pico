# devlab-pico


## Reconnaissance Vocale
Ce site web permet la reconnaissance vocale et la transcription en temps réel de la parole en texte. Les verbes dans la phrase reconnue sont également surlignés en rouge.

## Technologies utilisées
HTML
CSS
JavaScript
## Comment utiliser le site
Ouvrir le site web dans un navigateur web compatible.
Cliquer sur le bouton "Démarrer" pour activer la reconnaissance vocale.
Parler dans le microphone pour transcrire votre voix en texte.
Les verbes présents dans la phrase reconnue seront surlignés en rouge.
Cliquer sur le bouton "Arrêter" pour désactiver la reconnaissance vocale.
## Comment cela fonctionne
Le site web utilise l'API de reconnaissance vocale Web Speech, disponible dans la plupart des navigateurs modernes, pour capturer la voix de l'utilisateur. Les données audio sont ensuite converties en texte par l'API et affichées sur la page web en temps réel.

Le code JavaScript du site web contient également une fonction pour surligner les verbes présents dans la phrase reconnue. Cette fonction utilise une liste de verbes en français et ajoute une balise HTML <span> avec la classe CSS verb autour de chaque verbe pour le surligner en rouge.

## Crédits
API de reconnaissance vocale Web Speech
## Remarques
Le site web ne fonctionnera que dans les navigateurs compatibles avec l'API de reconnaissance vocale Web Speech.
La reconnaissance vocale peut parfois être imprécise et nécessiter une prononciation claire et distincte.
Les verbes ne seront surlignés que s'ils sont dans la liste de verbes en français utilisée par le site.
Le code CSS peut être modifié pour changer la couleur ou la mise en forme du surlignage des verbes.