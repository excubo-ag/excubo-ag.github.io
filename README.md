<script type="text/javascript">
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
      (function (l) {
          if (l.search) {
              var q = {};
              l.search.slice(1).split('&').forEach(function (v) {
                  var a = v.split('=');
                  q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
              });
              if (q.p !== undefined) {
                  window.history.replaceState(null, null,
                      l.pathname.slice(0, -1) + (q.p || '') +
                      (q.q ? ('?' + q.q) : '') +
                      l.hash
                  );
              }
          }
      }(window.location))
  </script>
    
excubo-ag contributes to the .NET ecosystem with a set of libraries:

## Web Development

- [WebCompiler](https://github.com/excubo-ag/WebCompiler) ![Nuget](https://img.shields.io/nuget/v/Excubo.WebCompiler) is a dotnet global tool that compiles, minifies, and compressed scss/css/js files.

## Blazor utilities

- [Blazor.ScriptInjection](https://github.com/excubo-ag/Blazor.ScriptInjection) ![Nuget](https://img.shields.io/nuget/v/Excubo.Blazor.ScriptInjection) brings the script tag to Blazor in a safe manner.
- [Blazor.LazyStyleSheet](https://github.com/excubo-ag/Blazor.LazyStyleSheet) ![Nuget](https://img.shields.io/nuget/v/Excubo.Blazor.LazyStyleSheet) makes lazy-loading of style sheets the easiest way of styling components.
- [Blazor.Canvas](https://github.com/excubo-ag/Blazor.Canvas) ![Nuget](https://img.shields.io/nuget/v/Excubo.Blazor.Canvas) exposes the HTML Canvas API to C# developers with all the benefits of a C# API. A demo is available [here](https://excubo-ag.github.io/Blazor.Canvas/).

## Blazor components

- [Blazor.Diagrams](https://github.com/excubo-ag/Blazor.Diagrams) ![Nuget](https://img.shields.io/nuget/v/Excubo.Blazor.Diagrams) is a Blazor-native component library for diagrams, such as flowcharts, UML, etc. A demo is available [here](https://excubo-ag.github.io/Blazor.Diagrams/).
- [Blazor.Grids](https://github.com/excubo-ag/Blazor.Grids) ![Nuget](https://img.shields.io/nuget/v/Excubo.Blazor.Grids) is a Blazor-native component library for grids and diagrams. A demo is available [here](https://excubo-ag.github.io/Blazor.Grids/).

## Roslyn

- [Analyzers.DependencyInjectionValidation](https://github.com/excubo-ag/Analyzers.DependencyInjectionValidation) ![Nuget](https://img.shields.io/nuget/v/Excubo.Analyzers.DependencyInjectionValidation) is a roslyn analyzer for validating the use of dependency injection.
- [Analyzers.Annotations](https://github.com/excubo-ag/Analyzers.Annotations) ![Nuget](https://img.shields.io/nuget/v/Excubo.Analyzers.Annotations) is a set of attributes used by [Analyzers.DependencyInjectionValidation](https://github.com/excubo-ag/Analyzers.DependencyInjectionValidation).
