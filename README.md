# Steve's Personal Site 

## Technologies used
* [Next.js](https://nextjs.org/) is an easy-to-use React framework that ships with server-side rendering, hot module reloading, and many other features out-of-the-box. 
* [Chakra UI](https://chakra-ui.com) is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
* [MDX](https://mdxjs.com/) is an authorable format that lets you seamlessly write JSX in your Markdown documents
* [Typescript](https://www.typescriptlang.org/) is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
* [ESLint](https://eslint.org) statically analyzes your code to quickly find problems

## Scripts
All scripts start with `npm run`
* `dev` - Runs the project in development mode on port `3000` by default. Allows fast refresh and other development features to make development quick
* `build` - Compiles the project to run on prod and compresses code
* `start` - Runs the production build of Next.js
* `lint` - Runs eslint and displays any errors
* `fit` - Runs eslint and fixes any auto fixable errors and displays an error for the rest
* `tsc` - Does typescript type checking, this is also done during the `build` step
* `version` - checks the node version used, should be 14.x

## How to create page
Make a file in the pages directory and it will make a new page with the default layout. Can either use `mdx` which allows mix of markdown and jsx, or `tsx` which requires default export and render function

## How to modify layout
Modify `components/DefaultLayout.tsx` and that will reflect the changes across all pages