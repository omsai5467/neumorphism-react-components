module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['airbnb'],
  plugins: ['react'],
  // Custom rules.
  rules: {
    complexity: ['error', 10],
    'linebreak-style': [2, 'unix'],
    'consistent-return': 'warn',
    semi: [1, 'never'],
    'global-require': 'off',
    'import/export': 'error',
    'import/first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/no-duplicates': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-debugger': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-multi-assign': ['error'],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'no-empty': 'error',
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 1 }],
    'capitalized-comments': ['warn', 'always', { ignoreConsecutiveComments: true }],
    'object-curly-newline': ['warn'],
    'object-curly-spacing': ['warn'],
    'padded-blocks': ['warn'],
    'arrow-body-style': ['warn'],
    curly: ['error'],
    quotes: ['warn'],
    'no-inline-comments': 'warn',
    indent: 'warn',
    'space-before-function-paren': 'warn',
    'eol-last': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'quote-props': ['warn'],
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'arrow-parens': ['warn', 'always'],
    'no-plusplus': ['off'],
    'max-len': ['warn', { code: 300 }],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-empty-pattern': ['error'],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: false }],
    'react/destructuring-assignment': [0, 'never', { ignoreClassFields: true }],
    'react/jsx-one-expression-per-line': [0, { allow: 'single-child' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-indent': 'warn',
    'react/prefer-stateless-function': ['error'],
    'react/self-closing-comp': 'warn',
  },
}
