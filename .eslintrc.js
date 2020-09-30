module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
  },
  "env": {
    "browser": true
  },
};
