# Docusaurus Vanilla Extract Plugin

A simple way to use [vanilla-extract](https://vanilla-extract.style/) with [Docusaurus](https://docusaurus.io/)

### Installation

`npm i docusaurus-plugin-vanilla-extract`

### Usage

Basic Usage:

```js
// docusaurus.config.js
const config = {
  plugins: ["docusaurus-plugin-vanilla-extract"],
};
```

Using Vanilla Extract config (WIP)

```js
// docusaurus.config.js
const config = {
  plugins: [
    [
      "docusaurus-plugin-vanilla-extract",
      {
        /*enter config */
      },
    ],
  ],
};
```

Vanilla Extract Plugin config [Reference](https://vanilla-extract.style/documentation/setup/#configuration)
