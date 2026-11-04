/* =====================================================================
   VOS LIENS : remplacez les valeurs vides par vos propres liens.
   Tant qu'un lien est vide, le bouton renvoie vers votre profil LinkedIn.
   ===================================================================== */
var PHOTOS={
  hero:"https://drive.google.com/thumbnail?id=1lCz5Bw2gdRuR-WeWUOAgFkIlLvjXiK8Y&sz=w2000",
  ia:"https://drive.google.com/thumbnail?id=1bCe-gH0KaV2cIjXL5ffY8WVfFpH6x6Ip&sz=w2000"
};
var LINKS={
  cv:"documents/CV_HOUNMENOU_DataManager.pdf",
  linkedin:"https://www.linkedin.com/in/moisehounmenou/",
  certsFallback:"https://www.linkedin.com/in/moisehounmenou/details/certifications/",
  projectsFallback:"https://www.linkedin.com/in/moisehounmenou/details/projects/",
  certs:{pl300:"",datacoach:"",google:"",ibm:""},
  projects:{dwh:"",ditp:"",carrefour:"",vente:"",pipeline:"",covid:"",supermarche:"",pret:"",jo:""}
};

var ICONS={
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/></svg>',
  db:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/></svg>',
  health:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  palette:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a5 5 0 0 0 5-5c0-4-4-7.2-9-7.2z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="14.5" cy="7" r="1"/><circle cx="17" cy="11" r="1"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="5" rx="1"/><rect x="12" y="8" width="3" height="9" rx="1"/><rect x="17" y="5" width="3" height="12" rx="1"/></svg>',
  flow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="7" height="6" rx="1.5"/><rect x="15" y="3" width="7" height="6" rx="1.5"/><rect x="8.5" y="15" width="7" height="6" rx="1.5"/><path d="M5.5 9v2.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V9M12 13v2"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.3 9.1 5 5 0 0 0 7 19z"/></svg>',
  kanban:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 7v7M12 7v4M16 7v10"/></svg>',
  headphones:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/></svg>'
};
Object.assign(ICONS, PORTFOLIO_SKILL_ICONS);

/* ---------- Textes de l'interface (FR / EN) ---------- */
var UI={
fr:{
loading:"Chargement des données",nav_profil:"Profil",nav_comp:"Compétences",nav_xp:"Expériences",nav_certs:"Certifs",nav_certs_long:"Certifications",nav_edu:"Formation",nav_proj:"Projets",nav_int:"Intérêts",nav_contact:"Contact",int_h2:"Centres d'intérêt",ai_ph_t:"Votre photo IA ici",ai_ph:"Image synchronisée depuis Google Drive.",back_top:"Retour en haut",
eyebrow:"Collecter · Fiabiliser · Valoriser",badge:"Data Analyst · Disponible pour de nouveaux défis",role:"Ingénieur Data Analyst &amp; Data Manager",subtitle:"// ETL · SQL · BigQuery · Power BI · Qualité &amp; gouvernance des données",
pitch:"Je transforme des données dispersées en <strong>indicateurs fiables qui guident la décision</strong>. De la collecte à la restitution, je conçois des pipelines ETL, migre et optimise des entrepôts de données, mets en place des contrôles qualité et construis des tableaux de bord Power BI pour les équipes métiers.",
f1b:"3+ ans",f1:"d'expérience en data &amp;",f1c:"3 ans",f1d:"En dév",f2:"grands comptes : retail, assurance, public",f3:"certifié Microsoft Power BI",f4:"Île-de-France, Permis B",
cta_contact:"Me contacter",cta_cv:"Télécharger mon CV",cta_view_cv:"Aperçu du CV",cv_view_title:"Mon CV",close_cv:"Fermer",expand_cv:"Agrandir",reduce_cv:"Réduire",expand_cv_label:"Agrandir le document",reduce_cv_label:"Réduire le document",zoom_out:"Réduire le zoom",zoom_in:"Agrandir le zoom",recenter:"Recentrer",cert_zoom_controls:"Zoom de la certification",cv_view_note:"La barre d’outils PDF du navigateur permet de zoomer et de naviguer dans le document. Un navigateur ne peut toutefois pas empêcher totalement l’enregistrement d’un document consulté.",photo_note:"Remplacez par votre photo",chip1:"temps d'exécution SQL",chip2:"chargement Power BI",chip3:"anomalies de données",
prof_h2:"Un profil orienté résultats, pas seulement outils",prof_p:"Développeur de formation devenu ingénieur Data Analyst : je sais construire la donnée autant que la faire parler.",illu_note:"Illustration",
pc1_h:"Profil",pc1:"Ingénieur Data Analyst passionné par l'analyse, le traitement des données et la transformation digitale, je maîtrise Python, R, SQL et Power BI. Spécialiser en Big Data et IA, puis en Data, Finance et Trading. Ce double parcours me permet de comprendre aussi bien l'architecture technique que les enjeux métiers.",
pc2_h:"Ce que j'apporte",pc2:"Je m'investis à 100 % dans la performance des entreprises : je déploie des stratégies data, j'anticipe les besoins des clients et je crée de la valeur grâce à l'analyse des données et aux tableaux de bord. Concrètement, je peux vous aider à :",
help:["<b>Garantir la fiabilité de vos données</b> grâce à des contrôles qualité et des règles de validation","<b>Améliorer vos processus métiers</b> en automatisant les reportings et les traitements manuels","<b>Gérer les accès à vos données</b> avec des vues métier, une documentation claire et de bonnes pratiques de gouvernance","<b>Nettoyer, préparer, modéliser et analyser</b> vos données de bout en bout","<b>Produire des rapports analytiques, opérationnels et des tableaux de bord</b> rapides et utiles"],
pc3_h:"Qui suis-je", pc3:"Autonome, rigoureux et force de proposition, j'aborde chaque mission avec une approche orientée résultats. Je suis convaincu qu'une donnée fiable et bien restituée change la qualité des décisions.", //pc3:"Je recherche une opportunité en stage, en CDD ou en CDI comme Data Analyst, Data Manager ou en gouvernance des données, au sein d'une entreprise dynamique. Je souhaite mettre à profit mes compétences en analyse, en résolution de problèmes complexes et en reporting pour améliorer les processus de décision et optimiser les performances.",
term:"SELECT competence FROM profil WHERE niveau = 'opérationnel';",comp_h2:"Compétences techniques",comp_p:"Les outils surlignés sont ceux que j'utilise au quotidien en entreprise.",
xp_k:"Parcours",xp_h2:"Expériences professionnelles",xp_p:"Survolez une mission pour la mettre en lumière. Chacune présente le contexte, les réalisations et les résultats.",
s_date:"Recherche actuelle",s_title:"Stage · CDD · CDI",s_meta:"Data Analyst · Data Manager · Data Governance — ouvert à vos propositions",
s_text:"Autonome, rigoureux et force de proposition, j'aborde chaque mission avec une approche orientée résultats. Je suis convaincu qu'une donnée fiable et bien restituée change la qualité des décisions. Je suis à l'écoute d'opportunités dans une équipe data où je pourrai m'investir pleinement, de la collecte jusqu'à la valorisation des données.",
ctx:"Contexte.",more_btn:"Voir toutes les missions ↓",less_btn:"Réduire ↑",others_h:"Autres expériences",
obtained:"Obtenue",see_cert:"Voir la certification",see_proj:"Voir le projet",see_school:"Site de l'école",see_company:"Site web de l'entreprise",
proj_h2:"Projets &amp; études de cas",proj_p:"Les réalisations phares de mes missions, puis les projets data menés pendant mon Master Big Data &amp; IA à HETIC.",
ct_h2:"Discutons de votre besoin",ct_p:"Ouvert aux opportunités en stage, CDD ou CDI en Data Analyse, Data Management et gouvernance des données. Réponse sous 48 h.",
l_nom:"Nom",l_prenom:"Prénom",l_tel:"Téléphone",l_sujet:"Sujet",rgpd:"J'accepte que les informations saisies dans ce formulaire soient utilisées pour me recontacter, conformément au RGPD. Aucune donnée n'est transmise à un tiers ni conservée au-delà de l'échange.",
send:"Envoyer le message",form_sending:"Envoi en cours…",form_sent:"Merci ! Votre message a bien été envoyé, je vous réponds rapidement.",form_fail:"L’envoi a échoué. Vous pouvez m’écrire directement à moisekhounmenou@gmail.com.",visits_lbl:"visites",views_lbl:"vues",foot_tagline:"Data Analyst · Data × BI × IA",form_err:"Merci de remplir les champs obligatoires et d'accepter la mention RGPD.",form_ok:"Votre messagerie s'ouvre avec le message prérempli.",ph_nom:"Dupont",ph_prenom:"Marie",ph_email:"vous@email.com",ph_tel:"00 00 00 00 00",ph_sujet:"Proposition de stage, CDD ou CDI…",ph_msg:"Votre message…",other_ch:"Autres canaux",
foot_p:"Ingénieur Data Analyst et Data Manager, ouvert aux opportunités en stage, CDD ou CDI.",more:"Plus",elsewhere:"Ailleurs",rights:"© 2026 Moise Hounmenou — Tous droits réservés",lang_btn:"EN",lang_aria:"Switch to English"
},
en:{
loading:"Loading data",nav_profil:"Profile",nav_comp:"Skills",nav_xp:"Experience",nav_certs:"Certs",nav_certs_long:"Certifications",nav_edu:"Education",nav_proj:"Projects",nav_int:"Interests",nav_contact:"Contact",int_h2:"Interests",ai_ph_t:"Your AI photo here",ai_ph:"Image synced from Google Drive.",back_top:"Back to top",
eyebrow:"Collect · Validate · Deliver value",badge:"Data Analyst · Open to new challenges",role:"Data Analyst Engineer &amp; Data Manager",subtitle:"// ETL · SQL · BigQuery · Power BI · Data quality &amp; governance",
pitch:"I turn scattered data into <strong>reliable metrics that drive decisions</strong>. From collection to reporting, I build ETL pipelines, migrate and optimise data warehouses, set up data quality controls and design Power BI dashboards for business teams.",
f1b:"3+ years",f1:"of data experience",f1c:"3 years",f1d:"of Software Engineer",f2:"major clients: retail, insurance, public sector",f3:"Microsoft Power BI certified",f4:"Île-de-France, driving licence",
cta_contact:"Contact me",cta_cv:"Download my CV",cta_view_cv:"View my CV",cv_view_title:"My CV",close_cv:"Close",expand_cv:"Enlarge",reduce_cv:"Restore size",expand_cv_label:"Enlarge document",reduce_cv_label:"Restore document size",zoom_out:"Zoom out",zoom_in:"Zoom in",recenter:"Recenter",cert_zoom_controls:"Certification zoom",cv_view_note:"The browser’s PDF toolbar provides zoom and navigation controls. However, a browser cannot completely prevent a viewed document from being saved.",photo_note:"Replace with your photo",chip1:"SQL execution time",chip2:"Power BI load time",chip3:"data anomalies",
prof_h2:"Focused on results, not just tools",prof_p:"A developer by training turned Data Analyst engineer: I can build data pipelines as well as make the data speak.",illu_note:"Illustration",
pc1_h:"Profile",pc1:"Data Analyst engineer passionate about data analysis, data processing and digital transformation, skilled in Python, R, SQL and Power BI. Specialised in Big Data and AI and in Data, Finance and Trading. This dual background helps me understand both the technical architecture and the business stakes.",
pc2_h:"What I bring",pc2:"I am fully committed to business performance: I roll out data strategies, anticipate client needs and create value through data analysis and dashboards. In practice, I can help you:",
help:["<b>Ensure your data is reliable</b> with quality controls and validation rules","<b>Improve your business processes</b> by automating reports and manual tasks","<b>Manage access to your data</b> with business views, clear documentation and good governance practices","<b>Clean, prepare, model and analyse</b> your data end to end","<b>Deliver analytical and operational reports and dashboards</b> that are fast and useful"],
pc3_h:"Who am I", pc3:"Autonomous, rigorous and proactive, I approach every assignment with a results-driven mindset. I believe reliable, well-presented data changes the quality of decisions.",//pc3:"I am looking for an internship, fixed-term contract or permanent role as a Data Analyst, Data Manager or in data governance, in a dynamic company. I want to use my skills in analysis, complex problem solving and reporting to improve decision-making and business performance.",
term:"SELECT skill FROM profile WHERE level = 'hands-on';",comp_h2:"Technical skills",comp_p:"Highlighted tools are the ones I use every day at work.",
xp_k:"Career",xp_h2:"Professional experience",xp_p:"Hover over an assignment to highlight it. Each one covers the context, what I delivered and the results.",
s_date:"Currently looking",s_title:"Internship · Fixed-term · Permanent",s_meta:"Data Analyst · Data Manager · Data Governance — open to opportunities",
s_text:"Autonomous, rigorous and proactive, I approach every assignment with a results-driven mindset. I believe reliable, well-presented data changes the quality of decisions. I am open to opportunities in a data team where I can fully commit, from data collection to delivering value.",
ctx:"Context.",more_btn:"Show all tasks ↓",less_btn:"Show less ↑",others_h:"Other experience",
obtained:"Earned",see_cert:"View certification",see_proj:"View project",see_school:"School website",see_company:"Company website",
proj_h2:"Projects &amp; case studies",proj_p:"Key achievements from my assignments, followed by data projects from my Master's in Big Data &amp; AI at HETIC.",
ct_h2:"Let's discuss your requirements",ct_p:"Open to internship, fixed-term or permanent opportunities in data analysis, data management and data governance. Reply within 48 hours.",
l_nom:"Last name",l_prenom:"First name",l_tel:"Phone",l_sujet:"Subject",rgpd:"I agree that the information entered in this form may be used to contact me, in accordance with the GDPR. No data is shared with third parties or kept beyond our exchange.",
send:"Send message",form_sending:"Sending…",form_sent:"Thank you! Your message has been sent, I will get back to you soon.",form_fail:"Sending failed. You can email me directly at moisekhounmenou@gmail.com.",visits_lbl:"visits",views_lbl:"views",foot_tagline:"Data Analyst · Data × BI × AI",form_err:"Please fill in the required fields and accept the GDPR notice.",form_ok:"Your email app is opening with the message pre-filled.",ph_nom:"Smith",ph_prenom:"Jane",ph_email:"you@email.com",ph_tel:"+33 0 00 00 00 00",ph_sujet:"Internship or job offer…",ph_msg:"Your message…",other_ch:"Other channels",
foot_p:"Data Analyst engineer and Data Manager, open to internships, fixed-term contracts or permanent roles.",more:"More",elsewhere:"Elsewhere",rights:"© 2026 Moise Hounmenou — All rights reserved",lang_btn:"FR",lang_aria:"Passer en français"
}};

