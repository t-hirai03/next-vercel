module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    'max-line-length': null,
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'scss/at-mixin-pattern': null,
    'no-descending-specificity': null,
    'keyframes-name-pattern': null,
  },
  ignoreFiles: ['**/node_modules/**'],
}
