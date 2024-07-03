// this is based on:
// Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
// ----------------------------------------------------------------------
// This script checks to see if a redirect is present in the query string
// and converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
(function(l) {
if (l.search[1] === '/' ) {
  var decoded = l.search.slice(1).split('&').map(function(s) { 
    return s.replace(/~and~/g, '&')
  }).join('?');
  window.history.replaceState(null, null,
      l.pathname.slice(0, -1) + decoded + l.hash
  );
}
}(window.location))
