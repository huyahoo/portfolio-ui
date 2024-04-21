# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Environment

- node ^18.17.1
- npm ^10.2.5
- typescript: ^5.2.2,
- vite: ^5.2.0,

## Deployment
```bash
npm run build
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
```

## Credit
`Credit: Many thanks to Bebimcode for this fancy design.`