/* ---------- Contenu ---------- */
var SKILLS = PORTFOLIO_SKILLS;

var XP=[
{icon:"cart",date:{fr:"Sept 2025 — Août 2026",en:"Sep 2025 — Aug 2026"},title:{fr:"Data Analyst",en:"Data Analyst"},org:"Carrefour",companyLogo:"https://drive.google.com/thumbnail?id=1OC52A7NgSK1Jq1jYzJoUDUh4KJ94H84j&sz=w2000",companyUrl:"https://www.carrefour.fr/",companyName:"Carrefour",meta:{fr:"Indépendant · Paris · 1 an",en:"Freelance · Paris · 1 year"},
 ctx:{fr:"Analyse approfondie des données CRM pour identifier les leviers d'amélioration de la performance commerciale et orienter les stratégies produits. Les équipes Marketing, Supply Chain et Commerce avaient besoin d'une vision fiable et partagée des ventes, des stocks et des clients, alors que les données provenaient de plusieurs sources et qu'une partie des reportings était produite manuellement.",en:"In-depth analysis of CRM data to identify levers for improving sales performance and guide product strategy. Marketing, Supply Chain and Sales teams needed a reliable, shared view of sales, stock and customers, while data came from several sources and part of the reporting was produced manually."},
 groups:[
  {h:{fr:"Analyse &amp; aide à la décision",en:"Analysis &amp; decision support"},items:[
   {fr:"<b>Analyse des données CRM</b> (achats, fidélité, comportements clients) pour identifier les leviers de performance commerciale et orienter les stratégies produits.",en:"<b>CRM data analysis</b> (purchases, loyalty, customer behaviour) to identify sales performance levers and guide product strategy."},
   {fr:"<b>Suivi des ventes et des stocks</b> par magasin, rayon et période : analyse des écarts, du panier moyen et des ruptures.",en:"<b>Sales and stock monitoring</b> by store, department and period: variance analysis, average basket and stock-outs."},
   {fr:"<b>Analyse des performances des campagnes</b> et développement d'un <b>modèle de recommandation</b> en Python pour cibler les clients les plus réceptifs.",en:"<b>Campaign performance analysis</b> and development of a <b>recommendation model</b> in Python to target the most receptive customers."}]},
  {h:{fr:"Data engineering &amp; automatisation",en:"Data engineering &amp; automation"},items:[
   {fr:"<b>Pipelines ETL multi-sources</b> sur Google Cloud : ingestion dans Cloud Storage, chargement dans BigQuery et transformations SQL modulaires dans Dataform.",en:"<b>Multi-source ETL pipelines</b> on Google Cloud: ingestion into Cloud Storage, loading into BigQuery and modular SQL transformations in Dataform."},
   {fr:"<b>Versionnement du code</b> de transformation sous GitLab pour tracer et sécuriser chaque évolution.",en:"<b>Version control</b> of transformation code in GitLab to track and secure every change."},
   {fr:"<b>Automatisation des traitements récurrents</b> en Python et SQL pour remplacer les extractions Excel manuelles.",en:"<b>Automation of recurring jobs</b> in Python and SQL to replace manual Excel extracts."},
   {fr:"<b>Optimisation des requêtes SQL</b> et des modèles de données pour réduire les temps de calcul.",en:"<b>SQL query and data model optimisation</b> to cut processing time."}]},
  {h:{fr:"Qualité &amp; gouvernance des données",en:"Data quality &amp; governance"},items:[
   {fr:"<b>Contrôles de qualité</b> automatisés : complétude, doublons, cohérence entre sources.",en:"<b>Automated quality checks</b>: completeness, duplicates, cross-source consistency."},
   {fr:"<b>Règles de validation</b> appliquées en amont des indicateurs pour garantir la fiabilité des KPI métiers.",en:"<b>Validation rules</b> applied upstream to guarantee reliable business KPIs."},
   {fr:"<b>Suivi des anomalies</b> détectées et correction à la source avec les équipes concernées.",en:"<b>Anomaly tracking</b> and correction at the source with the teams involved."}]},
  {h:{fr:"Restitution &amp; collaboration",en:"Reporting &amp; collaboration"},items:[
   {fr:"<b>Tableaux de bord Power BI et Looker Studio</b> pour le suivi des KPI : chiffre d'affaires, marge, panier moyen, ruptures de stock.",en:"<b>Power BI and Looker Studio dashboards</b> tracking KPIs: revenue, margin, average basket, stock-outs."},
   {fr:"<b>Automatisation des reportings</b> pour livrer des indicateurs à jour sans intervention manuelle.",en:"<b>Automated reporting</b> delivering up-to-date metrics with no manual work."},
   {fr:"<b>Méthode Agile Scrum</b> avec les équipes Marketing, Supply Chain et Commerce : recueil des besoins, sprints, démonstrations et itérations.",en:"<b>Agile Scrum</b> with Marketing, Supply Chain and Sales: requirements gathering, sprints, demos and iterations."}]}],
 kpis:[["−40 %",{fr:"temps de production des reportings",en:"reporting production time"}],["+25 %",{fr:"suivi des stocks",en:"stock monitoring"}],["−30 %",{fr:"anomalies de données",en:"data anomalies"}]],
 tags:["Cloud Storage","BigQuery","Dataform","GitLab","SQL","Python","Power BI","Looker Studio","Excel","ETL","Agile Scrum"]},

{icon:"db",date:{fr:"Sept 2022 — Déc 2024",en:"Sep 2022 — Dec 2024"},title:{fr:"Data Analyst",en:"Data Analyst"},org:"BCA Expertise (Assurance)",companyLogo:"https://drive.google.com/thumbnail?id=11gBOkmbT4WW2DDYvFFYio1tO83IZxfDt&sz=w2000",companyUrl:"https://www.bca.fr/",companyName:"BCA Expertise",meta:{fr:"Indépendant · Paris, sur site · 2 ans 4 mois",en:"Freelance · Paris, on-site · 2 yrs 4 mos"},
 ctx:{fr:"Pour mieux répondre aux besoins des clients et des experts, les équipes DDP et DSI mettaient en place un nouvel entrepôt de données. Objectif : résoudre la multiplicité des données, le manque de spécifications fonctionnelles et l'absence de documentation, en migrant un data warehouse legacy SAP Sybase IQ vers Microsoft SQL Server, puis en créant des tableaux de bord propres à chaque thématique.",en:"To better serve clients and experts, the DDP and IT teams were building a new data warehouse. The goal: fix data duplication, missing functional specifications and lack of documentation by migrating a legacy SAP Sybase IQ data warehouse to Microsoft SQL Server, then building dashboards for each business theme."},
 groups:[
  {h:{fr:"Audit &amp; cadrage",en:"Audit &amp; scoping"},items:[
   {fr:"<b>Audit de l'architecture SAP Sybase IQ</b> : cartographie des tables, des flux et des dépendances, identification des redondances.",en:"<b>SAP Sybase IQ architecture audit</b>: mapping tables, flows and dependencies, identifying redundancies."},
   {fr:"<b>Cadrage des besoins</b> en données et en reporting avec les équipes métiers et les experts.",en:"<b>Scoping data and reporting needs</b> with business teams and experts."},
   {fr:"<b>Formalisation des spécifications</b> fonctionnelles qui manquaient sur l'existant.",en:"<b>Writing the functional specifications</b> that were missing."}]},
  {h:{fr:"Migration &amp; modélisation",en:"Migration &amp; modelling"},items:[
   {fr:"<b>Optimisation du modèle relationnel</b> sous SQL Server et modélisation pensée pour l'analyse et le reporting.",en:"<b>Relational model optimisation</b> in SQL Server, designed for analysis and reporting."},
   {fr:"<b>Pipelines ETL</b> depuis plusieurs sources avec Talend et SQL, pour des flux optimisés et fluides.",en:"<b>ETL pipelines</b> from multiple sources with Talend and SQL for smooth, optimised flows."},
   {fr:"<b>Migration fluide sans interruption des services</b> pour les utilisateurs.",en:"<b>Seamless migration with no service interruption</b> for users."}]},
  {h:{fr:"Performance",en:"Performance"},items:[
   {fr:"<b>Enrichissement du data warehouse</b> avec la création de vues métier et d'index.",en:"<b>Data warehouse enrichment</b> with business views and indexes."},
   {fr:"<b>Optimisation SQL post-migration</b> : réécriture des requêtes, indexation avancée et tests de charge.",en:"<b>Post-migration SQL tuning</b>: query rewrites, advanced indexing and load testing."},
   {fr:"<b>Optimisation des modèles Power BI</b> et des mesures DAX pour accélérer le chargement des rapports.",en:"<b>Power BI model and DAX optimisation</b> to speed up report loading."}]},
  {h:{fr:"Qualité &amp; documentation",en:"Quality &amp; documentation"},items:[
   {fr:"<b>Analyse de la qualité des données</b> via des validations d'intégrité et de cohérence entre l'ancien et le nouveau système.",en:"<b>Data quality analysis</b> through integrity and consistency checks between the old and new systems."},
   {fr:"<b>Documentation centralisée sur SharePoint</b> : migration, modèle de données et procédures d'exploitation.",en:"<b>Centralised documentation on SharePoint</b>: migration, data model and operating procedures."}]},
  {h:{fr:"Restitution &amp; outils",en:"Reporting &amp; tools"},items:[
   {fr:"<b>Tableaux de bord Power BI interactifs</b> par thématique métier.",en:"<b>Interactive Power BI dashboards</b> for each business theme."},
   {fr:"<b>Interface Streamlit x Python</b> pour l'analyse et la visualisation des stocks, offrant une meilleure vue aux experts.",en:"<b>Streamlit x Python app</b> for stock analysis and visualisation, giving experts a clearer view."},
   {fr:"<b>Présentation des résultats et recommandations</b> aux équipes et mise en place d'un outil d'aide à la décision.",en:"<b>Presenting results and recommendations</b> to teams and setting up a decision-support tool."}]}],
 kpis:[["−45 %",{fr:"temps d'exécution des requêtes",en:"query execution time"}],["29 s → 2 s",{fr:"chargement des tableaux de bord",en:"dashboard load time"}],["+15 %",{fr:"rapidité de prise de décision",en:"faster decision-making"}],["0",{fr:"interruption de service",en:"service interruptions"}]],
 tags:["SAP Sybase IQ","MS SQL Server","PostgreSQL","Talend","SQL","Power BI","DAX","Streamlit","Python","R","Excel","Jira","Agile Scrum"]},

{icon:"chat",date:{fr:"Juin 2024 — Sept 2024",en:"Jun 2024 — Sep 2024"},title:{fr:"Data Analyst",en:"Data Analyst"},org:"DITP — Direction interministérielle de la transformation publique",companyLogo:"https://drive.google.com/thumbnail?id=1X-x8u-adTgdvj3IVKNWI1-K1ZZjv453l&sz=w2000",companyUrl:"https://www.modernisation.gouv.fr/",companyName:"DITP",meta:{fr:"Indépendant · Montreuil · 4 mois",en:"Freelance · Montreuil · 4 months"},
 ctx:{fr:"Collecte et analyse des retours d'expérience des usagers exprimés sur plusieurs plateformes de services publics, pour identifier les irritants, les points de satisfaction et les tendances qui doivent guider l'amélioration des services.",en:"Collecting and analysing user feedback posted on several public service platforms to identify pain points, satisfaction drivers and trends to guide service improvements."},
 groups:[
  {h:{fr:"Collecte",en:"Collection"},items:[
   {fr:"<b>Web scraping</b> des avis usagers sur plusieurs sites de services publics.",en:"<b>Web scraping</b> of user reviews across several public service websites."},
   {fr:"<b>Analyse exploratoire approfondie</b> : volumes, répartition par plateforme, évolution dans le temps.",en:"<b>In-depth exploratory analysis</b>: volumes, breakdown by platform, trends over time."}]},
  {h:{fr:"Préparation des données",en:"Data preparation"},items:[
   {fr:"<b>Normalisation</b> des textes et harmonisation des formats entre plateformes.",en:"<b>Text normalisation</b> and format harmonisation across platforms."},
   {fr:"<b>Traduction automatique</b> des avis rédigés dans d'autres langues.",en:"<b>Machine translation</b> of reviews written in other languages."},
   {fr:"<b>Gestion des emojis et des valeurs manquantes</b> pour une qualité de données optimale.",en:"<b>Handling emojis and missing values</b> for optimal data quality."}]},
  {h:{fr:"Modélisation NLP",en:"NLP modelling"},items:[
   {fr:"<b>Analyse de sentiment</b> avec un modèle Hugging Face Transformers.",en:"<b>Sentiment analysis</b> with a Hugging Face Transformers model."},
   {fr:"<b>Fine-tuning du modèle</b> sur les avis collectés pour l'adapter au vocabulaire des services publics.",en:"<b>Model fine-tuning</b> on the collected reviews to fit public service vocabulary."}]},
  {h:{fr:"Restitution",en:"Reporting"},items:[
   {fr:"<b>Détection des tendances et des insights clés</b> à l'aide de nuages de mots.",en:"<b>Trend and key insight detection</b> using word clouds."},
   {fr:"<b>Tableaux de bord interactifs</b> pour faciliter la prise de décision.",en:"<b>Interactive dashboards</b> to support decision-making."}]}],
 kpis:[],tags:["Python","Web scraping","NLP","Hugging Face Transformers","Flask","Power BI","ETL"]},

{icon:"health",date:{fr:"Janv 2022 — Juil 2023",en:"Jan 2022 — Jul 2023"},title:{fr:"Développeur d'applications web",en:"Web Application Developer"},org:"Clinique Biasa",companyLogo:"https://drive.google.com/thumbnail?id=1nx-RbYqrw2kbI5MBQfcWygyK5OnSBTmt&sz=w2000",companyUrl:"https://cliniquebiasa.org/",companyName:"Clinique Biasa",meta:{fr:"Lomé, Togo · 1 an 7 mois",en:"Lomé, Togo · 1 yr 7 mos"},
 ctx:{fr:"Conception et développement d'une application de gestion des patients pour la clinique, de l'étude de l'existant jusqu'à la remise du guide d'utilisation aux équipes.",en:"Design and development of a patient management application for the clinic, from analysing the existing setup to handing over the user guide."},
 groups:[
  {h:{fr:"Analyse &amp; conception",en:"Analysis &amp; design"},items:[
   {fr:"<b>Étude de l'existant</b> et recueil des besoins auprès du personnel.",en:"<b>Review of the existing system</b> and gathering staff requirements."},
   {fr:"<b>Élaboration des diagrammes</b> de conception et planification avec un diagramme de Gantt.",en:"<b>Design diagrams</b> and planning with a Gantt chart."},
   {fr:"<b>Création de la base de données</b> sous SQL Server.",en:"<b>Database creation</b> in SQL Server."}]},
  {h:{fr:"Développement",en:"Development"},items:[
   {fr:"<b>Développement</b> de l'application en PHP Laravel et JavaScript.",en:"<b>Application development</b> in PHP Laravel and JavaScript."},
   {fr:"<b>Débogage, corrections et tests unitaires</b>.",en:"<b>Debugging, fixes and unit testing</b>."}]},
  {h:{fr:"Accompagnement",en:"User support"},items:[
   {fr:"<b>Document de présentation</b> du projet.",en:"<b>Project presentation</b> document."},
   {fr:"<b>Guide d'utilisation</b> pour les équipes de la clinique.",en:"<b>User guide</b> for clinic staff."}]}],
 kpis:[],tags:["PHP Laravel","SQL Server","JavaScript","Gantt","PowerPoint"]},

{icon:"box",date:{fr:"Juin 2019 — Août 2021",en:"Jun 2019 — Aug 2021"},title:{fr:"Développeur d'applications web",en:"Web Application Developer"},org:"NIOTO SA",companyLogo:"https://drive.google.com/thumbnail?id=1BjfcNfqhhvnSbQrwd2mMu2yjdI6S67qk&sz=w2000",companyUrl:"https://nioto-togo.vercel.app/",companyName:"NIOTO",meta:{fr:"Lomé, Togo · Sur site · 2 ans 3 mois",en:"Lomé, Togo · On-site · 2 yrs 3 mos"},
 ctx:{fr:"La Nouvelle Industrie des Oléagineux du Togo n'avait pas d'outil centralisé pour gérer ses approvisionnements et ses entrées et sorties de produits. <b>Problème :</b> comment suivre les mouvements de stock en temps réel ? J'ai conçu et développé une application d'approvisionnement et de gestion des stocks.",en:"NIOTO, an oilseed processing company, had no central tool to manage supplies and product movements. <b>Problem:</b> how can stock movements be tracked in real time? I designed and built a procurement and stock management application."},
 groups:[
  {h:{fr:"Analyse &amp; conception",en:"Analysis &amp; design"},items:[
   {fr:"<b>Analyse des besoins</b> des utilisateurs finaux et rédaction des spécifications fonctionnelles et techniques.",en:"<b>End-user needs analysis</b> and functional and technical specifications."},
   {fr:"<b>Modélisation UML complète</b> : cas d'utilisation, classes, séquence.",en:"<b>Full UML modelling</b>: use cases, classes, sequences."},
   {fr:"<b>Conception de l'architecture</b> de l'application.",en:"<b>Application architecture</b> design."}]},
  {h:{fr:"Base de données &amp; développement",en:"Database &amp; development"},items:[
   {fr:"<b>Base relationnelle MySQL</b> avec gestion des contraintes d'intégrité référentielle.",en:"<b>MySQL relational database</b> with referential integrity constraints."},
   {fr:"<b>Backend en PHP Laravel</b> et frontend en HTML, CSS et JavaScript.",en:"<b>PHP Laravel backend</b> and HTML, CSS and JavaScript frontend."},
   {fr:"<b>Intégration des fonctionnalités</b> : approvisionnements, entrées, sorties, état des stocks.",en:"<b>Features</b>: procurement, stock in, stock out, stock status."}]},
  {h:{fr:"Tests &amp; déploiement",en:"Testing &amp; deployment"},items:[
   {fr:"<b>Tests unitaires et fonctionnels</b>, validation avec les utilisateurs.",en:"<b>Unit and functional tests</b>, user acceptance."},
   {fr:"<b>Déploiement</b> en environnement de test puis en production.",en:"<b>Deployment</b> to test then production."}]},
  {h:{fr:"Documentation &amp; maintenance",en:"Documentation &amp; maintenance"},items:[
   {fr:"<b>Documentation technique complète</b>.",en:"<b>Complete technical documentation</b>."},
   {fr:"<b>Maintenance évolutive</b> selon les retours des utilisateurs.",en:"<b>Ongoing improvements</b> based on user feedback."}]}],
 kpis:[],tags:["PHP Laravel","MySQL","HTML / CSS","JavaScript","XAMPP","GitHub","UML"]}
];

