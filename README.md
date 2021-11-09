# Structured TypeScript CRA Template

A TypeScript Create React App template with . The [official template](https://github.com/facebook/create-react-app/tree/main/packages/cra-template-typescript/template) was used for reference.

To use this template, add --template structured-ts when creating a new app.

```
npx create-react-app my-app --template @super-effective/structured-ts

# or

yarn create react-app my-app --template @super-effective/structured-ts
```

## Included In This Template

* Starter app structure and configuration:
  ```
  .scaffs/                # Scaffolding templates
  public/                 # Starter public files (index.html, favicon, etc. - from the official template)
  src/
    apps/                 # For the root application
    components/           # Directory for components (includes example component)
    styles/               # Global / Shared styles
    index.tsx             # The entry point
    .eslintrc.json        # ESLint rules setup for Prettier and TypeScript
    .prettierrc.js        # Prettier config
    tsconfig.eslint.json  # TypeScript config for ESLint
    tsconfig.json         # TypeScript config
  ```
* Prettier and corresponding ESLint configuration
* Scaffolding for TypeScript components (for the [Scaffs](https://marketplace.visualstudio.com/items?itemName=itslennysfault.scaffs-vscode) Visual Studio Code Extension)
