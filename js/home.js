(function () {
  var TEXT = {
    fr: {
      formSending: 'Envoi en cours…', formSent: 'Merci ! Votre message a bien été envoyé, je vous réponds rapidement.', formFail: 'L’envoi a échoué. Vous pouvez m’écrire directement à moisekhounmenou@gmail.com.',
      visits: 'visites', viewCount: 'vues', footTagline: 'Data Analyst · Data × BI × IA',
      methodTitle: 'Ma méthode', methodSub: 'De la donnée brute à la décision, en 4 étapes.',
      m1t: 'Collecter', m1: 'Je récupère les données là où elles se trouvent : bases SQL, API, fichiers et outils métier.',
      m2t: 'Fiabiliser', m2: 'Je nettoie, contrôle et documente pour que chaque chiffre soit juste et traçable.',
      m3t: 'Analyser', m3: 'Je modélise et j’explore pour faire ressortir tendances, écarts et signaux faibles.',
      m4t: 'Décider', m4: 'Je restitue dans des tableaux de board clairs qui aident les équipes à passer à l’action.',
      introBio: 'Data Analyst &amp; Business Analyst, je cumule <strong>3 ans d’expérience en data</strong> (ETL, SQL, BigQuery, Power BI, qualité et gouvernance des données) auprès de grands comptes comme <strong> Carrefour, BCA Expertise, DITP</strong>, des notions dans le <strong>trading et la finance</strong> après <strong>3 ans en développement d’applications</strong>. Ce triple profil me permet de construire des pipelines fiables et des outils que les équipes métier utilisent vraiment.',
      stat1b: '3+ ans', stat1: 'd’expérience en data', stat2b: '3 ans', stat2: 'en développement d’applications', stat3: 'Données traitées', stat4: 'Verbatims analysés',
      photoAlt: 'Photo de Moise Hounmenou', skipLink: 'Aller au contenu',
      readPdfShort: 'Modop FR', readEnglishShort: 'Modop EN',
      filterLabel: 'Filtrer les réalisations', filterAll: 'Tous', filterFinance: 'Finance', filterCrypto: 'Crypto', filterRetail: 'Retail', filterApps: 'Applications',
      loading: 'Chargement des données', backTop: 'Retour en haut', themeToggle: 'Thème clair ou sombre',
      homeLabel: 'Accueil, Moise Hounmenou', navLabel: 'Navigation principale', quickLinks: 'CV et contact rapide',
      technologiesLabel: 'Technologies utilisées', topicsLabel: 'Thématiques',
      navProjects: 'Projets', navCertifications: 'Certifications', navSkills: 'Compétences', navContact: 'Contact', viewPortfolio: 'Voir tout mon parcours',
      downloadCv: 'Télécharger le CV', viewCv: 'Regarder le CV',
      eyebrow: 'Collecter · Fiabiliser · Valoriser',
      availability: 'Data Analyst · Disponible pour de nouveaux défis',
      heroTitle: 'Je transforme la donnée en décisions fiables.',
      intro: 'Quelques réalisations pour découvrir ma façon de transformer les données en outils fiables et en décisions concrètes.',
      projectSelection: 'Sélection de projets', myProjects: 'Mes réalisations',
      cryptoLabel: 'Projet data · Analyse & visualisation',
      cryptoTitle: 'Crypto Market Dashboard',
      cryptoDescription: 'Suivi du marché crypto : cours, capitalisations et volumes des principaux actifs, pour comparer les tendances.',
      cryptoTagAnalysis: 'Analyse de données', cryptoTagMarket: 'Marché crypto',
      cryptoVisual: 'Aperçu animé du tableau de bord Crypto Market',
      nasdaqLabel: 'Finance · IA & analyse de marché',
      nasdaqTitle: 'Actions IA du NASDAQ',
      nasdaqDescription: 'Analyse de 25 valeurs IA du NASDAQ, qui croise indicateurs techniques, fondamentaux et comparaisons sectorielles pour repérer vite les opportunités.',
      nasdaqVisual: 'Aperçu animé du tableau de bord des actions IA du NASDAQ',
      marketsLabel: 'Finance · Veille des marchés',
      marketsTitle: 'Infos Marchés Mondiaux',
      marketsDescription: '80 articles financiers classés en 8 catégories et 4 rubriques, pour une veille centralisée qui va à l’essentiel.',
      marketsVisual: 'Aperçu animé du tableau de bord d’actualités des marchés mondiaux',
      watchlistsLabel: 'Finance · Analyse boursière',
      watchlistsTitle: 'Listes de suivi boursier',
      watchlistsDescription: '24 listes de suivi et plus de 25 listes populaires pour comparer cours, variations, volumes et capitalisations d’un coup d’œil.',
      watchlistsVisual: 'Aperçu animé du tableau de bord des listes de suivi boursier',
      stockAnalysisLabel: 'Finance · Analyse boursière',
      stockAnalysisTitle: 'Analyse boursière',
      stockAnalysisDescription: 'Analyse des marchés financiers qui met en perspective les indicateurs et leurs évolutions afin de mieux repérer les tendances.',
      stockAnalysisVisual: 'Aperçu animé du tableau de bord d’analyse boursière',
      cleanerDatasetLabel: 'Application · Préparation des données',
      cleanerDatasetTitle: 'Cleaner Dataset',
      cleanerDatasetDescription: 'Cleaner Dataset prépare les jeux de données pour l’analyse en facilitant leur nettoyage, leur structuration et la vérification de leur qualité.',
      dataCleaningTag: 'Nettoyage des données',
      fileInterpreterLabel: 'Application · Analyse et synthèse de fichiers',
      fileInterpreterTitle: 'Agent interpréteur de fichiers',
      fileInterpreterDescription: 'Cet agent IA analyse les fichiers transmis pour en extraire les informations utiles et rendre leurs résultats plus faciles à comprendre et à exploiter.',
      fileAnalysisTag: 'Analyse de fichiers',
      aiTag: 'IA', pythonTag: 'Python', dataTag: 'Data',
      superstoreLabel: 'Retail · Business Intelligence',
      superstoreTitle: 'Superstore Sales Dashboard',
      superstoreDescription: 'Pilotage commercial avec ventes, marges et tendances par région, catégorie et client, et des KPI clairs pour décider vite.',
      superstoreVisual: 'Aperçu animé du tableau de bord des ventes Superstore',
      financialAnalysisTag: 'Analyse financière', marketNewsTag: 'Actualité financière',
      marketAnalysisTag: 'Marchés mondiaux', watchlistsTag: 'Listes de suivi',
      retailTag: 'Retail', businessIntelligenceTag: 'Business Intelligence',
      commercialAnalysisTag: 'Analyse commerciale', salesTag: 'Ventes',
      readPdf: 'Lire la documentation PDF', readEnglishVersion: 'Lire la version anglaise',
      viewProject: 'Test en ligne',
      projectOffline: 'Projet temporairement indisponible',
      documentationFrPlaceholder: 'Modop FR (à ajouter)', documentationEnPlaceholder: 'Modop EN (à ajouter)',
      playProjectVideo: 'Lire la vidéo de présentation du projet',
      postulaLabel: 'Application · Gestion des candidatures', postulaTitle: 'Postula',
      postulaDescription: 'Postula accompagne la recherche d’emploi en aidant à organiser ses candidatures et à suivre ses démarches au même endroit.',
      postulaVisual: 'Aperçu du projet Postula', postulaTag1: 'Application', postulaTag2: 'Présentation du projet',
      postulaDocumentButton: 'Voir la description du projet', viewCode: 'Code sur GitHub',
      jobIntelligenceLabel: 'Application · Recherche et ciblage d’offres', jobIntelligenceTitle: 'Job Intelligence',
      jobIntelligenceDescription: 'Cet agent met l’IA au service de la recherche d’emploi pour aider à explorer les opportunités et mieux cibler ses candidatures.',
      electronicsLabel: 'Retail · Analyse commerciale', electronicsTitle: 'Electronics',
      electronicsDescription: 'Analyse des ventes d’équipements électroniques pour suivre le chiffre d’affaires et la performance commerciale.',
      electronicsVisual: 'Aperçu animé du projet Electronics',
      portfolioEyebrow: 'Pour aller plus loin', portfolioTitle: 'Mon parcours complet, à votre rythme.',
      portfolioDescription: 'Expériences, compétences, formations et contact : tout le reste de mon portfolio est ici.',
      certificationsEyebrow: 'Certifications', certificationsTitle: 'Mes certifications',
      certificationObtained: 'Obtenue', viewCertification: 'Voir la certification',
      skillsEyebrow: 'Compétences', skillsTitle: 'Compétences techniques',
      skillsDescription: 'Les outils surlignés sont ceux que j’utilise au quotidien en entreprise.',
      skillsCommand: "SELECT competence FROM profil WHERE niveau = 'opérationnel';",
      contactEyebrow: 'Contact', contactTitle: 'Une opportunité ? Échangeons.',
      contactDescription: 'Je recherche un stage, un CDD ou un CDI en Data Analyse, Data Management ou gouvernance des données.',
      lastName: 'Nom', firstName: 'Prénom', phone: 'Téléphone', subject: 'Sujet', message: 'Message',
      lastNamePlaceholder: 'Dupont', firstNamePlaceholder: 'Marie', emailPlaceholder: 'vous@email.com',
      phonePlaceholder: '00 00 00 00 00', subjectPlaceholder: 'Proposition de stage, CDD ou CDI…',
      messagePlaceholder: 'Votre message…',
      consent: 'J’accepte que les informations saisies dans ce formulaire soient utilisées pour me recontacter, conformément au RGPD. Aucune donnée n’est transmise à un tiers.',
      sendMessage: 'Envoyer le message',
      formError: 'Merci de remplir les champs obligatoires et d’accepter la mention RGPD.',
      formSuccess: 'Votre messagerie s’ouvre avec le message prérempli.',
      otherChannels: 'Autres moyens de contact',
      emailMe: 'M’écrire par e-mail', copyright: '© 2026 Moise Hounmenou — Tous droits réservés',
      portfolioComplete: 'Portfolio complet', close: 'Fermer',
      expandViewer: 'Agrandir', reduceViewer: 'Réduire',
      expandViewerLabel: 'Agrandir le document', reduceViewerLabel: 'Réduire le document',
      expandPreviewLabel: 'Agrandir l’aperçu', reducePreviewLabel: 'Réduire l’aperçu',
      zoomControls: 'Zoom', zoomIn: 'Agrandir le zoom', zoomOut: 'Réduire le zoom',
      recenter: 'Recentrer', prevPage: 'Page précédente', nextPage: 'Page suivante',
      paginationGroup: 'Pagination du document',
      openPreview: 'Agrandir l’aperçu',
      pdfFrameTitle: 'Documentation PDF du projet', pageTitle: 'Data Analyst - Hounmenou Projets',
      pageDescription: 'Découvrez les projets data de Moise Hounmenou : réalisations, démonstrations et documentations.',
      langButton: 'EN', langAria: 'Switch to English'
    },
    en: {
      formSending: 'Sending…', formSent: 'Thank you! Your message has been sent, I will get back to you soon.', formFail: 'Sending failed. You can email me directly at moisekhounmenou@gmail.com.',
      visits: 'visits', viewCount: 'views', footTagline: 'Data Analyst · Data × BI × AI',
      methodTitle: 'My approach', methodSub: 'From raw data to decisions, in 4 steps.',
      m1t: 'Collect', m1: 'I gather data wherever it lives: SQL databases, APIs, files and business tools.',
      m2t: 'Validate', m2: 'I clean, check and document the data so every figure is accurate and traceable.',
      m3t: 'Analyse', m3: 'I model and explore the data to surface trends, gaps and weak signals.',
      m4t: 'Decide', m4: 'I deliver clear dashboards that help teams take action.',
      introBio: 'Data Analyst &amp; Business Analyst with <strong>3 years of experience in data</strong> (ETL, SQL, BigQuery, Power BI, data quality and governance) for major clients in retail, insurance and the public sector, combined experience in <strong>finance and trading</strong> after <strong>3 years in application development</strong>. This triple background lets me build reliable pipelines and tools that business teams actually use.',
      stat1b: '3+ years', stat1: 'of experience in data', stat2b: '3 years', stat2: 'in application development', stat3: 'Data processed', stat4: 'analyzed verbatims',
      photoAlt: 'Photo of Moise Hounmenou', skipLink: 'Skip to content',
      readPdfShort: 'Modop FR', readEnglishShort: 'Modop EN',
      filterLabel: 'Filter projects', filterAll: 'All', filterFinance: 'Finance', filterCrypto: 'Crypto', filterRetail: 'Retail', filterApps: 'Apps',
      loading: 'Loading data', backTop: 'Back to top', themeToggle: 'Toggle light or dark theme',
      homeLabel: 'Home, Moise Hounmenou', navLabel: 'Main navigation', quickLinks: 'CV and quick contact',
      technologiesLabel: 'Technologies used', topicsLabel: 'Topics',
      navProjects: 'Projects', navCertifications: 'Certifications', navSkills: 'Skills', navContact: 'Contact', viewPortfolio: 'View my full background',
      downloadCv: 'Download CV', viewCv: 'View CV',
      eyebrow: 'Collect · Validate · Deliver value',
      availability: 'Data Analyst · Open to new challenges',
      heroTitle: 'I turn data into reliable decisions.',
      intro: 'A selection of projects showing how I turn data into reliable tools and actionable decisions.',
      projectSelection: 'Selected projects', myProjects: 'My projects',
      cryptoLabel: 'Data project · Analytics & visualisation',
      cryptoTitle: 'Crypto Market Dashboard',
      cryptoDescription: 'Crypto market tracking : prices, market caps and volumes of the main assets, to compare trends.',
      cryptoTagAnalysis: 'Data analysis', cryptoTagMarket: 'Crypto market',
      cryptoVisual: 'Animated preview of the Crypto Market dashboard',
      nasdaqLabel: 'Finance · AI & market analysis',
      nasdaqTitle: 'NASDAQ AI Stocks',
      nasdaqDescription: 'Analysis of 25 NASDAQ AI stocks combining technical indicators, fundamentals and sector comparisons to spot opportunities fast.',
      nasdaqVisual: 'Animated preview of the NASDAQ AI stocks dashboard',
      marketsLabel: 'Finance · Market intelligence',
      marketsTitle: 'Global Market News',
      marketsDescription: '80 financial articles sorted into 8 categories and 4 sections: one centralised news watch that gets straight to the point.',
      marketsVisual: 'Animated preview of the global market news dashboard',
      watchlistsLabel: 'Finance · Stock market analysis',
      watchlistsTitle: 'Stock Market Watchlists',
      watchlistsDescription: '24 watchlists and more than 25 popular lists to compare prices, changes, volumes and market caps at a glance.',
      watchlistsVisual: 'Animated preview of the stock market watchlists dashboard',
      stockAnalysisLabel: 'Finance · Stock market analysis',
      stockAnalysisTitle: 'Stock Market Analysis',
      stockAnalysisDescription: 'A financial market analysis that puts stock indicators and their movements into context to help identify trends.',
      stockAnalysisVisual: 'Animated preview of the stock market analysis dashboard',
      cleanerDatasetLabel: 'Application · Data preparation',
      cleanerDatasetTitle: 'Cleaner Dataset',
      cleanerDatasetDescription: 'Cleaner Dataset prepares datasets for analysis by helping clean and structure them and check their quality.',
      dataCleaningTag: 'Data cleaning',
      fileInterpreterLabel: 'Application · File analysis and summarization',
      fileInterpreterTitle: 'File Interpreter Agent',
      fileInterpreterDescription: 'This AI agent analyses uploaded files to extract useful information and make their results easier to understand and use.',
      fileAnalysisTag: 'File analysis',
      aiTag: 'AI', pythonTag: 'Python', dataTag: 'Data',
      superstoreLabel: 'Retail · Business Intelligence',
      superstoreTitle: 'Superstore Sales Dashboard',
      superstoreDescription: 'Sales performance monitoring: revenue, margins and trends by region, category and customer, with clear KPIs for quick decisions.',
      superstoreVisual: 'Animated preview of the Superstore sales dashboard',
      financialAnalysisTag: 'Financial analysis', marketNewsTag: 'Financial news',
      marketAnalysisTag: 'Global markets', watchlistsTag: 'Watchlists',
      retailTag: 'Retail', businessIntelligenceTag: 'Business Intelligence',
      commercialAnalysisTag: 'Sales analysis', salesTag: 'Sales',
      readPdf: 'Read the PDF documentation', readEnglishVersion: 'Read the English version',
      viewProject: 'Test online',
      projectOffline: 'Project temporarily unavailable',
      documentationFrPlaceholder: 'Modop FR (to add)', documentationEnPlaceholder: 'Modop EN (to add)',
      playProjectVideo: 'Play the project presentation video',
      postulaLabel: 'Application · Job application tracker', postulaTitle: 'Postula',
      postulaDescription: 'Postula supports the job search by helping organise applications and track progress in one place.',
      postulaVisual: 'Preview of the Postula project', postulaTag1: 'Application', postulaTag2: 'Project presentation',
      postulaDocumentButton: 'View project description', viewCode: 'Code on GitHub',
      jobIntelligenceLabel: 'Application · Job search and offer targeting', jobIntelligenceTitle: 'Job Intelligence',
      jobIntelligenceDescription: 'This agent applies IA to job searching, helping users explore opportunities and target applications more effectively.',
      electronicsLabel: 'Retail · Sales analysis', electronicsTitle: 'Electronics',
      electronicsDescription: 'Sales analysis for electronic equipment to monitor revenue and commercial performance.',
      electronicsVisual: 'Animated preview of the Electronics project',
      portfolioEyebrow: 'Learn more', portfolioTitle: 'My full background, at your pace.',
      portfolioDescription: 'Experience, skills, education and contact details: find the rest of my portfolio here.',
      certificationsEyebrow: 'Certifications', certificationsTitle: 'My certifications',
      certificationObtained: 'Obtained', viewCertification: 'View certification',
      skillsEyebrow: 'Skills', skillsTitle: 'Technical skills',
      skillsDescription: 'Highlighted tools are the ones I use every day at work.',
      skillsCommand: "SELECT skill FROM profile WHERE level = 'hands-on';",
      contactEyebrow: 'Contact', contactTitle: 'Have an opportunity? Let’s talk.',
      contactDescription: 'I am looking for an internship, fixed-term contract or permanent role in data analysis, data management or data governance.',
      lastName: 'Last name', firstName: 'First name', phone: 'Phone', subject: 'Subject', message: 'Message',
      lastNamePlaceholder: 'Smith', firstNamePlaceholder: 'Jane', emailPlaceholder: 'you@email.com',
      phonePlaceholder: '+33 0 00 00 00 00', subjectPlaceholder: 'Internship or job offer…',
      messagePlaceholder: 'Your message…',
      consent: 'I agree that the information entered in this form may be used to contact me in accordance with the GDPR. No data is shared with third parties.',
      sendMessage: 'Send message',
      formError: 'Please complete the required fields and accept the GDPR notice.',
      formSuccess: 'Your email app is opening with the message pre-filled.',
      otherChannels: 'Other ways to contact me',
      emailMe: 'Send me an email', copyright: '© 2026 Moise Hounmenou — All rights reserved',
      portfolioComplete: 'Full portfolio', close: 'Close',
      expandViewer: 'Enlarge', reduceViewer: 'Restore size',
      expandViewerLabel: 'Enlarge document', reduceViewerLabel: 'Restore document size',
      expandPreviewLabel: 'Enlarge preview', reducePreviewLabel: 'Restore preview size',
      zoomControls: 'Zoom', zoomIn: 'Zoom in', zoomOut: 'Zoom out',
      recenter: 'Recenter', prevPage: 'Previous page', nextPage: 'Next page',
      paginationGroup: 'Document pagination',
      openPreview: 'Enlarge preview',
      pdfNote: 'The viewer hides download controls. However, a PDF displayed in a browser cannot be made technically impossible to save.',
      pdfFrameTitle: 'Project PDF documentation', pageTitle: 'Data Analyst - Hounmenou Projects',
      pageDescription: 'Explore Moise Hounmenou’s data projects, demos and documentation.',
      langButton: 'FR', langAria: 'Passer en français'
    }
  };

  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf.worker.min.js';
  }

  var dialog = document.getElementById('pdfDialog');
  var title = document.getElementById('pdfTitle');
  var pdfDialogContent = document.getElementById('pdfDialogContent');
  var pdfCanvasContainer = document.getElementById('pdfCanvasContainer');
  var pdfCanvas = document.getElementById('pdfCanvas');
  var pdfLoading = document.getElementById('pdfLoading');
  var pdfPagination = document.getElementById('pdfPagination');
  var pdfPageNum = document.getElementById('pdfPageNum');
  var prevPdfPageButton = document.getElementById('prevPdfPage');
  var nextPdfPageButton = document.getElementById('nextPdfPage');
  var zoomOutPdfButton = document.getElementById('zoomOutPdf');
  var zoomInPdfButton = document.getElementById('zoomInPdf');
  var pdfZoomLevel = document.getElementById('pdfZoomLevel');
  var recenterPdfButton = document.getElementById('recenterPdf');
  var closeButton = document.getElementById('closePdf');
  var pdfSizeButton = document.getElementById('togglePdfSize');

  var previewDialog = document.getElementById('previewDialog');
  var previewTitle = document.getElementById('previewTitle');
  var previewImage = document.getElementById('previewImage');
  var previewContent = document.querySelector('.preview-dialog-content');
  var previewZoomLevel = document.getElementById('previewZoomLevel');
  var previewButtons = document.querySelectorAll('.project-preview');
  var closePreviewButton = document.getElementById('closePreview');
  var previewSizeButton = document.getElementById('togglePreviewSize');
  var zoomOutButton = document.getElementById('zoomOutPreview');
  var zoomInButton = document.getElementById('zoomInPreview');
  var recenterPreviewButton = document.getElementById('recenterPreview');

  var videoDialog = document.getElementById('videoDialog');
  var langButton = document.getElementById('langBtn');
  var themeButton = document.getElementById('themeBtn');

  var currentPdfButton = null;
  var currentPreviewButton = null;
  var previewZoom = 1;
  var previewMaxZoom = 1;
  var pdfZoom = 1;
  var currentPdfDoc = null;
  var currentPdfPage = 1;
  var totalPdfPages = 1;
  var pdfRenderTask = null;
  var pageScrollY = 0;
  var lang = 'fr';
  var queryLang = new URLSearchParams(location.search).get('lang');

  function lockPageScroll() {
    if (document.body.classList.contains('modal-open')) return;
    pageScrollY = window.scrollY;
    document.body.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + 'px');
    document.body.style.top = '-' + pageScrollY + 'px';
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
  }

  function unlockPageScroll() {
    if (dialog.open || previewDialog.open || (videoDialog && videoDialog.open)) return;
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('--scrollbar-width');
    document.body.style.removeProperty('top');
    window.scrollTo(0, pageScrollY);
    document.documentElement.classList.remove('modal-open');
  }

  function updateSizeButton(modal, button, strings, label) {
    var expanded = modal.classList.contains('is-expanded');
    button.querySelector('span').textContent = strings[expanded ? 'reduceViewer' : 'expandViewer'];
    button.setAttribute('aria-label', strings[expanded ? 'reduce' + label : 'expand' + label]);
    button.setAttribute('aria-pressed', String(expanded));
  }

  function updatePreviewZoom() {
    if (!previewImage.naturalWidth || !previewImage.naturalHeight) return;
    var fitScale = Math.min(
      previewContent.clientWidth / previewImage.naturalWidth,
      previewContent.clientHeight / previewImage.naturalHeight
    );
    // Zoom plafonné à la résolution réelle de l'image : au-delà, elle pixelise.
    previewMaxZoom = Math.max(1, Math.round((1 / fitScale) * 100) / 100);
    if (previewZoom > previewMaxZoom) previewZoom = previewMaxZoom;
    zoomInButton.disabled = previewZoom >= previewMaxZoom;
    zoomOutButton.disabled = previewZoom <= 1;
    previewImage.style.width = Math.round(previewImage.naturalWidth * fitScale * previewZoom) + 'px';
    previewImage.style.height = Math.round(previewImage.naturalHeight * fitScale * previewZoom) + 'px';
    previewContent.classList.toggle('is-zoomed', previewZoom > 1);
    previewZoomLevel.textContent = Math.round(previewZoom * 100) + ' %';
  }

  function recenterPreview() {
    previewZoom = 1;
    updatePreviewZoom();
    previewContent.scrollLeft = Math.max(0, (previewContent.scrollWidth - previewContent.clientWidth) / 2);
    previewContent.scrollTop = Math.max(0, (previewContent.scrollHeight - previewContent.clientHeight) / 2);
  }

  function applyPdfZoom() {
    pdfZoomLevel.textContent = Math.round(pdfZoom * 100) + ' %';
    var isZoomed = pdfZoom > 1;
    pdfDialogContent.classList.toggle('is-zoomed', isZoomed);
    var panOverlay = document.getElementById('pdfPanOverlay');
    if (panOverlay) panOverlay.style.display = isZoomed ? 'block' : 'none';

    if (currentPdfDoc) {
      renderPdfPage(currentPdfPage);
    } else {
      // Lecteur PDF natif : on demande au lecteur de zoomer lui-même (rendu net)
      // au lieu d'agrandir l'iframe en CSS (rendu flou).
      var frame = document.getElementById('pdfFrame');
      var overlay = document.getElementById('pdfPanOverlay');
      if (overlay) overlay.style.display = 'none';
      pdfDialogContent.classList.remove('is-zoomed');
      if (frame && currentPdfUrl) {
        if (/^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/preview$/.test(currentPdfUrl)) {
          if (frame.src !== currentPdfUrl) frame.src = currentPdfUrl;
          return;
        }
        var hash = '#toolbar=0&navpanes=0&' + (pdfZoom === 1 ? 'view=FitH' : 'zoom=' + Math.round(pdfZoom * 100));
        frame.src = 'about:blank';
        setTimeout(function () { frame.src = currentPdfUrl + hash; }, 30);
      }
    }
  }

  function renderPdfPage(pageNumber) {
    if (!currentPdfDoc) return;
    if (pdfRenderTask) {
      try { pdfRenderTask.cancel(); } catch (e) {}
      pdfRenderTask = null;
    }
    pdfLoading.style.display = 'flex';

    currentPdfDoc.getPage(pageNumber).then(function (page) {
      var paddingH = 32;
      var paddingV = 32;
      var availW = Math.max(100, pdfDialogContent.clientWidth - paddingH);
      var availH = Math.max(100, pdfDialogContent.clientHeight - paddingV);

      var baseViewport = page.getViewport({ scale: 1 });
      var fitScale = Math.min(availW / baseViewport.width, availH / baseViewport.height);
      if (!fitScale || fitScale <= 0) fitScale = 1;

      var actualScale = fitScale * pdfZoom;
      var viewport = page.getViewport({ scale: actualScale });

      var dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      pdfCanvas.width = Math.floor(viewport.width * dpr);
      pdfCanvas.height = Math.floor(viewport.height * dpr);
      pdfCanvas.style.width = Math.floor(viewport.width) + 'px';
      pdfCanvas.style.height = Math.floor(viewport.height) + 'px';

      var ctx = pdfCanvas.getContext('2d', { alpha: false });
      var transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null;

      pdfRenderTask = page.render({
        canvasContext: ctx,
        transform: transform,
        viewport: viewport
      });

      pdfRenderTask.promise.then(function () {
        pdfRenderTask = null;
        pdfLoading.style.display = 'none';
        pdfZoomLevel.textContent = Math.round(pdfZoom * 100) + ' %';
        pdfDialogContent.classList.toggle('is-zoomed', pdfZoom > 1);
        updatePdfPagination();
        if (pdfZoom === 1) {
          centerPdfScroll();
        }
      }).catch(function (err) {
        if (err && err.name === 'RenderingCancelledException') return;
        pdfLoading.style.display = 'none';
        console.warn('Erreur rendu page PDF', err);
      });
    }).catch(function (err) {
      pdfLoading.style.display = 'none';
      console.warn('Impossible de charger la page PDF', err);
    });
  }

  function updatePdfPagination() {
    pdfPageNum.textContent = currentPdfPage + ' / ' + totalPdfPages;
    prevPdfPageButton.disabled = (currentPdfPage <= 1);
    nextPdfPageButton.disabled = (currentPdfPage >= totalPdfPages);
    pdfPagination.style.display = totalPdfPages > 1 ? 'inline-flex' : 'none';
  }

  function centerPdfScroll() {
    pdfDialogContent.scrollLeft = Math.max(0, (pdfDialogContent.scrollWidth - pdfDialogContent.clientWidth) / 2);
    pdfDialogContent.scrollTop = 0;
  }

  function recenterPdf() {
    pdfZoom = 1;
    applyPdfZoom();
    centerPdfScroll();
  }

  var currentPdfUrl = '';
  function loadPdfDocument(url) {
    currentPdfUrl = url;
    currentPdfPage = 1;
    pdfZoom = 1;
    pdfZoomLevel.textContent = '100 %';
    pdfLoading.style.display = 'flex';
    pdfCanvas.style.display = 'none';
    var isDrivePdf = /^https:\/\/drive\.google\.com\/file\/d\/[\w-]+\/preview$/.test(url);
    dialog.classList.toggle('is-drive-pdf', isDrivePdf);
    if (isDrivePdf) {
      showPdfFallback(url);
      return;
    }

    var frameWrapper = document.getElementById('pdfFrameWrapper');
    if (frameWrapper) frameWrapper.style.display = 'none';

    if (window.pdfjsLib && location.protocol !== 'file:') {
      var loadingTask = window.pdfjsLib.getDocument({
        url: url,
        cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
        cMapPacked: true
      });

      loadingTask.promise.then(function (pdf) {
        currentPdfDoc = pdf;
        totalPdfPages = pdf.numPages || 1;
        pdfCanvas.style.display = 'block';
        if (frameWrapper) frameWrapper.style.display = 'none';
        applyPdfZoom();
      }).catch(function (err) {
        console.warn('PDF.js n’a pas pu charger le fichier, utilisation du lecteur intégré.', err);
        showPdfFallback(url);
      });
    } else {
      showPdfFallback(url);
    }
  }

  function showPdfFallback(url) {
    pdfLoading.style.display = 'none';
    pdfCanvas.style.display = 'none';
    pdfPagination.style.display = 'none';
    currentPdfDoc = null;
    var frameWrapper = document.getElementById('pdfFrameWrapper');
    var frame = document.getElementById('pdfFrame');
    if (frameWrapper && frame) {
      frameWrapper.style.display = 'block';
      frameWrapper.style.transform = 'none';
      frameWrapper.style.width = '100%';
      frameWrapper.style.height = '100%';
      var container = document.getElementById('pdfCanvasContainer');
      if (container) {
        container.style.width = '100%';
        container.style.height = '100%';
      }
    }
    applyPdfZoom();
  }

  function makeDraggable(container, isZoomedFn) {
    var isDown = false;
    var startX, startY;
    var scrollLeftStart, scrollTopStart;

    container.addEventListener('mousedown', function (e) {
      if (!isZoomedFn()) return;
      if (e.button !== 0) return;
      isDown = true;
      container.classList.add('is-grabbing');
      startX = e.pageX - container.offsetLeft;
      startY = e.pageY - container.offsetTop;
      scrollLeftStart = container.scrollLeft;
      scrollTopStart = container.scrollTop;
    });

    window.addEventListener('mouseup', function () {
      if (isDown) {
        isDown = false;
        container.classList.remove('is-grabbing');
      }
    });

    container.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - container.offsetLeft;
      var y = e.pageY - container.offsetTop;
      container.scrollLeft = scrollLeftStart - (x - startX);
      container.scrollTop = scrollTopStart - (y - startY);
    });

    var touchStartX, touchStartY;
    container.addEventListener('touchstart', function (e) {
      if (!isZoomedFn() || e.touches.length !== 1) return;
      touchStartX = e.touches[0].pageX;
      touchStartY = e.touches[0].pageY;
      scrollLeftStart = container.scrollLeft;
      scrollTopStart = container.scrollTop;
    }, { passive: true });

    container.addEventListener('touchmove', function (e) {
      if (!isZoomedFn() || e.touches.length !== 1) return;
      var touchX = e.touches[0].pageX;
      var touchY = e.touches[0].pageY;
      container.scrollLeft = scrollLeftStart - (touchX - touchStartX);
      container.scrollTop = scrollTopStart - (touchY - touchStartY);
    }, { passive: true });
  }

  previewImage.addEventListener('load', updatePreviewZoom);
  var resizePdfTimeout = null;
  window.addEventListener('resize', function () {
    updatePreviewZoom();
    if (dialog.open) {
      clearTimeout(resizePdfTimeout);
      resizePdfTimeout = setTimeout(function () {
        applyPdfZoom();
      }, 150);
    }
  });

  zoomOutButton.addEventListener('click', function () {
    previewZoom = Math.max(1, previewZoom - .25);
    updatePreviewZoom();
  });
  zoomInButton.addEventListener('click', function () {
    previewZoom = Math.min(previewMaxZoom, previewZoom + .25);
    updatePreviewZoom();
  });
  recenterPreviewButton.addEventListener('click', recenterPreview);

  prevPdfPageButton.addEventListener('click', function () {
    if (currentPdfPage > 1) {
      currentPdfPage--;
      renderPdfPage(currentPdfPage);
    }
  });
  nextPdfPageButton.addEventListener('click', function () {
    if (currentPdfPage < totalPdfPages) {
      currentPdfPage++;
      renderPdfPage(currentPdfPage);
    }
  });
  zoomOutPdfButton.addEventListener('click', function () {
    pdfZoom = Math.max(0.5, Math.round((pdfZoom - 0.25) * 100) / 100);
    applyPdfZoom();
  });
  zoomInPdfButton.addEventListener('click', function () {
    pdfZoom = Math.min(3, Math.round((pdfZoom + 0.25) * 100) / 100);
    applyPdfZoom();
  });
  recenterPdfButton.addEventListener('click', recenterPdf);

  pdfDialogContent.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  pdfCanvas.addEventListener('dragstart', function (e) {
    e.preventDefault();
  });

  window.addEventListener('keydown', function (e) {
    if (dialog.open) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (currentPdfPage < totalPdfPages) {
          currentPdfPage++;
          renderPdfPage(currentPdfPage);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (currentPdfPage > 1) {
          currentPdfPage--;
          renderPdfPage(currentPdfPage);
        }
      }
    }
    if ((dialog.open || previewDialog.open) && (e.ctrlKey || e.metaKey)) {
      if (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P') {
        e.preventDefault();
      }
    }
  });

  makeDraggable(previewContent, function () { return previewZoom > 1; });
  makeDraggable(pdfDialogContent, function () { return pdfZoom > 1; });

  try {
    var savedLang = localStorage.getItem('lang');
    if (savedLang === 'fr' || savedLang === 'en') lang = savedLang;
  } catch (error) {
    console.warn('Impossible de lire la langue enregistrée.', error);
  }
  if (queryLang === 'fr' || queryLang === 'en') lang = queryLang;

  var skillObserver = null;
  function observeSkillCards() {
    var cards = document.querySelectorAll('#skillsGrid .reveal');
    if (skillObserver) skillObserver.disconnect();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      cards.forEach(function (card) { card.classList.add('in'); });
      return;
    }
    skillObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .06 });
    cards.forEach(function (card) { skillObserver.observe(card); });
  }

  function renderLanguage() {
    var strings = TEXT[lang];
    document.documentElement.lang = lang;
    document.title = strings.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', strings.pageDescription);
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      if (strings[key] !== undefined) element.textContent = strings[key];
    });
    document.querySelectorAll('[data-i18n="readPdfShort"]').forEach(function (label) {
      label.parentElement.hidden = lang !== 'fr';
    });
    document.querySelectorAll('[data-i18n="readEnglishShort"]').forEach(function (label) {
      label.parentElement.hidden = lang !== 'en';
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
      var key = element.getAttribute('data-i18n-html');
      if (strings[key] !== undefined) element.innerHTML = strings[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (element) {
      var key = element.getAttribute('data-i18n-aria');
      if (strings[key] !== undefined) element.setAttribute('aria-label', strings[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (element) {
      var key = element.getAttribute('data-i18n-alt');
      if (strings[key] !== undefined) element.setAttribute('alt', strings[key]);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (element) {
      var key = element.getAttribute('data-i18n-title');
      if (strings[key] !== undefined) element.setAttribute('title', strings[key]);
    });
    updateSizeButton(dialog, pdfSizeButton, strings, 'ViewerLabel');
    updateSizeButton(previewDialog, previewSizeButton, strings, 'PreviewLabel');
    document.querySelectorAll('[data-ph]').forEach(function (element) {
      var key = element.getAttribute('data-ph');
      if (strings[key] !== undefined) element.setAttribute('placeholder', strings[key]);
    });
    langButton.textContent = strings.langButton;
    langButton.setAttribute('aria-label', strings.langAria);
    document.getElementById('skillsGrid').innerHTML = PORTFOLIO_SKILLS.map(function (skill) {
      return '<article class="sk glass card-glow reveal"><span class="ic">' + PORTFOLIO_SKILL_ICONS[skill.icon] +
        '</span><span class="cat">' + skill.cat[lang] + '</span><h3>' + skill.t[lang] +
        '</h3><ul class="tags">' + skill.items.map(function (item) {
          var key = typeof item === 'object' && item.k ? item.k : (typeof item === 'string' ? item : item[lang]);
          var label = typeof item === 'string' ? item : item[lang];
          var isHot = (skill.hot || []).indexOf(key) !== -1;
          return '<li' + (isHot ? ' class="hot"' : '') + '>' + label + '</li>';
        }).join('') + '</ul></article>';
    }).join('');
    observeSkillCards();
    if (currentPdfButton) {
      title.textContent = currentPdfButton.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title') ||
        currentPdfButton.getAttribute('data-title') || strings.pdfFrameTitle;
    }
    if (currentPreviewButton) {
      previewTitle.textContent = currentPreviewButton.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title') ||
        currentPreviewButton.getAttribute('data-title') || strings.openPreview;
    }
  }

  renderLanguage();

  langButton.addEventListener('click', function () {
    lang = lang === 'fr' ? 'en' : 'fr';
    try {
      localStorage.setItem('lang', lang);
    } catch (error) {
      console.warn('Impossible d’enregistrer la langue choisie.', error);
    }
    renderLanguage();
  });

  themeButton.addEventListener('click', function () {
    var root = document.documentElement;
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (error) {
      console.warn('Impossible d’enregistrer le thème choisi.', error);
    }
  });

  var pdfButtons = document.querySelectorAll('.pdf-link');
  pdfButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentPdfButton = button;
      title.textContent = button.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title') ||
        button.getAttribute('data-title') || TEXT[lang].pdfFrameTitle;
      var pdfUrl = button.getAttribute('data-pdf');
      dialog.classList.remove('is-expanded');
      updateSizeButton(dialog, pdfSizeButton, TEXT[lang], 'ViewerLabel');
      lockPageScroll();
      dialog.showModal();
      loadPdfDocument(pdfUrl);
    });
  });

  pdfSizeButton.addEventListener('click', function () {
    dialog.classList.toggle('is-expanded');
    updateSizeButton(dialog, pdfSizeButton, TEXT[lang], 'ViewerLabel');
    setTimeout(function () {
      applyPdfZoom();
    }, 100);
  });

  previewButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentPreviewButton = button;
      var image = button.querySelector('img');
      previewTitle.textContent = button.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title') ||
        button.getAttribute('data-title') || TEXT[lang].openPreview;
      previewImage.src = image.currentSrc || image.src;
      previewImage.alt = image.alt;
      previewZoom = 1;
      previewDialog.classList.remove('is-expanded');
      updateSizeButton(previewDialog, previewSizeButton, TEXT[lang], 'PreviewLabel');
      lockPageScroll();
      previewDialog.showModal();
      updatePreviewZoom();
    });
  });

  // Certifications : ouverture de l'image du certificat dans la visionneuse
  document.querySelectorAll('.cert-view').forEach(function (button) {
    button.addEventListener('click', function () {
      currentPreviewButton = button;
      previewTitle.textContent = button.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title') || button.getAttribute('data-title');
      previewImage.src = button.getAttribute('data-cert');
      previewImage.alt = button.getAttribute('data-title');
      previewZoom = 1;
      previewDialog.classList.remove('is-expanded');
      updateSizeButton(previewDialog, previewSizeButton, TEXT[lang], 'PreviewLabel');
      lockPageScroll();
      previewDialog.showModal();
      updatePreviewZoom();
    });
  });

  // Projet vidéo : lecture dans une fenêtre (Google Drive ou MP4 local)
  var videoContent = document.getElementById('videoContent');
  var videoTitle = document.getElementById('videoTitle');
  function openVideo(trigger) {
    var src = trigger.getAttribute('data-video');
    videoTitle.textContent = trigger.getAttribute(lang === 'en' ? 'data-title-en' : 'data-title') || trigger.getAttribute('data-title');
    videoContent.innerHTML = '';
    var player = document.createElement('video');
    player.src = src;
    player.controls = true;
    player.autoplay = true;
    player.playsInline = true;
    player.setAttribute('controlsList', 'nodownload');
    videoContent.appendChild(player);
    lockPageScroll();
    videoDialog.showModal();
  }
  function closeVideo() {
    if (videoDialog.open) videoDialog.close();
    videoContent.innerHTML = '';
    unlockPageScroll();
  }
  document.querySelectorAll('.project-video').forEach(function (trigger) {
    trigger.addEventListener('click', function () { openVideo(trigger); });
    var card = trigger.closest('.project-card');
    var link = card && card.querySelector('.project-video-link');
    if (link) link.addEventListener('click', function () { openVideo(trigger); });
  });
  var videoPreviews = document.querySelectorAll('.project-video-preview');
  var reducedMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function loadVideoPreview(video) {
    if (!video.src) {
      if (reducedMotionPreference) {
        video.addEventListener('loadedmetadata', function () {
          video.currentTime = Math.min(0.1, video.duration || 0.1);
        }, { once: true });
      }
      video.src = video.getAttribute('data-preview-src');
      video.load();
    }
  }
  function playVideoPreview(video) {
    if (reducedMotionPreference) {
      loadVideoPreview(video);
      return;
    }
    loadVideoPreview(video);
    var playRequest = video.play();
    if (playRequest && typeof playRequest.catch === 'function') {
      playRequest.catch(function (error) {
        if (error.name !== 'AbortError') console.warn('Impossible de lire l’aperçu vidéo.', error);
      });
    }
  }
  if ('IntersectionObserver' in window) {
    var videoPreviewObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          playVideoPreview(entry.target);
        } else if (!reducedMotionPreference) {
          entry.target.pause();
        }
      });
    }, { rootMargin: '120px 0px' });
    videoPreviews.forEach(function (video) { videoPreviewObserver.observe(video); });
  } else {
    videoPreviews.forEach(playVideoPreview);
  }
  document.getElementById('closeVideo').addEventListener('click', closeVideo);
  videoDialog.addEventListener('cancel', function (event) { event.preventDefault(); closeVideo(); });
  videoDialog.addEventListener('click', function (event) { if (event.target === videoDialog) closeVideo(); });
  // Bouton GitHub masqué tant que le lien n'est pas renseigné
  document.querySelectorAll('.github-link').forEach(function (link) {
    if (!link.getAttribute('href') || link.getAttribute('href') === '#') link.hidden = true;
  });
  // Filtres des réalisations
  var projectCards = Array.prototype.slice.call(document.querySelectorAll('#projectsGrid .project-card'));
  projectCards.forEach(function (card) {
    var testLink = card.querySelector('.project-link[href]');
    if (!testLink) return;
    card.classList.add('is-testable');
    card.addEventListener('click', function (event) {
      if (event.target.closest('a, button, input, select, textarea, summary')) return;
      testLink.click();
    });
  });
  function applyProjectFilter(filter) {
    var visible = projectCards.filter(function (card) {
      var show = filter === 'all' || card.getAttribute('data-category') === filter;
      card.hidden = !show;
      return show;
    });
    var count = document.getElementById('projectCount');
    if (count) count.textContent = (visible.length < 10 ? '0' : '') + visible.length;
  }
  document.querySelectorAll('.filter-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('is-active', b === button);
        b.setAttribute('aria-pressed', String(b === button));
      });
      applyProjectFilter(button.getAttribute('data-filter'));
    });
  });
  applyProjectFilter('all');

  previewSizeButton.addEventListener('click', function () {
    previewDialog.classList.toggle('is-expanded');
    updateSizeButton(previewDialog, previewSizeButton, TEXT[lang], 'PreviewLabel');
    updatePreviewZoom();
  });

  function finishPdfDialog() {
    if (pdfRenderTask) {
      try { pdfRenderTask.cancel(); } catch (e) {}
      pdfRenderTask = null;
    }
    if (currentPdfDoc) {
      try { currentPdfDoc.destroy(); } catch (e) {}
      currentPdfDoc = null;
    }
    var ctx = pdfCanvas.getContext('2d');
    ctx.clearRect(0, 0, pdfCanvas.width, pdfCanvas.height);
    pdfCanvas.width = 0;
    pdfCanvas.height = 0;
    pdfCanvas.style.display = 'none';
    var frame = document.getElementById('pdfFrame');
    if (frame) frame.src = 'about:blank';
    var frameWrapper = document.getElementById('pdfFrameWrapper');
    if (frameWrapper) {
      frameWrapper.style.transform = 'none';
      frameWrapper.style.width = '100%';
      frameWrapper.style.height = '100%';
      frameWrapper.style.display = 'none';
    }
    var container = document.getElementById('pdfCanvasContainer');
    if (container) {
      container.style.width = '100%';
      container.style.height = '100%';
    }
    var panOverlay = document.getElementById('pdfPanOverlay');
    if (panOverlay) panOverlay.style.display = 'none';
    pdfDialogContent.classList.remove('is-zoomed', 'is-grabbing');
    pdfZoom = 1;
    pdfZoomLevel.textContent = '100 %';
    currentPdfPage = 1;
    totalPdfPages = 1;
    currentPdfButton = null;
    dialog.classList.remove('is-expanded');
    updateSizeButton(dialog, pdfSizeButton, TEXT[lang], 'ViewerLabel');
    unlockPageScroll();
  }

  closeButton.addEventListener('click', function () {
    dialog.close();
    finishPdfDialog();
  });

  dialog.addEventListener('cancel', function (event) {
    event.preventDefault();
    dialog.close();
    finishPdfDialog();
  });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    dialog.close();
    finishPdfDialog();
  });

  function finishPreviewDialog() {
    previewImage.removeAttribute('src');
    previewImage.alt = '';
    previewImage.style.removeProperty('width');
    previewImage.style.removeProperty('height');
    previewZoom = 1;
    previewZoomLevel.textContent = '100 %';
    previewContent.classList.remove('is-zoomed');
    currentPreviewButton = null;
    previewDialog.classList.remove('is-expanded');
    updateSizeButton(previewDialog, previewSizeButton, TEXT[lang], 'PreviewLabel');
    unlockPageScroll();
  }

  closePreviewButton.addEventListener('click', function () {
    previewDialog.close();
    finishPreviewDialog();
  });

  previewDialog.addEventListener('cancel', function (event) {
    event.preventDefault();
    previewDialog.close();
    finishPreviewDialog();
  });
  previewDialog.addEventListener('click', function (event) {
    if (event.target !== previewDialog) return;
    previewDialog.close();
    finishPreviewDialog();
  });

  var toTop = document.getElementById('toTop');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
  function updateScrollControls() {
    toTop.classList.toggle('show', window.scrollY > 600);
  }
  window.addEventListener('scroll', updateScrollControls, { passive: true });
  updateScrollControls();

  var header = document.querySelector('.site-header');
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  var sectionLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav > a[href^="#"]'));
  var navigationSections = sectionLinks.map(function (link) {
    return { link: link, section: document.querySelector(link.getAttribute('href')) };
  }).filter(function (item) {
    return item.section;
  });
  function updateActiveSection() {
    var position = window.scrollY + window.innerHeight * .35;
    var current = null;
    navigationSections.forEach(function (item) {
      if (item.section.getBoundingClientRect().top + window.scrollY <= position) current = item;
    });
    navigationSections.forEach(function (item) {
      var isCurrent = item === current;
      item.link.classList.toggle('active', isCurrent);
      if (isCurrent) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection);
  updateActiveSection();

  var contactForm = document.getElementById('contactForm');
  var formNote = document.getElementById('formNote');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var strings = TEXT[lang];
    if (!contactForm.checkValidity()) {
      formNote.textContent = strings.formError;
      contactForm.reportValidity();
      return;
    }
    function value(id) {
      return document.getElementById(id).value.trim();
    }
    if (document.getElementById('botcheck').checked) return;
    if (window.SITE_EXTRAS && SITE_EXTRAS.canSend()) {
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      formNote.textContent = strings.formSending;
      SITE_EXTRAS.send({ nom: value('nom'), prenom: value('prenom'), email: value('email'), tel: value('tel'), sujet: value('sujet'), message: value('message') })
        .then(function () { formNote.textContent = strings.formSent; contactForm.reset(); })
        .catch(function () { formNote.textContent = strings.formFail; })
        .then(function () { submitBtn.disabled = false; });
      return;
    }
    var body = strings.lastName + ' : ' + value('nom') + ' ' + value('prenom') +
      '\nEmail : ' + value('email') + '\n' + strings.phone + ' : ' + value('tel') +
      '\n\n' + value('message');
    window.location.href = 'mailto:moisekhounmenou@gmail.com?subject=' +
      encodeURIComponent(value('sujet')) + '&body=' + encodeURIComponent(body);
    formNote.textContent = strings.formSuccess;
  });

  var loader = document.getElementById('loader');
  var percent = document.getElementById('loaderPercent');
  var progressBar = document.getElementById('loaderBar');
  var progress = 0;
  var timer = null;
  function finishLoading() {
    if (timer) window.clearInterval(timer);
    percent.textContent = '100%';
    progressBar.style.width = '100%';
    window.setTimeout(function () {
      loader.classList.add('done');
    }, 200);
  }
  if (prefersReducedMotion) {
    finishLoading();
  } else {
    timer = window.setInterval(function () {
      progress = Math.min(progress + Math.ceil(Math.random() * 12), 100);
      percent.textContent = progress + '%';
      progressBar.style.width = progress + '%';
      if (progress >= 100) finishLoading();
    }, 45);
  }
  window.setTimeout(function () {
    loader.classList.add('done');
  }, 2500);

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.band').forEach(function (section) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    if (!context) throw new Error('Impossible d’initialiser le fond animé.');
    canvas.className = 'network-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    section.insertBefore(canvas, section.firstChild);

    var points = [];
    var width = 0;
    var height = 0;
    var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    var frameCount = 0;
    var networkColors = { accent: '', muted: '' };
    var pointer = { x: -999, y: -999 };
    var visible = true;
    var animationFrame = 0;
    var cellSize = 170;

    function resizeNetwork() {
      var bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      var count = Math.round(Math.min(350, Math.max(24, width * height / 22000)));
      points = [];
      for (var index = 0; index < count; index += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - .5) * .35,
          vy: (Math.random() - .5) * .35
        });
      }
      if (reducedMotion) drawNetwork();
    }

    function drawNetwork() {
      animationFrame = 0;
      frameCount += 1;
      if (frameCount % 30 === 1) {
        var styles = getComputedStyle(document.documentElement);
        networkColors.accent = styles.getPropertyValue('--accent').trim();
        networkColors.muted = styles.getPropertyValue('--muted').trim();
      }
      context.clearRect(0, 0, width, height);
      var cells = new Map();
      points.forEach(function (point, index) {
        if (!reducedMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < 0 || point.x > width) point.vx *= -1;
          if (point.y < 0 || point.y > height) point.vy *= -1;
        }
        var cellX = Math.floor(point.x / cellSize);
        var cellY = Math.floor(point.y / cellSize);
        for (var offsetX = -1; offsetX <= 1; offsetX += 1) {
          for (var offsetY = -1; offsetY <= 1; offsetY += 1) {
            var nearby = cells.get((cellX + offsetX) + ',' + (cellY + offsetY));
            if (!nearby) continue;
            nearby.forEach(function (other) {
              var dx = point.x - other.x;
              var dy = point.y - other.y;
              var distanceSquared = dx * dx + dy * dy;
              if (distanceSquared < 14000) {
                context.globalAlpha = (1 - distanceSquared / 14000) * .45;
                context.strokeStyle = networkColors.muted;
                context.lineWidth = 1;
                context.beginPath();
                context.moveTo(point.x, point.y);
                context.lineTo(other.x, other.y);
                context.stroke();
              }
            });
          }
        }
        var pointerX = point.x - pointer.x;
        var pointerY = point.y - pointer.y;
        var pointerDistance = pointerX * pointerX + pointerY * pointerY;
        if (pointerDistance < 26000) {
          context.globalAlpha = (1 - pointerDistance / 26000) * .9;
          context.strokeStyle = networkColors.accent;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }
        context.globalAlpha = .95;
        context.fillStyle = networkColors.accent;
        context.beginPath();
        context.arc(point.x, point.y, 2.4, 0, Math.PI * 2);
        context.fill();
        var key = cellX + ',' + cellY;
        if (!cells.has(key)) cells.set(key, []);
        cells.get(key).push(point);
      });
      context.globalAlpha = 1;
      if (!reducedMotion && visible) animationFrame = window.requestAnimationFrame(drawNetwork);
    }

    function updateVisibility(entries) {
      entries.forEach(function (entry) {
        if (entry.target !== section) return;
        visible = entry.isIntersecting;
        if (visible && !reducedMotion && !animationFrame) {
          animationFrame = window.requestAnimationFrame(drawNetwork);
        } else if (!visible && animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = 0;
        }
      });
    }

    section.addEventListener('pointermove', function (event) {
      var bounds = section.getBoundingClientRect();
      var canvasBounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - canvasBounds.left;
      pointer.y = event.clientY - canvasBounds.top;
      if (reducedMotion) drawNetwork();
    }, { passive: true });
    section.addEventListener('pointerleave', function () {
      pointer.x = -999;
      pointer.y = -999;
      if (reducedMotion) drawNetwork();
    });
    window.addEventListener('resize', resizeNetwork);
    if ('IntersectionObserver' in window) {
      visible = false;
      new IntersectionObserver(updateVisibility, { rootMargin: '100px 0px' }).observe(section);
    }
    resizeNetwork();
    if (!reducedMotion && visible) animationFrame = window.requestAnimationFrame(drawNetwork);
  });
})();
