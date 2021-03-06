# workers-url-shortener

[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
 [![License](https://img.shields.io/github/license/0-vortex/workers-url-shortener)](./LICENSE)
 [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-url-shortener.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-url-shortener?ref=badge_shield)

[![Maintainability](https://api.codeclimate.com/v1/badges/26ea74df7c6fe2f18438/maintainability)](https://codeclimate.com/github/0-vortex/workers-url-shortener/maintainability)
 [![Known Vulnerabilities](https://snyk.io/test/github/0-vortex/workers-url-shortener/badge.svg)](https://snyk.io/test/github/0-vortex/workers-url-shortener)

## Overview

A Cloudflare Workers script to use as a simple redirect system.

The [data.json](./src/data.json) file can be used as dummy input or ``git`` enabled backup for your production environment.

The motivation for doing such a thing is GUI or IAM enabled acces to these variables from other CloudFlare tools, essentially promoting observability.

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

### Configure KV

To successfully run the redirect worker we need to set up some KV namespaces.

Generate new `namespace_id`s for the KV keys it [wrangler.toml](./wrangler.toml) and follow the instructions:

```shell
# dev environment
wrangler kv:namespace create "REDIRECTS"
wrangler kv:namespace create "REDIRECTS" --preview
```

```shell
# production environment
wrangler kv:namespace create "REDIRECTS" --env production
wrangler kv:namespace create "REDIRECTS" --env production --preview
```

After you are done editing check if the changes are correct:

```shell
wrangler kv:namespace list
```

### Test data

Upload some data to the ``REDIRECTS`` namespace:

```shell
# dev environment
wrangler kv:bulk put --binding="REDIRECTS" ./src/data.json
wrangler kv:bulk put --binding="REDIRECTS" ./src/data.json --preview
```

```shell
# production environment
wrangler kv:bulk put --binding="REDIRECTS" ./src/data.json --env production
wrangler kv:bulk put --binding="REDIRECTS" ./src/data.json --env production --preview
```

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

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-url-shortener.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2F0-vortex%2Fworkers-url-shortener?ref=badge_large)
