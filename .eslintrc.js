module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    "indent": [2, 4],
    "key-spacing": [1, {
        "align": {
            "beforeColon": true
        }
    }],
    "no-multi-spaces": [1, { 
        "exceptions": { 
            "VariableDeclarator": true 
        } 
    }]
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ]
}
