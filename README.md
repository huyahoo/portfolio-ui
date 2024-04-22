# Vue 3 + TypeScript + Vite Portfolio Project

## Recommended Setup
- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Setup Environment
- node ^21.7.3
- npm ^10.2.5
- typescript: ^5.2.2,
- vite: ^5.2.0,

``` bash
npm install
```

## Deployment
``` bash
npm run deploy
```
or 
``` bash
npm run build
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages
```

## Eslint + Prettier
``` bash
npm run prettier
```

## Reference
[Create Resolve Aliases for Imports](https://futurestud.io/tutorials/vite-create-resolve-aliases-for-imports-like-the-symbol)

[Eslint + Prettier](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)

[How to deploy your Vite Vue 3 application in GitHub Pages](https://mkay11.medium.com/how-to-deploy-your-vite-vue-3-application-in-github-pages-2023-2b842f50576a)


## Acknowledgments
I would like to express our deepest appreciation to [Bebimcode](https://github.com/Bebimcode) for their exceptional design contributions to this project. Their expertise and creativity have greatly enhanced the overall user experience.