module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@liip-lausanne', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};
