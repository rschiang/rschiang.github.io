'use strict';
document.addEventListener('DOMContentLoaded', function() {
    var replace = (function(attr, f) {
        var l = document.querySelectorAll('['+ attr +']');
        for (var i in l) f(l[i], l[i].getAttribute(attr));
    });

    var languages = navigator.languages || ([ navigator.language || navigator.userLanguage ]);
    for (var i in languages)
        if (/^zh/i.test(languages[i])) return;

    replace('data-l10n', function(e, str) { e.innerText = str; });
    replace('data-l10n-alt', function(e, str) { e.setAttribute('alt', str); });
});