module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    "indent": [2, 4]
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
