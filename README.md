# Parcel start

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/yesnoruly/gulp-build/blob/master/LICENSE)
![GitHub deployments](https://img.shields.io/github/deployments/yesnoruly/parcel-start/github-pages?label=Deploy)

A simple parcel starter project for static websites.

## Features

- 🔥 Hot reloading
- 📝 HTML Includer
- 🔢 Autoprefixer
- 🎡 Automatic deploy to gh-pages branch

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

If you want to deploy your website, you need:
1. Check the branch name in the [`deploy.yml`](https://github.com/yesnoruly/parcel-start/blob/master/.github/workflows/deploy.yml) file
2. In the `package.json` specify the following fields:
```json
"homepage": "https://%your-name%.github.io/%your-rep-name%",
"scripts": {
    "build": "parcel build src/*.html --public-url /%your-rep-name%/"
}
```

## Authors

- [@yesnoruly](https://github.com/yesnoruly)

## Related

Here are some related projects

[Awesome Parcel](https://github.com/parcel-bundler/awesome-parcel#examples)