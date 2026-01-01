import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "prettier/prettier": [
        "warn",
        {
          trailingComma: "none"
        },
        {
          usePrettierrc: true
        }
      ],
      "react/no-unescaped-entities": "off",
      "react-hooks/incompatible-library": "off", // TanStack Table and React Hook Form are known to be incompatible with React Compiler
      "react-hooks/set-state-in-effect": "warn",
      "@typescript-eslint/no-unused-expressions": "error",
      "import/order": [
        "warn",
        {
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index"
          ],
          pathGroups: [
            {
              pattern: "{react,react-dom}",
              group: "external",
              position: "before"
            }
          ],
          "newlines-between": "always"
        }
      ]
    }
  },
  // Override default ignores of eslint-config-next.
  {
    ignores: [
      // Default ignores of eslint-config-next:
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
      "dist/**",
      "public/**"
    ]
  }
]);

export default eslintConfig;
