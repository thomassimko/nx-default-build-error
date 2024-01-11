module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks"],
  root: true,
  settings: {
    // https://github.com/jsx-eslint/eslint-plugin-react#configuration
    react: {
      version: "detect",
    },
  },
  rules: {
    "dot-notation": "warn",
    eqeqeq: "error",
    "keyword-spacing": "warn",
    "no-array-constructor": "error",
    "no-console": "error",
    "no-dupe-class-members": "error",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-multi-assign": "warn",
    "no-new-func": "error",
    "no-param-reassign": "warn",
    "no-useless-escape": "warn",
    "no-var": "warn",
    "object-shorthand": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": "warn",
    "react/no-danger": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    semi: "warn",
    "quote-props": ["warn", "as-needed"],
    "prefer-arrow-callback": "off",
    "prefer-template": "warn",
    "space-before-blocks": "off",
    "space-infix-ops": "warn",
    "react/boolean-prop-naming": [
      "warn",
      {
        propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
        rule: "^(is|has|can)[A-Z]([A-Za-z0-9]?)+",
      },
    ],
  },
  overrides: [
    {
      files: ["src/**/*.stories.tsx", "src/**/*.stories.ts"],
      rules: {
        "dot-notation": "off", // New Storybook format uses index signatures for args, can't use dot notation in those cases
      },
    },
  ],
};