var OTHERS=[
 {date:{fr:"Janv — Avr 2022 · Lomé",en:"Jan — Apr 2022 · Lomé"},h:{fr:"Développeur d'applications · CIC-UL",en:"Application Developer · CIC-UL"},p:{fr:"Application d'e-commerce : analyse des données, choix des méthodes et des outils, conception et développement d'une application de bureau.",en:"E-commerce application: data analysis, choice of methods and tools, design and development of a desktop app."},tags:["Python","Qt Designer"]},
 {date:{fr:"Déc 2020 — Févr 2021 · Lomé",en:"Dec 2020 — Feb 2021 · Lomé"},h:{fr:"Développeur web · IAI Togo",en:"Web Developer · IAI Togo"},p:{fr:"Plateforme de recherche de stage et d'archivage de documents : étude de l'existant, cahier des charges, planning, base de données, développement et présentation.",en:"Internship search and document archiving platform: analysis, specifications, planning, database, development and presentation."},tags:["PHP Symfony","SQL Server","jQuery","MERISE"]},
 {date:{fr:"Juin — Sept 2020 · Stage · Lomé",en:"Jun — Sep 2020 · Internship · Lomé"},h:{fr:"Développeur web · IAI Togo",en:"Web Developer · IAI Togo"},p:{fr:"Application d'évaluation des cours permettant aux étudiants de désigner le meilleur professeur de l'année.",en:"Course evaluation app letting students vote for the best teacher of the year."},tags:["PHP Laravel","MySQL","JavaScript","MERISE"]}
];

