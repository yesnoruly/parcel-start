# Parcel start

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/yesnoruly/parcel-start/blob/master/LICENSE)
[![GitHub deployments](https://img.shields.io/github/deployments/yesnoruly/parcel-start/github-pages?label=Deploy)](https://github.com/yesnoruly/parcel-start/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/yesnoruly/parcel-start/pulls)


A simple parcel starter template for plain websites.

## Features

- 📝 HTML Includer
- 🔢 Autoprefixer
- 🎡 Automatic deploy to gh-pages branch
- 🔄 [Custom](https://www.joshwcomeau.com/css/custom-css-reset/) css reset

## Demo

[Demo](https://yesnoruly.github.io/parcel-start/)

## Quick start

#### `npm install`:

Install the dependencies.

#### `npm run dev`:

Run the app, you can view the app by visiting `http://localhost:1234/`.

---

#### `npm run build`:

Builds the website for production to the dist folder.

## Github Pages Deploy

If you want to deploy your website on gh-pages, you need to:
1. Check the branch name in the [`deploy.yml`](https://github.com/yesnoruly/parcel-start/blob/master/.github/workflows/deploy.yml) file
2. In the `package.json` specify the following fields:
```json
"homepage": "https://%your-name%.github.io/%rep-name%",
"scripts": {
    "build": "parcel build src/*.html --public-url /%rep-name%/"
}
```

## Related

Here are some related projects

[awesome-parcel#examples](https://github.com/parcel-bundler/awesome-parcel#examples)
