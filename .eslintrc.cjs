module.exports = {
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: __dirname,
    },
  },
  // يمكن إضافة القواعد وغيرها من الإعدادات هنا
};