var CERTS=[
 {id:"pl300",t:"Power BI Data Analyst Associate (PL-300)",by:"Microsoft",seal:"PL-300",c:"linear-gradient(135deg,#F2C811,#C99A06)",date:"",certImg:"https://drive.google.com/thumbnail?id=1codJrFZmGawVfw86aDQQthREBUe9R0-_&sz=w2000"},
 {id:"datacoach",t:"Power BI",by:"DataCoach",seal:"PBI",c:"linear-gradient(135deg,#E8A33D,#B5651D)",date:"",certImg:"https://drive.google.com/thumbnail?id=1STfqnlhGb_Qs6NTknsOxmldDNi0wnF2x&sz=w2000"},
 {id:"google",t:"Google Data Analytics",by:"Google · Coursera",seal:"GDA",c:"linear-gradient(135deg,#4285F4,#34A853)",date:"",certImg:"https://drive.google.com/thumbnail?id=10iYWjqa5w9gKM1sIGPPsLv27kkyYi8cf&sz=w2000"},
 {id:"ibm",t:"Python for Data Science",by:"IBM",seal:"IBM",c:"linear-gradient(135deg,#1F70C1,#0B3D91)",date:"",certImg:"https://drive.google.com/thumbnail?id=1bbwLSFNS6KBvsoDwHp9DK3X1JQEbu2rA&sz=w2000"}
];

var EDU=[
 {date:"2025 — 2026",t:{fr:"MBA Data, Finance &amp; Trading",en:"MBA in Data, Finance &amp; Trading"},sch:"ESLSCA Business School · Paris",logo:"ESLSCA",c:"#0B2A5B",url:"https://www.eslsca.fr",p:{fr:"Double compétence data et finance : analyse financière, marchés, pilotage de la performance et exploitation des données pour la décision.",en:"Combined data and finance expertise: financial analysis, markets, performance management and data-driven decisions."}},
 {date:"2022 — 2024",t:{fr:"Master Big Data Engineer &amp; Intelligence Artificielle",en:"Master's in Big Data Engineering &amp; Artificial Intelligence"},sch:"HETIC · Montreuil",logo:"HETIC",c:"#0F3B2E",url:"https://www.hetic.net",p:{fr:"Data engineering, machine learning, NLP et cloud, avec de nombreux projets appliqués : pipelines, prévision, analyse de sentiment.",en:"Data engineering, machine learning, NLP and cloud, with many hands-on projects: pipelines, forecasting, sentiment analysis."}},
 {date:"2021 — 2022",t:{fr:"Master Génie Logiciel",en:"Master's in Software Engineering"},sch:"Centre Informatique et de Calcul (CIC-UL) · Lomé",logo:"CIC",c:"#7A1F2B",url:"https://www.utbm.fr/a-lome-9-etudiants-recoivent-leur-diplome-de-master-en-informatique-cic-ul-utbm/",p:{fr:"Conception et architecture logicielle, bases de données et gestion de projet.",en:"Software design and architecture, databases and project management."}},
 {date:"2018 — 2021",t:{fr:"Licence Génie Logiciel &amp; Systèmes d'information",en:"Bachelor's in Software Engineering &amp; Information Systems"},sch:"Institut Africain d'Informatique (IAI) · Lomé",logo:"IAI",c:"#1C5FA8",url:"https://new.iai-togo.tg/officiel",p:{fr:"Fondamentaux du développement, des systèmes d'information et de la modélisation (MERISE, UML).",en:"Foundations of software development, information systems and modelling (MERISE, UML)."}}
];

var TH={
 dwh:'<rect width="320" height="180" style="fill:var(--bg2)"/><rect x="25" y="65" width="90" height="50" rx="10" fill="none" style="stroke:var(--muted)"/><text x="38" y="95" font-family="JetBrains Mono" font-size="12" style="fill:var(--muted)">Sybase IQ</text><path d="M120 90 H195" stroke-width="3" stroke-dasharray="6 6" style="stroke:var(--accent)"/><polygon points="195,84 207,90 195,96" style="fill:var(--accent)"/><rect x="210" y="65" width="95" height="50" rx="10" fill="none" stroke-width="2" style="stroke:var(--accent)"/><text x="220" y="95" font-family="JetBrains Mono" font-size="12" style="fill:var(--accent)">SQL Server</text><text x="128" y="78" font-family="JetBrains Mono" font-size="10" style="fill:var(--amber)">Talend</text>',
 ditp:'<rect width="320" height="180" style="fill:var(--bg2)"/><g font-size="34"><text x="40" y="100">😀</text><text x="140" y="100">😐</text><text x="240" y="100">😠</text></g><rect x="40" y="125" width="80" height="8" rx="4" style="fill:var(--accent)"/><rect x="140" y="125" width="50" height="8" rx="4" style="fill:var(--muted)"/><rect x="240" y="125" width="35" height="8" rx="4" style="fill:var(--amber)"/>',
 carrefour:'<rect width="320" height="180" style="fill:var(--bg2)"/><g style="fill:var(--accent)"><rect x="40" y="110" width="26" height="40" rx="4"/><rect x="76" y="90" width="26" height="60" rx="4"/><rect x="112" y="70" width="26" height="80" rx="4"/><rect x="148" y="50" width="26" height="100" rx="4"/></g><circle cx="240" cy="95" r="45" fill="none" stroke-width="14" stroke-dasharray="190 300" style="stroke:var(--amber)"/>',
 vente:'<rect width="320" height="180" style="fill:var(--bg2)"/><polyline points="30,140 80,120 130,128 180,90 230,70 290,45" fill="none" stroke-width="4" style="stroke:var(--accent)"/><text x="30" y="40" font-family="JetBrains Mono" font-size="13" style="fill:var(--muted)">CRM → KPI</text>',
 pipeline:'<rect width="320" height="180" style="fill:var(--bg2)"/><g font-family="JetBrains Mono" font-size="12"><rect x="25" y="70" width="70" height="40" rx="8" fill="none" style="stroke:var(--muted)"/><text x="34" y="94" style="fill:var(--muted)">Fichiers</text><rect x="125" y="70" width="70" height="40" rx="8" fill="none" style="stroke:var(--accent)"/><text x="141" y="94" style="fill:var(--accent)">Flask</text><rect x="225" y="70" width="70" height="40" rx="8" fill="none" style="stroke:var(--amber)"/><text x="239" y="94" style="fill:var(--amber)">AWS S3</text></g><path d="M95 90 H125 M195 90 H225" stroke-width="2" style="stroke:var(--muted)"/>',
 covid:'<rect width="320" height="180" style="fill:var(--bg2)"/><path d="M20 140 C70 140 80 50 120 60 S170 140 200 120" fill="none" stroke-width="4" style="stroke:var(--accent)"/><path d="M200 120 S250 60 300 70" fill="none" stroke-width="4" stroke-dasharray="6 6" style="stroke:var(--amber)"/><text x="210" y="40" font-family="JetBrains Mono" font-size="12" style="fill:var(--amber)">LSTM forecast</text>',
 supermarche:'<rect width="320" height="180" style="fill:var(--bg2)"/><circle cx="80" cy="80" r="10" style="fill:var(--accent)"/><circle cx="170" cy="110" r="16" style="fill:var(--accent)"/><circle cx="250" cy="70" r="24" style="fill:var(--amber)"/><g font-family="JetBrains Mono" font-size="11" style="fill:var(--muted)"><text x="60" y="110">A</text><text x="166" y="148">B</text><text x="246" y="115">C</text></g>',
 pret:'<rect width="320" height="180" style="fill:var(--bg2)"/><rect x="60" y="45" width="200" height="90" rx="12" fill="none" style="stroke:var(--muted)"/><text x="80" y="85" font-family="JetBrains Mono" font-size="14" style="fill:var(--muted)">Profil X</text><text x="80" y="112" font-family="Sora" font-size="18" font-weight="700" style="fill:var(--accent)">✓ OK</text>',
 jo:'<rect width="320" height="180" style="fill:var(--bg2)"/><g fill="none" stroke-width="5"><circle cx="100" cy="80" r="26" stroke="#3B82F6"/><circle cx="160" cy="80" r="26" style="stroke:var(--ink)"/><circle cx="220" cy="80" r="26" stroke="#EF4444"/><circle cx="130" cy="108" r="26" style="stroke:var(--amber)"/><circle cx="190" cy="108" r="26" stroke="#22C55E"/></g>'
};

