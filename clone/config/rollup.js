var pkg = require('../package.json');
var babel = require('rollup-plugin-babel');

var version = pkg.version;

var banner = `/*!
    * ${pkg.name} ${version}
    * Licensed under MIT
    */
`;

exports.banner = banner;

function getCompiler(opt) {
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers:
              'last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10',
            node: '0.12',
          },
          modules: false,
          loose: true,
        },
      ],
    ],
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 2,
        },
      ],
    ],
  });
}

exports.getCompiler = getCompiler;
