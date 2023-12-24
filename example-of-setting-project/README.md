### Barebone init project

There one or more how to i inti project node js

- Setup linter
- Setup tsconfig
- Setup build

this folder is solution for some lab1 - ()[]

### Setup a Node.js project with TS, eslint, prettier, husky

## Typescript

```
  pnpm add -D typescript
```

tsconfig.json

```json
  "compilerOptions":
  {
    "target": "es6", // transpiler in target
    "module": "commonjs", // type imports (how to imports files) - common js is import
    "outDir": "dist", // dir for build
    "sourceMap": true, // generate source map

  },
  "include": [""], // Files for watch
  "exclude": ["node_modules"]

```

Build ts files
package.json

```json
"scripts": {
    ...,
    "build": "tsc --build"
  },
```

### Eslint

1. auto setup

```bash
npx eslint --init
```

or

2. Install manual

```bash
pnpm add -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

create .eslintrc

```bash

```

base setup

```json
{
  "parser": "@typescript-eslint/parser", //
  "extends": [] // Inherits rules for eslint
}
```

package.json
{
"script": {
...
"lint": "eslint src/**/\*.ts", // Lint all file path
"format": "eslint src/**/\*.ts --fix" // fix base errors path
}
}

### Prettier

Auto format code
Install

```bash
pnpm add -D prettier
```

Config
create .prettierrc
{
"semi": true,
"tabWidth": 2,
}

### Husky

For create auto pre-commit hook

1. lint error before commit
   Install

```bash
pnpm add -D husky
```

package.json
{
"husky": {
"hooks": {
"pre-commit": "pnpm lint"
}
}
}