var PROJECTS=[
 //{id:"dwh",tag:{fr:"PROJET PHARE · BCA EXPERTISE",en:"FLAGSHIP · BCA EXPERTISE"},t:{fr:"Migration d'un data warehouse legacy vers SQL Server",en:"Migrating a legacy data warehouse to SQL Server"},p:{fr:"Passage d'un entrepôt SAP Sybase IQ à un DWH SQL Server modélisé par thématique : audit, pipelines Talend et SQL, contrôles d'intégrité, vues et index, tableaux de bord Power BI et outil d'aide à la décision. Requêtes 45 % plus rapides et rapports chargés en 2 s au lieu de 29.",en:"Moving from SAP Sybase IQ to a theme-based SQL Server warehouse: audit, Talend and SQL pipelines, integrity checks, views and indexes, Power BI dashboards and a decision-support tool. Queries 45% faster and reports loading in 2 s instead of 29."},tags:["SQL Server","Talend","Power BI","DAX"]},
 //{id:"ditp",tag:{fr:"DITP · NLP",en:"DITP · NLP"},t:{fr:"Analyse de sentiment des avis sur les services publics",en:"Sentiment analysis of public service reviews"},p:{fr:"Web scraping des avis usagers, prétraitement multilingue et fine-tuning d'un modèle Transformers pour mesurer la satisfaction et faire ressortir les tendances.",en:"Web scraping of user reviews, multilingual preprocessing and fine-tuning of a Transformers model to measure satisfaction and surface trends."},tags:["Python","Hugging Face","Power BI"]},
 //{id:"carrefour",tag:{fr:"CARREFOUR · RETAIL",en:"CARREFOUR · RETAIL"},t:{fr:"Pipeline BigQuery &amp; tableaux de bord commerciaux",en:"BigQuery pipeline &amp; sales dashboards"},p:{fr:"Chaîne de données de bout en bout sur Google Cloud, contrôles qualité, tableaux de bord KPI et modèle de recommandation pour cibler les campagnes marketing.",en:"End-to-end data pipeline on Google Cloud, quality controls, KPI dashboards and a recommendation model for marketing targeting."},tags:["BigQuery","Dataform","Power BI"]},
 //{id:"vente",tag:{fr:"HETIC · MAI – AOÛT 2024",en:"HETIC · MAY – AUG 2024"},t:{fr:"Amélioration du processus de vente",en:"Improving the sales process"},p:{fr:"Analyse de la performance commerciale à partir des données CRM : définition des KPI, collecte, nettoyage, analyse exploratoire, tableaux de bord, stratégies d'amélioration et documentation.",en:"Sales performance analysis from CRM data: KPI definition, collection, cleaning, exploratory analysis, dashboards, improvement strategies and documentation."},tags:["Excel","SQL","Power BI"]},
 {id:"pipeline",tag:{fr:"HETIC · AVRIL 2024 · DATA ENGINEERING",en:"HETIC · APRIL 2024 · DATA ENGINEERING"},t:{fr:"Pipeline de données automatisé",en:"Automated data pipeline"},p:{fr:"Conception de la base (SQLAlchemy, Alembic, DBeaver), traitement des fichiers en Pandas, API Flask conteneurisée avec Docker et stockage dans des buckets AWS S3 via Boto3.",en:"Database design (SQLAlchemy, Alembic, DBeaver), file processing with Pandas, a Dockerised Flask API and storage in AWS S3 buckets via Boto3."},tags:["Python","Flask","Docker","AWS S3"]},
 //{id:"covid",tag:{fr:"HETIC · MARS 2024",en:"HETIC · MARCH 2024"},t:{fr:"Évolution du Covid en France",en:"Covid trends in France"},p:{fr:"Traitement des données et suppression des valeurs aberrantes, visualisation dans Power BI et modèle LSTM de prévision présenté dans Streamlit.",en:"Data processing and outlier removal, Power BI visualisation and an LSTM forecasting model presented in Streamlit."},tags:["Keras","Power BI","Streamlit"]},
 //{id:"supermarche",tag:{fr:"HETIC · FÉVRIER 2024",en:"HETIC · FEBRUARY 2024"},t:{fr:"Prévision des besoins d'un supermarché",en:"Supermarket demand forecasting"},q:{fr:"Quelle ville cibler pour acheminer les produits ?",en:"Which city should products be shipped to?"},p:{fr:"Mois au plus fort chiffre d'affaires, ville au meilleur taux de vente, puis modèle de machine learning déployé avec Django.",en:"Peak revenue month, best-selling city, then a machine learning model deployed with Django."},tags:["Spark","Scikit-learn","Django"]},
 {id:"pret",tag:{fr:"HETIC · JANVIER 2024",en:"HETIC · JANUARY 2024"},t:{fr:"Éligibilité à un prêt bancaire",en:"Bank loan eligibility"},q:{fr:"Un profil donné est-il éligible à un prêt ?",en:"Is a given profile eligible for a loan?"},p:{fr:"Analyse exploratoire, nettoyage, modèle de classification et déploiement via une API Flask.",en:"Exploratory analysis, cleaning, classification model and deployment through a Flask API."},tags:["Scikit-learn","Tableau","Flask"]},
 {id:"jo",tag:{fr:"HETIC · DÉCEMBRE 2023",en:"HETIC · DECEMBER 2023"},t:{fr:"Jeux Olympiques Paris 2024",en:"Paris 2024 Olympic Games"},q:{fr:"Un pays hôte performe-t-il mieux que d'habitude ?",en:"Does a host country perform better than usual?"},p:{fr:"Croisement de plusieurs jeux de données dans BigQuery, nettoyage, sélection d'un modèle de machine learning et restitution dans Looker Studio.",en:"Joining several datasets in BigQuery, cleaning, model selection and reporting in Looker Studio."},tags:["BigQuery","SQL","Looker Studio"]}
];

var INTERESTS=[
 {icon:"users",t:{fr:"Sport & football",en:"Sports & football"},p:{fr:"J'aime suivre et pratiquer le sport, en particulier le football, pour son esprit d'équipe, son énergie et le goût du challenge.",en:"I enjoy following and playing sports, especially football, for its team spirit, energy and competitive challenge."},tags:["Football",{fr:"Esprit d'équipe",en:"Team spirit"},{fr:"Compétition",en:"Competition"}]},
 {icon:"spark",t:{fr:"Jeux vidéo",en:"Video games"},p:{fr:"J'apprécie les jeux vidéo pour leurs univers, leurs défis et les expériences interactives qu'ils proposent.",en:"I enjoy video games for their worlds, challenges and interactive experiences."},tags:[{fr:"Jeu & stratégie",en:"Gaming & strategy"},{fr:"Expériences interactives",en:"Interactive experiences"}]},
 {icon:"code",t:{fr:"Vibe coding",en:"Vibe coding"},p:{fr:"J'aime créer des tableaux de bord et coder des solutions utiles, en m'appuyant sur l'IA pour transformer rapidement une idée en prototype fonctionnel.",en:"I enjoy creating dashboards and coding useful solutions, using AI to quickly turn an idea into a working prototype."},tags:[{fr:"Création de tableaux de bord",en:"Dashboard creation"},{fr:"Codage",en:"Coding"},{fr:"Prototypage assisté par IA",en:"AI-assisted prototyping"}]},
 {icon:"headphones",t:{fr:"Musique",en:"Music"},p:{fr:"J'écoute de la musique au quotidien, de l'afrobeat au RnB en passant par le rap. C'est ma façon de déconnecter et de garder le bon rythme.",en:"I listen to music every day, from Afrobeat to RnB and rap. It's how I unwind and keep a good rhythm."},tags:["Afrobeat","RnB","Rap",{fr:"Détente",en:"Relaxation"}]}
];

/* ---------- Rendu ---------- */
var lang="fr";
try{var sl=localStorage.getItem('lang');if(sl==='en'||sl==='fr')lang=sl;}catch(e){}
var qs=new URLSearchParams(location.search).get('lang');if(qs==='en'||qs==='fr')lang=qs;
function L(x){return typeof x==='string'?x:x[lang]}
function tags(arr,hot){return '<ul class="tags">'+arr.map(function(x){var k=typeof x==='object'&&x.k?x.k:L(x);return '<li'+(hot&&hot.indexOf(k)>-1?' class="hot"':'')+'>'+L(x)+'</li>'}).join('')+'</ul>'}
function arrow(label,href){return '<a class="link-btn" href="'+href+'" target="_blank" rel="noopener">'+label+' <span>→</span></a>'}
var pageScrollY=0;
function lockPageScroll(){
  if(document.body.classList.contains('modal-open'))return;
  pageScrollY=window.scrollY;
  document.body.style.setProperty('--scrollbar-width',(window.innerWidth-document.documentElement.clientWidth)+'px');
  document.body.style.top='-'+pageScrollY+'px';
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
}
function unlockPageScroll(){
  var dialog=document.getElementById('cvDialog');
  var certDlg=document.getElementById('certDialog');
  if(dialog.open||(certDlg&&certDlg.open))return;
  document.body.classList.remove('modal-open');
  document.body.style.removeProperty('--scrollbar-width');
  document.body.style.removeProperty('top');
  window.scrollTo(0,pageScrollY);
  document.documentElement.classList.remove('modal-open');
}
function updateCvSizeButton(){
  var dialog=document.getElementById('cvDialog');
  var button=document.getElementById('toggleCvSize');
  var expanded=dialog.classList.contains('is-expanded');
  var U=UI[lang];
  button.textContent=U[expanded?'reduce_cv':'expand_cv'];
  button.setAttribute('aria-label',U[expanded?'reduce_cv_label':'expand_cv_label']);
  button.setAttribute('aria-pressed',String(expanded));
}

