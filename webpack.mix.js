let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.js('./resources/js/app.js', 'public/js')
    .postCss('./resources/css/main.css', 'public/css', [
      tailwindcss('./tailwind.js'),
    ]);

// if (mix.inProduction()) {
//     mix.purgeCss({
//         enabled: true,
//         whitelistPatterns: [/v--/]
//     })
// };
