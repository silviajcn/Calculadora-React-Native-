module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
                'prettier/prettier': ['off', { singleQuote: true }],
                react/function-component-definition': 'off',
'arrow-body-style': 'off',
'linebreak-style': 'off',
'react/jsx-indent': 'off',
'eol-last': 'off',
          'react/jsx-filename-extension': 'off',
'react-native/no-inline-styles': 'off',
'react/jsx-indent-props': 'off',
'react/jsx-closing-tag-location': 'off',
'react/jsx-closing-bracket-location': 'off',
'no-use-before-define': 'off',
'no-trailing-spaces': 'off',
'react/jsx-curly-brace-presence': 'off',
'react/jsx-one-expression-per-line': 'off',
'import/extensions': 'off',
'import/no-unresolved': 'off',
'import/prefer-default-export': 'off',
indent: ['off', { singleQuote: true }],
},
    },
  ],
};
