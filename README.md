# use-scrollspy

![npm](https://img.shields.io/npm/v/use-scrollspy)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/use-scrollspy)

> Configurable scrollspy react hook for pairing anchor links with page sections.

## 🤔 What is it?

The idea is to have a simple and easy to use hook that lets you pair page sections with links, to display which section is currently active.

Check out my [personal website](https://olivercederborg.com) to see the hook in action.

## 📦 Installation

```sh
npm i use-scrollspy

# with yarn
yarn add use-scrollspy
```

## 🚀 Usage

```tsx
import { useScrollspy } from 'use-scrollspy'

useScrollspy({
  ids: ['intro', 'projects', 'about', 'contact'], // ids of the sections to watch
  hrefs: ['/#intro', '/#projects', '/#about', '/#contact'], // hrefs of the links to activate when section is active
  offset: 'topCenter', // offset for when the section should be considered active
  activeClass: 'active-nav-link', // class to apply to links when their section is active
})
```

## 📝 Example

_More examples will be added in the near future_

Check out my [personal website](https://olivercederborg.com) to see the hook in action.<br>
The code can be found [here](https://github.com/olivercederborg/olivercederborg.com/blob/main/app/components/navigation/navigation.tsx#L15-L20).


## 🛣️ Roadmap

- [x] Publish to NPM
- [ ] Add more examples
- [ ] Add more offset options
- [ ] Add possibility to use refs instead of ids