function render(){
  var U=UI[lang];
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(U[k]!==undefined)el.innerHTML=U[k]});
  document.querySelectorAll('[data-ph]').forEach(function(el){el.placeholder=U[el.getAttribute('data-ph')]||''});
  var lb=document.getElementById('langBtn');lb.textContent=U.lang_btn;lb.setAttribute('aria-label',U.lang_aria);
  updateCvSizeButton();
  document.getElementById('helpList').innerHTML=U.help.map(function(h){return '<li><span>'+h+'</span></li>'}).join('');

  document.getElementById('skills').innerHTML=SKILLS.map(function(s){return '<div class="sk glass card-glow reveal"><span class="ic">'+ICONS[s.icon]+'</span><span class="cat">'+L(s.cat)+'</span><h3>'+L(s.t)+'</h3>'+tags(s.items,s.hot)+'</div>'}).join('');

  document.getElementById('timeline').innerHTML=XP.map(function(x){
    return '<li class="tl-item reveal"><span class="tl-dot" aria-hidden="true"></span><article class="xp glass"'+(x.groups.length>2?'':' data-short')+'>'+
      '<div class="xp-top"><a class="xp-company-logo" href="'+x.companyUrl+'" target="_blank" rel="noopener" aria-label="'+U.see_company+' '+x.companyName+'"><img src="'+x.companyLogo+'" alt="" loading="lazy"></a><span class="pill">'+L(x.date)+'</span></div>'+
      '<h3>'+L(x.title)+'</h3><p class="org">'+x.org+'</p><span class="meta">'+L(x.meta)+'</span>'+
      '<p class="intro"><b>'+U.ctx+'</b> '+L(x.ctx)+'</p>'+
      x.groups.map(function(g,gi){return '<div class="grp'+(gi>1?' extra':'')+'"><h4>'+L(g.h)+'</h4><ul>'+g.items.map(function(i){return '<li>'+L(i)+'</li>'}).join('')+'</ul></div>'}).join('')+
      (x.groups.length>2?'<button class="more-btn" type="button">'+U.more_btn+'</button>':'')+
      (x.kpis.length?'<div class="kpis">'+x.kpis.map(function(k){return '<div class="kpi"><b>'+k[0]+'</b>'+L(k[1])+'</div>'}).join('')+'</div>':'<div style="height:.8rem"></div>')+
      tags(x.tags)+'</article></li>';
  }).join('');

  document.getElementById('others').innerHTML=OTHERS.map(function(o){return '<div class="oth glass card-glow reveal"><span class="pill">'+L(o.date)+'</span><h4>'+L(o.h)+'</h4><p>'+L(o.p)+'</p>'+tags(o.tags)+'</div>'}).join('');

  document.getElementById('certs').innerHTML=CERTS.map(function(c){
    return '<div class="cert glass card-glow reveal"><span class="seal"><img src="'+c.certImg+'" alt="'+c.t+'" loading="lazy" decoding="async"></span><div><h3>'+c.t+'</h3><p class="by">'+c.by+'</p><span class="got">'+U.obtained+(c.date?' — '+c.date:'')+'</span>'+'<button class="link-btn cert-view-btn" type="button" data-cert-img="'+c.certImg+'" data-cert-title="'+c.t+'">'+U.see_cert+' <span>→</span></button>'+'</div></div>';
  }).join('');

  document.getElementById('edu').innerHTML=EDU.map(function(e,i){
    var logo='<span class="logo-s" aria-hidden="true"><span style="background:'+e.c+'">'+e.logo+'</span></span>';
    if(e.url)logo='<a class="logo-s" href="'+e.url+'" target="_blank" rel="noopener" aria-label="'+U.see_school+' '+e.logo+'"><span style="background:'+e.c+'">'+e.logo+'</span></a>';
    return '<li class="edu-item reveal"><span class="edu-num">0'+(i+1)+'</span><div class="ed glass"><div><span class="pill">'+e.date+'</span><h3>'+L(e.t)+'</h3><span class="sch">'+e.sch+'</span><p>'+L(e.p)+'</p></div>'+logo+'</div></li>';
  }).join('');

  document.getElementById('projects').innerHTML=PROJECTS.map(function(p){
    return '<article class="pj glass card-glow reveal"><svg class="thumb" viewBox="0 0 320 180" aria-hidden="true" preserveAspectRatio="xMidYMid slice">'+TH[p.id]+'</svg><div class="body"><span class="tag-l">'+L(p.tag)+'</span><h3>'+L(p.t)+'</h3>'+(p.q?'<p class="q">'+L(p.q)+'</p>':'')+'<p>'+L(p.p)+'</p>'+tags(p.tags)+'</div></article>';
  }).join('');

  document.getElementById('ints').innerHTML=INTERESTS.map(function(it){
    return '<div class="int glass card-glow reveal"><span class="ic">'+ICONS[it.icon]+'</span><h3>'+L(it.t)+'</h3><p>'+L(it.p)+'</p><ul class="tags">'+it.tags.map(function(t,i){return '<li'+(i===0?' class="hot"':'')+'>'+L(t)+'</li>'}).join('')+'</ul></div>';
  }).join('');
  document.getElementById('toTop').setAttribute('aria-label',U.back_top);

  bindDynamic();
}

/* ---------- Comportements ---------- */
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var noHover=window.matchMedia('(hover: none)').matches;
var io=null,litIO=null;

function updateTimelineSegment(list,itemSelector,pointSelector){
  var active=list.querySelector(itemSelector+'.lit');
  if(!active){list.classList.remove('has-lit-segment');return}
  var items=Array.prototype.slice.call(list.querySelectorAll(itemSelector));
  var index=items.indexOf(active);
  var listTop=list.getBoundingClientRect().top;
  var activePoint=active.querySelector(pointSelector).getBoundingClientRect();
  var segmentStart=activePoint.top+activePoint.height/2-listTop;
  var segmentEnd=list.getBoundingClientRect().height;
  if(index<items.length-1){
    var nextPoint=items[index+1].querySelector(pointSelector).getBoundingClientRect();
    segmentEnd=nextPoint.top+nextPoint.height/2-listTop;
  }
  list.style.setProperty('--lit-segment-top',Math.max(0,segmentStart)+'px');
  list.style.setProperty('--lit-segment-height',Math.max(0,segmentEnd-segmentStart)+'px');
  list.classList.add('has-lit-segment');
}

function updateLitSegments(){
  updateTimelineSegment(document.getElementById('timeline'),'.tl-item','.tl-dot');
  updateTimelineSegment(document.getElementById('edu'),'.edu-item','.edu-num');
}

window.addEventListener('resize',updateLitSegments);

