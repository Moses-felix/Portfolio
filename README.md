# Portfolio — Moise Hounmenou

Portfolio Data Analyst / Data Manager (FR / EN, thème clair et sombre).
La page d'accueil présente une sélection de projets ; le portfolio complet reste
accessible dans `details.html`.

## Structure
```
portfolio/
├── index.html        Vitrine des projets
├── details.html      Portfolio complet (parcours, expériences, compétences…)
├── css/style.css     Styles du portfolio complet
├── css/projects.css  Styles de la vitrine projets et de ses commandes
├── js/theme.js       Thème clair/sombre chargé avant l'affichage
├── js/main.js        Contenu du portfolio complet, traductions et animations
├── js/home.js        Lecteur PDF, langues, thème et fond animé de l'accueil
├── images/           Photos et favicon
├── documents/        CV et documents associés au portfolio complet
├── pdf/              Documentations PDF des projets (FR/EN)
└── Video/            Aperçus GIF et vidéos de présentation
```

## Modifier le contenu
Le contenu du portfolio complet se trouve dans `js/main.js` : `XP` (expériences),
`PROJECTS`, `CERTS`, `EDU`, `SKILLS`, `INTERESTS`, et `UI` pour les traductions.
Modifiez les projets, leurs liens et leurs PDF dans `index.html`. Les liens de
démonstration pointent actuellement vers la rubrique Projets de LinkedIn ; remplacez
le `href` des boutons concernés par l'URL de chaque projet pour pointer directement
vers les applications en ligne.

Le lecteur PDF masque sa barre d'outils, mais un PDF servi dans un navigateur ne
peut pas être rendu techniquement impossible à enregistrer.
La vitrine propose aussi le changement de langue FR/EN, le thème clair/sombre et
un fond animé à points ; la langue et le thème sont partagés avec le portfolio
complet. Le CV à afficher et télécharger est `documents/CV_HOUNMENOU_DataManager.pdf`.
La vitrine présente onze projets : six avec un aperçu GIF et leurs documentations
PDF, et trois projets vidéo lus directement sur le site. Les résumés et les liens vers les GIF/PDF
sont définis dans `index.html` ; les textes français et anglais sont dans
`js/home.js`.

La taille de la photo de la page d'accueil se règle dans `css/projects.css`,
avec la variable `--intro-photo-size` (valeur par défaut : `clamp(150px, 15vw, 190px)`).
Une valeur spécifique de `130px` est appliquée sur mobile dans la règle média
`max-width: 760px`.

Pour remplacer les visuels de la page d'accueil, conservez les noms de fichiers
existants : la photo affichée actuellement est
`images/Portrait_professionnel_sur_fond_noir-removebg-preview.png`, les certificats
sont dans `images/`, et les aperçus animés des réalisations sont des GIF dans
`Video/`. Les `src` des photos et GIF sont indiqués dans `index.html`.

## Changer la couleur
Dans `css/style.css`, modifiez `--accent` pour le portfolio complet. Dans
`css/projects.css`, modifiez `--accent` pour la page d'accueil ; les couleurs
actuelles reprennent celles du portfolio.

## Mettre en ligne
Ouvrez `index.html` dans un navigateur pour tester. Pour publier gratuitement : GitHub Pages, Netlify ou Vercel (glisser-déposer le dossier).

## Formulaire de contact et compteur de visiteurs (version 3.0)
Tout se règle dans `js/site-config.js` :
- `web3formsKey` : clé reçue par e-mail après avoir saisi votre adresse sur
  https://web3forms.com. Les messages du formulaire arrivent alors directement
  dans votre boîte mail. Clé vide = le formulaire ouvre la messagerie du visiteur.
- `goatcounterCode` : code de votre compte https://www.goatcounter.com
  (activez « Allow adding visitor counts on your website » dans Settings).
  Le pied de page affiche alors le total des visites sous forme d'un simple nombre.
  Les statistiques détaillées sont visibles sur votre tableau de bord GoatCounter.
  Le compteur ne fonctionne qu'une fois le site en ligne (pas en ouvrant le fichier localement).

## Publication sur GitHub Pages
1. Poussez le contenu du dossier `portfolio/` à la racine du dépôt
   (`index.html` doit être à la racine).
2. Dépôt GitHub → Settings → Pages → Source : « Deploy from a branch »,
   branche `main`, dossier `/ (root)`.
3. Le site est publié sur `https://VOTRE-PSEUDO.github.io/NOM-DU-DEPOT/`.

## PDF à ajouter
- `pdf/Crypto_Market_Dashboard_EN.pdf` : version anglaise de la documentation Crypto
  (le bouton « Documentation EN » est déjà en place).

## Projets vidéo
Les cartes Postula, Job Intelligence et Assistant Data IA lisent leurs vidéos MP4
locales en aperçu muet sur les cartes et dans une fenêtre intégrée au clic. Les
aperçus ne se chargent qu'à l'approche de l'écran. Les chemins `data-video` sont respectivement
`Video/Postula_voix_off.mp4`, `Video/Job_Intelligence_voix_off.mp4` et
`Video/Assistant_data_ia_voix_off.mp4`.

Chaque projet comprend un emplacement pour son lien de projet et deux boutons
de documentation (FR et EN). Ils sont désactivés tant que les liens et fichiers
ne sont pas ajoutés. Pour les activer, remplacez `href="#"` par le lien du projet
et ajoutez les PDF aux chemins indiqués dans `data-pdf` sous `pdf/`, puis retirez
l'attribut `disabled` des boutons correspondants.
