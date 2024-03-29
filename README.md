<div align="center">
<img height="256" src="https://mj-gallery.com/6c010f60-f86b-4a99-84b0-b98177497205/grid_0.png" />


# 🕵️ use-scrollspy

[![npm](https://img.shields.io/npm/v/use-scrollspy)](https://www.npmjs.com/package/use-scrollspy)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/use-scrollspy)](https://www.npmjs.com/package/use-scrollspy)

Configurable scrollspy react hook for pairing anchor links with page sections.
</div>
<br>


## 🤔 What is it?

The idea is to have a simple and easy to use hook that lets you pair page sections with links, to display which section is currently active.

Check out my [personal website](https://olivercederborg.com) to see the hook in action.

## 📦 Installation

```sh
npm i use-scrollspy

# yarn
yarn add use-scrollspy

# pnpm
pnpm add use-scrollspy
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

// returns currently active id, in case you need it
const activeId = useScrollspy({...})
```

## 📝 Example

_More examples will be added in the near future_

Check out my [personal website](https://olivercederborg.com) to see the hook in action.<br>
The code can be found [here](https://github.com/olivercederborg/olivercederborg.com/blob/main/app/components/mobile-navigation.tsx#L59-L64).


## 🛣️ Roadmap

- [ ] Add more examples
- [ ] Add more offset options
- [ ] Add possibility to use refs instead of ids
- [ ] Expand to other frameworks: Solid, Svelte, Vue
