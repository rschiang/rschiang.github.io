'use strict';
var localize = (function(languages) {
    var replace = (function(attr, f) {
        var l = document.querySelectorAll('['+ attr +']');
        for (var i = 0; i < l.length; i++) f(l[i], l[i].getAttribute(attr));
    });

    languages = languages || navigator.languages || ([ navigator.language || navigator.userLanguage ]);
    for (var i in languages)
        if (/^zh/i.test(languages[i])) return;

    replace('data-l10n', function(e, str) { e.innerText = str; });
    replace('data-l10n-alt', function(e, str) { e.setAttribute('alt', str); });
    document.documentElement.setAttribute('lang', 'en');
});
document.addEventListener('DOMContentLoaded', localize);
