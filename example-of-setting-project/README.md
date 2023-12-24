### Barebone init project

- Setup linter
- Setup prettier
- Setup typescript
- Setup build
- Setup husky

### Setup a Node.js project with TS, eslint, prettier, husky

## Typescript

```bash
pnpm add -D typescript
```

tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es6", // transpiler in target
    "module": "commonjs", // type imports (how to imports files) - common js is import
    "outDir": "dist", // dir for build
    "sourceMap": true // generate source map
  },
  "include": [""], // Files for watch
  "exclude": ["node_modules"]
}
```

Command for run build
package.json

```json
"scripts": {
    ...
    "build": "tsc --build"
  },
```

### Eslint

1. auto setup

```bash
npx eslint --init
```

package.json

```json
{
  "script": {
    ...
    "lint": "eslint src/**/*.ts", // Lint all file path
    "format": "eslint src/**/*.ts --fix" // fix base errors path
  }
}
```

### Prettier

Auto format code

1. Install

```bash
pnpm add -D prettier
```

2. Config
   create .prettierrc

```json
{
  "semi": true,
  "tabWidth": 2
}
```

### Husky

For create auto pre-commit hook

1. lint error before commit
   Install

```bash
pnpm add -D husky
```

package.json

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "pnpm lint"
    }
  }
}
```
