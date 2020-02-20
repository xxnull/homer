module.exports = {
  ignore: [/core-js/, /@babel\b/],
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
        debug: false
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-proposal-object-rest-spread",
      { loose: false, useBuiltIns: false }
    ],
    "@babel/plugin-transform-async-to-generator",
    [
      "@babel/plugin-proposal-decorators",
      { decoratorsBeforeExport: false, legacy: false }
    ],
    ["@babel/plugin-transform-runtime", { regenerator: true }]
  ]
};
