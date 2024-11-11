module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: 'vue-eslint-parser', // Set the parser to vue-eslint-parser
  parserOptions: {
    parser: 'babel-eslint', // Use babel-eslint for JavaScript parsing
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  plugins: ['vue'],
  env: {
    "browser": true,
    "es6": true,
    "node": true // Add this line to recognize Node.js globals
  },
  rules: {
    'vue/no-unused-vars': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/valid-v-model': 'warn',
    'vue/no-unused-components': 'warn',
    "no-undef": "error",
  },
};
