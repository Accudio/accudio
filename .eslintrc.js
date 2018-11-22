module.exports = {
  parser: "babel-eslint",
  root: true,
  env: {
    browser: true,
    node: true
  },
  // add your custom rules here
  rules: {
    "indent": [2, 2],
    "no-tabs": 2,
    "no-new": 0,
    "space-before-function-paren": [2, "never"]
  }
}