function bindDynamic(){
  var U=UI[lang];
  // Missions repliables
  document.querySelectorAll('.xp .more-btn').forEach(function(b){
    b.addEventListener('click',function(){var x=b.closest('.xp');var o=x.classList.toggle('open');b.textContent=o?U.less_btn:U.more_btn});
  });
  // Lien CV
  document.querySelectorAll('.cv-download-link').forEach(function(a){
    if(LINKS.cv){a.href=LINKS.cv;a.setAttribute('download','CV_HOUNMENOU_DataManager.pdf')}
    else a.onclick=function(e){e.preventDefault();location.hash='contact'};
  });
  document.querySelectorAll('.cv-view-link').forEach(function(a){
    if(LINKS.cv){a.onclick=function(){openCvViewer()}}
    else a.onclick=function(e){e.preventDefault();location.hash='contact'};
  });
  // Apparition au scroll
  if(io)io.disconnect();
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.06});
    els.forEach(function(e){io.observe(e)});
  }else els.forEach(function(e){e.classList.add('in')});
  // Mise en lumière : survol sur ordinateur, élément au centre de l'écran sur mobile
  var lits=document.querySelectorAll('.tl-item,.edu-item');
  lits.forEach(function(el){
    var list=el.closest('.tl,.edu-tl');
    var itemSelector=el.classList.contains('tl-item')?'.tl-item':'.edu-item';
    var pointSelector=el.classList.contains('tl-item')?'.tl-dot':'.edu-num';
    el.addEventListener('mouseenter',function(){if(!noHover){el.classList.add('lit');updateTimelineSegment(list,itemSelector,pointSelector)}});
    el.addEventListener('mouseleave',function(){if(!noHover){el.classList.remove('lit');updateTimelineSegment(list,itemSelector,pointSelector)}});
    el.addEventListener('focusin',function(){el.classList.add('lit');updateTimelineSegment(list,itemSelector,pointSelector)});
    el.addEventListener('focusout',function(){if(!el.matches(':hover')){el.classList.remove('lit');updateTimelineSegment(list,itemSelector,pointSelector)}});
  });
  if(litIO)litIO.disconnect();
  if(noHover&&'IntersectionObserver' in window){
    litIO=new IntersectionObserver(function(es){
      es.forEach(function(e){e.target.classList.toggle('lit',e.isIntersecting)});
      updateLitSegments();
    },{rootMargin:'-45% 0px -45% 0px'});
    lits.forEach(function(el){litIO.observe(el)});
  }
  updateLitSegments();

  // Certification image modal
  var certDlg=document.getElementById('certDialog');
  var certImg=document.getElementById('certImg');
  var closeCertBtn=document.getElementById('closeCert');
  var certContent=document.querySelector('.cert-dialog-content');
  var certZoom=1;
  var certZoomLevel=document.getElementById('certZoomLevel');
  var zoomOutCertBtn=document.getElementById('zoomOutCert');
  var zoomInCertBtn=document.getElementById('zoomInCert');
  var recenterCertBtn=document.getElementById('recenterCert');
  var toggleCertSizeBtn=document.getElementById('toggleCertSize');
  function updateCertZoom(){
    if(certImg.naturalWidth&&certImg.naturalHeight){
      var fitScale=Math.min(Math.max(1,certContent.clientWidth-32)/certImg.naturalWidth,Math.max(1,certContent.clientHeight-32)/certImg.naturalHeight);
      certImg.style.width=Math.round(certImg.naturalWidth*fitScale*certZoom)+'px';
      certImg.style.height=Math.round(certImg.naturalHeight*fitScale*certZoom)+'px';
    }
    certZoomLevel.textContent=Math.round(certZoom*100)+' %';
    zoomOutCertBtn.disabled=certZoom<=.5;
    zoomInCertBtn.disabled=certZoom>=3;
  }
  function closeCertDialog(){
    certDlg.close();
    certImg.removeAttribute('src');
    certImg.alt='';
    certImg.style.width='';
    certImg.style.height='';
    certZoom=1;
    certContent.scrollTo(0,0);
    certDlg.classList.remove('is-expanded');
    toggleCertSizeBtn.setAttribute('aria-pressed','false');
    toggleCertSizeBtn.textContent=UI[lang].expand_cv;
    toggleCertSizeBtn.setAttribute('aria-label',UI[lang].expand_cv_label);
    unlockPageScroll();
  }
  if(certDlg){
    document.querySelectorAll('.cert-view-btn').forEach(function(btn){
      btn.addEventListener('click',function(){
        var imgSrc=btn.getAttribute('data-cert-img');
        var certTitle=btn.getAttribute('data-cert-title');
        certImg.src=imgSrc;
        certImg.alt=certTitle;
        certImg.style.width='';
        certImg.style.height='';
        certZoom=1;
        certContent.scrollTo(0,0);
        certDlg.classList.remove('is-expanded');
        toggleCertSizeBtn.setAttribute('aria-pressed','false');
        toggleCertSizeBtn.textContent=UI[lang].expand_cv;
        toggleCertSizeBtn.setAttribute('aria-label',UI[lang].expand_cv_label);
        updateCertZoom();
        document.getElementById('certTitle').textContent=certTitle;
        lockPageScroll();
        certDlg.showModal();
        updateCertZoom();
      });
    });
    certImg.addEventListener('load',updateCertZoom);
    closeCertBtn.addEventListener('click',closeCertDialog);
    zoomOutCertBtn.addEventListener('click',function(){
      certZoom=Math.max(.5,Math.round((certZoom-.2)*10)/10);
      updateCertZoom();
    });
    zoomInCertBtn.addEventListener('click',function(){
      certZoom=Math.min(3,Math.round((certZoom+.2)*10)/10);
      updateCertZoom();
    });
    recenterCertBtn.addEventListener('click',function(){
      certZoom=1;
      certContent.scrollTo({top:0,left:0,behavior:'smooth'});
      updateCertZoom();
    });
    toggleCertSizeBtn.addEventListener('click',function(){
      var expanded=certDlg.classList.toggle('is-expanded');
      toggleCertSizeBtn.setAttribute('aria-pressed',String(expanded));
      toggleCertSizeBtn.textContent=UI[lang][expanded?'reduce_cv':'expand_cv'];
      toggleCertSizeBtn.setAttribute('aria-label',UI[lang][expanded?'reduce_cv_label':'expand_cv_label']);
      updateCertZoom();
    });
    certDlg.addEventListener('cancel',function(e){
      e.preventDefault();
      closeCertDialog();
    });
    certDlg.addEventListener('click',function(e){
      if(e.target!==certDlg)return;
      closeCertDialog();
    });
  }

}

if(window.pdfjsLib){
  window.pdfjsLib.GlobalWorkerOptions.workerSrc='js/pdf.worker.min.js';
}

var cvCanvas=document.getElementById('cvCanvas');
var cvDialogContent=document.getElementById('cvDialogContent');
var cvCanvasWrap=document.getElementById('cvCanvasWrap');
var cvLoading=document.getElementById('cvLoading');
var cvZoomLevel=document.getElementById('cvZoomLevel');
var zoomOutCvBtn=document.getElementById('zoomOutCv');
var zoomInCvBtn=document.getElementById('zoomInCv');
var recenterCvBtn=document.getElementById('recenterCv');

var cvZoom=1;
var cvPdfDoc=null;
var cvRenderTask=null;

function applyCvZoom(){
  if(cvZoomLevel)cvZoomLevel.textContent=Math.round(cvZoom*100)+' %';
  var isZoomed=cvZoom>1;
  cvDialogContent.classList.toggle('is-zoomed',isZoomed);
  var panOverlay=document.getElementById('cvPanOverlay');
  if(panOverlay)panOverlay.style.display=isZoomed?'block':'none';

  if(cvPdfDoc){
    renderCvPage();
  }else{
    // Lecteur PDF natif : zoom demandé au lecteur (net) plutôt qu'en CSS (flou)
    var frame=document.getElementById('cvFrame');
    if(panOverlay)panOverlay.style.display='none';
    cvDialogContent.classList.remove('is-zoomed');
    if(frame){
      var hash='#toolbar=0&navpanes=0&'+(cvZoom===1?'view=FitH':'zoom='+Math.round(cvZoom*100));
      frame.src='about:blank';
      setTimeout(function(){frame.src=LINKS.cv+hash},30);
    }
  }
}

function renderCvPage(){
  if(!cvPdfDoc)return;
  if(cvRenderTask){try{cvRenderTask.cancel()}catch(e){}cvRenderTask=null}
  cvLoading.style.display='flex';
  cvPdfDoc.getPage(1).then(function(page){
    var availW=Math.max(100,cvDialogContent.clientWidth-32);
    var availH=Math.max(100,cvDialogContent.clientHeight-32);
    var baseViewport=page.getViewport({scale:1});
    var fitScale=Math.min(availW/baseViewport.width,availH/baseViewport.height);
    if(!fitScale||fitScale<=0)fitScale=1;
    var actualScale=fitScale*cvZoom;
    var viewport=page.getViewport({scale:actualScale});
    var dpr=Math.min(window.devicePixelRatio||1,2.5);
    cvCanvas.width=Math.floor(viewport.width*dpr);
    cvCanvas.height=Math.floor(viewport.height*dpr);
    cvCanvas.style.width=Math.floor(viewport.width)+'px';
    cvCanvas.style.height=Math.floor(viewport.height)+'px';
    var ctx=cvCanvas.getContext('2d',{alpha:false});
    var transform=dpr!==1?[dpr,0,0,dpr,0,0]:null;
    cvRenderTask=page.render({canvasContext:ctx,transform:transform,viewport:viewport});
    cvRenderTask.promise.then(function(){
      cvRenderTask=null;
      cvLoading.style.display='none';
      if(cvZoomLevel)cvZoomLevel.textContent=Math.round(cvZoom*100)+' %';
      cvDialogContent.classList.toggle('is-zoomed',cvZoom>1);
      if(cvZoom===1){
        centerCvScroll();
      }
    }).catch(function(err){
      if(err&&err.name==='RenderingCancelledException')return;
      cvLoading.style.display='none';
    });
  }).catch(function(){cvLoading.style.display='none'});
}

function centerCvScroll(){
  cvDialogContent.scrollLeft=Math.max(0,(cvDialogContent.scrollWidth-cvDialogContent.clientWidth)/2);
  cvDialogContent.scrollTop=0;
}

function recenterCvViewer(){
  cvZoom=1;
  applyCvZoom();
  centerCvScroll();
}

function loadCvDocument(){
  cvZoom=1;
  if(cvZoomLevel)cvZoomLevel.textContent='100 %';
  cvLoading.style.display='flex';
  cvCanvas.style.display='none';
  var frameWrapper=document.getElementById('cvFrameWrapper');
  if(frameWrapper)frameWrapper.style.display='none';

  if(window.pdfjsLib&&location.protocol!=='file:'){
    var loadingTask=window.pdfjsLib.getDocument({
      url:LINKS.cv,
      cMapUrl:'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
      cMapPacked:true
    });
    loadingTask.promise.then(function(pdf){
      cvPdfDoc=pdf;
      cvCanvas.style.display='block';
      if(frameWrapper)frameWrapper.style.display='none';
      applyCvZoom();
    }).catch(function(err){
      console.warn('Fallback lecteur PDF pour le CV',err);
      showCvFallback();
    });
  }else{
    showCvFallback();
  }
}

function showCvFallback(){
  cvLoading.style.display='none';
  cvCanvas.style.display='none';
  cvPdfDoc=null;
  var frameWrapper=document.getElementById('cvFrameWrapper');
  var frame=document.getElementById('cvFrame');
  if(frameWrapper&&frame){
    frameWrapper.style.display='block';
    frameWrapper.style.transform='none';
    frameWrapper.style.width='100%';
    frameWrapper.style.height='100%';
    var wrap=document.getElementById('cvCanvasWrap');
    if(wrap){wrap.style.width='100%';wrap.style.height='100%'}
  }
  applyCvZoom();
}

function makeCvDraggable(){
  var isDown=false,startX,startY,scrollLeftStart,scrollTopStart;
  cvDialogContent.addEventListener('mousedown',function(e){
    if(cvZoom<=1||e.button!==0)return;
    isDown=true;
    cvDialogContent.classList.add('is-grabbing');
    startX=e.pageX-cvDialogContent.offsetLeft;
    startY=e.pageY-cvDialogContent.offsetTop;
    scrollLeftStart=cvDialogContent.scrollLeft;
    scrollTopStart=cvDialogContent.scrollTop;
  });
  window.addEventListener('mouseup',function(){
    if(isDown){isDown=false;cvDialogContent.classList.remove('is-grabbing')}
  });
  cvDialogContent.addEventListener('mousemove',function(e){
    if(!isDown)return;
    e.preventDefault();
    cvDialogContent.scrollLeft=scrollLeftStart-(e.pageX-cvDialogContent.offsetLeft-startX);
    cvDialogContent.scrollTop=scrollTopStart-(e.pageY-cvDialogContent.offsetTop-startY);
  });
  var touchStartX,touchStartY;
  cvDialogContent.addEventListener('touchstart',function(e){
    if(cvZoom<=1||e.touches.length!==1)return;
    touchStartX=e.touches[0].pageX;
    touchStartY=e.touches[0].pageY;
    scrollLeftStart=cvDialogContent.scrollLeft;
    scrollTopStart=cvDialogContent.scrollTop;
  },{passive:true});
  cvDialogContent.addEventListener('touchmove',function(e){
    if(cvZoom<=1||e.touches.length!==1)return;
    cvDialogContent.scrollLeft=scrollLeftStart-(e.touches[0].pageX-touchStartX);
    cvDialogContent.scrollTop=scrollTopStart-(e.touches[0].pageY-touchStartY);
  },{passive:true});
}
makeCvDraggable();

