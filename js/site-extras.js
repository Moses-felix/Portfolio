/* Envoi réel du formulaire (Web3Forms) + compteur de visiteurs (GoatCounter) */
(function () {
  var cfg = window.SITE_CONFIG || {};

  window.SITE_EXTRAS = {
    canSend: function () { return !!cfg.web3formsKey; },
    // data : { nom, prenom, email, tel, sujet, message, botcheck }
    send: function (data) {
      var payload = {
        access_key: cfg.web3formsKey,
        subject: 'Portfolio : ' + (data.sujet || 'Nouveau message'),
        from_name: (data.prenom + ' ' + data.nom).trim(),
        name: (data.prenom + ' ' + data.nom).trim(),
        email: data.email,
        telephone: data.tel || '-',
        sujet: data.sujet,
        message: data.message,
        botcheck: data.botcheck || ''
      };
      return fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (r) { return r.json(); }).then(function (j) {
        if (!j || !j.success) throw new Error(j && j.message || 'Erreur');
        return true;
      });
    }
  };

  // Compteur de visiteurs
  var code = cfg.goatcounterCode;
  var box = document.getElementById('visitCounter');
  if (!code || !box || location.protocol === 'file:') return;
  var base = 'https://' + code + '.goatcounter.com';
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', base + '/count');
  document.head.appendChild(s);
  // Petit délai pour que la visite en cours soit comptée avant l'affichage
  setTimeout(function () {
    fetch(base + '/counter/TOTAL.json').then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (j) {
      var n = box.querySelector('[data-count]');
      if (n && j.count) { n.textContent = j.count; box.hidden = false; }
    }).catch(function () { /* compteur indisponible : reste masqué */ });
  }, 1200);
})();
