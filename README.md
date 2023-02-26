# ✨ IThundxr's website documentation ✨
This repository contains the assets and the source code required to build [IThundxr's personal website](https://ithundxr.dev). I am glad you want to contribute!
- [Contributing to the website](https://github.com/ithundxr/ithundxr.dev/pull)
- Contributing to linked repositories and projects (soon)

## Using this repository
You can run this website locally using [Node.js](https://nodejs.org) and [PNPM](https://pnpm.io/). We strongly reccomend sticking to PNPM and not running it using Yarn/NPM as it's never been tested and some bugs may occur.

## Prerequisites
To use this repository, you will need the following installed locally:
- [Node.js](https://nodejs.org/)
- [PNPM](https://pnpm.io/)

Before you start, make sure to install the dependencies. Clone the repository and navigate to the directory:
```sh
git clone https://github.com/ithundxr/website.git
cd website
```

## Running the website locally using Node and Astro.build
To build and test the website locally, run:
```sh
# Install dependencies
npm install

# Build & run website
npx astro dev
```

## Running the website using Node and Astro.build for prod
To build the website with docker, run:
```sh
# Install dependencies
npm install

# Build & run website
npx astro build
```

This will create static files in the `dist` directory will you can host via any static site host.

## Troubleshooting
*More information will be added as some [issues are reported](https://github.com/ithundxr/website/issues)*

## Thank you
This website wouldn't be what it is right now without all the contributors. I truly appreciate everyone who submit issues, start discussions and open pull requests to contribute! This wouldn't exist without you.