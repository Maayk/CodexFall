// SPA Redirect Handler for GitHub Pages
// Reads the ?p= parameter set by 404.html and restores the original URL
// before Vue Router initializes.
(function (l) {
    if (l.search[1] === 'p') {
        var parts = l.search.slice(1).split('&');
        var path = parts.find(function (s) { return s.startsWith('p='); });
        var query = parts.find(function (s) { return s.startsWith('q='); });

        if (path) {
            var cleanPath = path.slice(2).replace(/~and~/g, '&');
            var cleanQuery = query ? '?' + query.slice(2).replace(/~and~/g, '&') : '';

            var base = l.pathname.replace(/\/$/, '');
            var segment = cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath;
            var newUrl = base + segment + cleanQuery + l.hash;

            window.history.replaceState(null, null, newUrl);
        }
    }
}(window.location));