cvDialogContent.addEventListener('contextmenu',function(e){e.preventDefault()});
if(cvCanvas)cvCanvas.addEventListener('dragstart',function(e){e.preventDefault()});

if(zoomOutCvBtn)zoomOutCvBtn.addEventListener('click',function(){
  cvZoom=Math.max(0.5,Math.round((cvZoom-0.25)*100)/100);
  applyCvZoom();
});
if(zoomInCvBtn)zoomInCvBtn.addEventListener('click',function(){
  cvZoom=Math.min(3,Math.round((cvZoom+0.25)*100)/100);
  applyCvZoom();
});
if(recenterCvBtn)recenterCvBtn.addEventListener('click',recenterCvViewer);

function openCvViewer(){
  var dialog=document.getElementById('cvDialog');
  dialog.classList.remove('is-expanded');
  updateCvSizeButton();
  lockPageScroll();
  dialog.showModal();
  loadCvDocument();
}

document.getElementById('toggleCvSize').addEventListener('click',function(){
  var dialog=document.getElementById('cvDialog');
  dialog.classList.toggle('is-expanded');
  updateCvSizeButton();
  setTimeout(function(){applyCvZoom()},100);
});

var resizeCvTimeout=null;
window.addEventListener('resize',function(){
  var dialog=document.getElementById('cvDialog');
  if(dialog&&dialog.open){
    clearTimeout(resizeCvTimeout);
    resizeCvTimeout=setTimeout(function(){applyCvZoom()},150);
  }
});

function finishCvDialog(){
  if(cvRenderTask){try{cvRenderTask.cancel()}catch(e){}cvRenderTask=null}
  if(cvPdfDoc){try{cvPdfDoc.destroy()}catch(e){}cvPdfDoc=null}
  var dialog=document.getElementById('cvDialog');
  dialog.classList.remove('is-expanded');
  updateCvSizeButton();
  if(cvCanvas){
    var ctx=cvCanvas.getContext('2d');
    ctx.clearRect(0,0,cvCanvas.width,cvCanvas.height);
    cvCanvas.width=0;cvCanvas.height=0;
    cvCanvas.style.display='none';
  }
  var frame=document.getElementById('cvFrame');
  if(frame)frame.src='about:blank';
  var frameWrapper=document.getElementById('cvFrameWrapper');
  if(frameWrapper){
    frameWrapper.style.transform='none';
    frameWrapper.style.width='100%';
    frameWrapper.style.height='100%';
    frameWrapper.style.display='none';
  }
  var wrap=document.getElementById('cvCanvasWrap');
  if(wrap){wrap.style.width='100%';wrap.style.height='100%'}
  var panOverlay=document.getElementById('cvPanOverlay');
  if(panOverlay)panOverlay.style.display='none';
  cvDialogContent.classList.remove('is-zoomed','is-grabbing');
  cvZoom=1;
  if(cvZoomLevel)cvZoomLevel.textContent='100 %';
  unlockPageScroll();
}

document.getElementById('closeCv').addEventListener('click',function(){
  document.getElementById('cvDialog').close();
  finishCvDialog();
});
document.getElementById('cvDialog').addEventListener('cancel',function(event){
  event.preventDefault();
  document.getElementById('cvDialog').classList.remove('is-expanded');
  document.getElementById('cvDialog').close();
  finishCvDialog();
});
document.getElementById('cvDialog').addEventListener('click',function(event){
  var dialog=document.getElementById('cvDialog');
  if(event.target!==dialog)return;
  dialog.close();
  finishCvDialog();
});

render();

(function(){
  var root=document.documentElement;
  /* Langue */
  document.getElementById('langBtn').addEventListener('click',function(){
    lang=lang==='fr'?'en':'fr';try{localStorage.setItem('lang',lang)}catch(e){}
    render();document.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')});
  });

  /* Loader */
  var loader=document.getElementById('loader'),pct=document.getElementById('pct'),bar=document.getElementById('pbar'),v=0;
  function finish(){pct.textContent='100%';bar.style.width='100%';setTimeout(function(){loader.classList.add('done')},200)}
  if(reduce)finish();else{var iv=setInterval(function(){v=Math.min(v+Math.ceil(Math.random()*12),100);pct.textContent=v+'%';bar.style.width=v+'%';if(v>=100){clearInterval(iv);finish()}},45)}
  setTimeout(function(){loader.classList.add('done')},2500);

  /* Thème */
  document.getElementById('themeBtn').addEventListener('click',function(){
    var cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
    var next=cur==='dark'?'light':'dark';root.setAttribute('data-theme',next);try{localStorage.setItem('theme',next)}catch(e){}
  });

  /* Nav + onglet actif */
  var nav=document.getElementById('nav');
  var mb=document.getElementById('menuBtn'),mm=document.getElementById('mobileMenu');
  mb.addEventListener('click',function(){var o=mm.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
  mm.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mm.classList.remove('open');mb.setAttribute('aria-expanded','false')})});
  var ids=['a-propos','competences','experiences','certifications','formation','projets','interets','contact'];
  /* Photos */
  function setPhoto(el,src,alt){if(!src)return;var img=new Image();img.alt=alt;img.decoding='async';img.onload=function(){el.innerHTML='';el.appendChild(img);el.classList.add('has-img')};img.src=src}
  setPhoto(document.getElementById('heroPhoto'),PHOTOS.hero,'Moise Hounmenou');
  setPhoto(document.getElementById('aiPhoto'),PHOTOS.ia,'Moise Hounmenou');
  /* Calques de dégradé : un par section */
  var bgfx=document.getElementById('bgfx'),layers={};
  ['hero'].concat(ids).forEach(function(k){var d=document.createElement('div');d.className='bgl';d.setAttribute('data-k',k);bgfx.appendChild(d);layers[k]=d});
  var curBg='';
  function setBg(k){if(k===curBg)return;if(layers[curBg])layers[curBg].classList.remove('on');layers[k].classList.add('on');curBg=k}
  /* Retour en haut */
  var toTop=document.getElementById('toTop');
  toTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:reduce?'auto':'smooth'})});
  var navLinks=document.querySelectorAll('#links a, #mobileMenu a');
  function spy(){
    nav.classList.toggle('scrolled',window.scrollY>20);
    var pos=window.scrollY+window.innerHeight*0.35,current='';
    ids.forEach(function(id){var s=document.getElementById(id);if(s&&s.offsetTop<=pos)current=id});
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)current='contact';
    setBg(current||'hero');toTop.classList.toggle('show',window.scrollY>600);
    navLinks.forEach(function(a){var on=a.getAttribute('href')==='#'+current;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
  }
  window.addEventListener('scroll',spy,{passive:true});window.addEventListener('resize',spy);spy();

  /* Formulaire : ouvre la messagerie avec le message prérempli */
  var form=document.getElementById('contactForm'),note=document.getElementById('formNote');
  form.addEventListener('submit',function(e){
    e.preventDefault();var U=UI[lang];
    if(!form.checkValidity()){note.textContent=U.form_err;return}
    var d=function(id){return document.getElementById(id).value.trim()};
    var body=U.l_nom+' : '+d('prenom')+' '+d('nom')+'\nEmail : '+d('email')+'\n'+U.l_tel+' : '+d('tel')+'\n\n'+d('message');
    if(document.getElementById('botcheck').checked)return;
    if(window.SITE_EXTRAS&&SITE_EXTRAS.canSend()){
      var btn=form.querySelector('button[type="submit"]');btn.disabled=true;note.textContent=U.form_sending;
      SITE_EXTRAS.send({nom:d('nom'),prenom:d('prenom'),email:d('email'),tel:d('tel'),sujet:d('sujet'),message:d('message')})
        .then(function(){note.textContent=U.form_sent;form.reset()})
        .catch(function(){note.textContent=U.form_fail})
        .then(function(){btn.disabled=false});
      return;
    }
    window.location.href='mailto:moisekhounmenou@gmail.com?subject='+encodeURIComponent(d('sujet'))+'&body='+encodeURIComponent(body);
    note.textContent=U.form_ok;
  });

  /* Fond animé : réseau de points de données (les points ambre sont des anomalies corrigées) */
  function col(n){return getComputedStyle(root).getPropertyValue(n).trim()}
  function initNetwork(c){
    var ctx=c.getContext('2d'),pts=[],W,H,mouse={x:-999,y:-999},dpr=Math.min(window.devicePixelRatio||1,2);
    function size(){var r=c.getBoundingClientRect();W=r.width;H=r.height;c.width=W*dpr;c.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
      var n=Math.round(Math.min(90,W*H/14000));pts=[];
      for(var i=0;i<n;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,bad:0})}
    size();window.addEventListener('resize',size);
    c.parentElement.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();mouse.x=e.clientX-r.left;mouse.y=e.clientY-r.top});
    c.parentElement.addEventListener('mouseleave',function(){mouse.x=-999;mouse.y=-999});
    var colors={},frame=0;
    function draw(){
      if(frame++%30===0)colors={a:col('--accent'),am:col('--amber'),mu:col('--muted')};
      ctx.clearRect(0,0,W,H);
      for(var i=0;i<pts.length;i++){var p=pts[i];
        if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;if(p.bad>0)p.bad--;else if(Math.random()<.0008)p.bad=160}
        for(var j=i+1;j<pts.length;j++){var q=pts[j],dx=p.x-q.x,dy=p.y-q.y,d=dx*dx+dy*dy;
          if(d<14000){ctx.globalAlpha=(1-d/14000)*.35;ctx.strokeStyle=colors.mu;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}
        var mx=p.x-mouse.x,my=p.y-mouse.y,md=mx*mx+my*my;
        if(md<26000){ctx.globalAlpha=(1-md/26000)*.8;ctx.strokeStyle=colors.a;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke()}
        ctx.globalAlpha=.9;ctx.fillStyle=p.bad>0?colors.am:colors.a;ctx.beginPath();ctx.arc(p.x,p.y,p.bad>0?3.2:2,0,Math.PI*2);ctx.fill();
      }
      ctx.globalAlpha=1;
      if(!reduce)requestAnimationFrame(draw);
    }
    draw();
  }
  document.querySelectorAll('.hero, section.block:not([hidden])').forEach(function(section){
    var c=section.querySelector('.network-canvas');
    if(!c){c=document.createElement('canvas');c.className='network-canvas';c.setAttribute('aria-hidden','true');section.insertBefore(c,section.firstChild)}
    initNetwork(c);
  });
})();
