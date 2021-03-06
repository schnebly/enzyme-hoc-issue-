// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
 presets: [
   [
     '@babel/preset-env',
     {
       targets: {
         node: 'current',
       },
     },
   ],
   // ['@babel/preset-stage-2', { decoratorsLegacy: true }],
   '@babel/preset-flow',
   '@babel/preset-react',
 ],
 ignore: ['node_modules', 'build'],
 plugins: [
   '@babel/plugin-proposal-optional-chaining',
   // Stage 2
   ['@babel/plugin-proposal-decorators', { legacy: true }],
   '@babel/plugin-proposal-function-sent',
   '@babel/plugin-proposal-export-namespace-from',
   '@babel/plugin-proposal-numeric-separator',
   '@babel/plugin-proposal-throw-expressions',

   // Stage 3
   '@babel/plugin-syntax-dynamic-import',
   '@babel/plugin-syntax-import-meta',
   ['@babel/plugin-proposal-class-properties', { loose: false }],
   '@babel/plugin-proposal-json-strings',
 ],
};