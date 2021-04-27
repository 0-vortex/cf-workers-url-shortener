module.exports = {
  globals: {
    addEventListener: true,
    Response: true,
    NAME: true,
    GA: true,
    BG: true,
    SIZE: true,
    GAP: true,
    MARGIN: true,
    DURATION: true,
  },
  ignorePatterns: ['dist/*', 'worker/*'],
  extends: [
    'airbnb-base/legacy',
  ],
  env: {
    node: true,
    es2020: true,
    mocha: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
    },
  },
  rules: {
    // airbnb scope overrides
    'class-methods-use-this': 'off',

    // prettier replacement rules
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      comments: 300,
    }],
    indent: [2, 2],
    semi: [2, 'always'],
    quotes: [2, 'single', {allowTemplateLiterals: true}],
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-spacing': [2, 'never'],
    'arrow-parens': [2, 'as-needed'],
    'linebreak-style': 0,
    'array-bracket-spacing': [2, 'never'],
    'function-call-argument-newline': [2, 'consistent'],
    'function-paren-newline': [2, 'consistent'],
    'object-property-newline': 2,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-restricted-globals': 0,
  },
};
