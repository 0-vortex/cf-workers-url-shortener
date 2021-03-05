# workers-url-shortener

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
 [![License](https://img.shields.io/github/license/0-vortex/workers-url-shortener)](./LICENSE)

## Overview

TBD 

## Folder structure

```
├──── workers-url-shortener
│  ├── .github/
│  ├── src/
│  ├── static/
│  ├── .editorconfig
│  ├── .eslintrc.js
│  ├── .gitattributes
│  ├── .gitignore
│  ├── .lintstagedrc.js
│  ├── .npmrc
│  ├── CODE_OF_CONDUCT.md
│  ├── LICENSE
│  ├── npm-shrinkwrap.json
│  ├── package.json
│  ├── README.md
│  └── wrangler.toml
```

##  Deploy as Cloudflare Worker

I use this service for my profile at [github.com](https://github.com/0-vortex). Currently, the service is hosted on a free tier of [Cloudflare Workers](https://workers.cloudflare.com/) and limited at 100K requests per day.
Make sure to make the appropriate changes in [wrangler.toml](./wrangler.toml) first.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/0-vortex/workers-url-shortener)

## Requirements

In order to run the project locally you need ``node>=14`` and ``npm>=6``. 

### Install ``@cloudflare/wrangler``

Make sure you have the latest version of ``wrangler`` as described in [the wrangler docs](https://developers.cloudflare.com/workers/cli-wrangler/install-update).

#### Updating Wrangler with NPM:

```shell
npm uninstall -g @cloudflare/wrangler && 
  npm install -g @cloudflare/wrangler 
```

#### Install with cargo

```shell
cargo install wrangler --force
```

### Get a valid ``CF_API_TOKEN``

Make sure you have a valid deployment token by doing: 

```shell
wrangler login 
```

or:

```shell
wrangler config 
```

### Generate a new repository

Create a new GitHub repository with the green button or clone:

```shell
# with git
git clone https://github.com/0-vortex/workers-url-shortener.git
```

or with [github-cli](https://cli.github.com):

```shell
# with github-cli
gh repo clone  0-vortex/workers-url-shortener
```

## Usage

### Local development

To develop locally just run:

```shell
npm start
```

To deploy to ``dev`` just run:

```shell
npm run deploy
```

### Monitoring

To monitor any of the deployed environments run:

```shell
wrangler tail
```

## License

This library is released under BSD-3 license clause.
