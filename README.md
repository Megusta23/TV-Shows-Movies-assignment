# TOP 10 Movies/Shows

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone "HTTPS"
```

2. Navigate to the project folder:

```bash
cd project-folder
```

3. Install dependencies:

```bash
npm install
```

4. Run the website:

```bash
npm run dev
```

And that's it, you are now running this website on your local machine!

If you have any problems running this page locally, you could always visit it [Here](https://tv-shows-movies-assignment.vercel.app/)

## Technologies that I used

- Axios
- dotenv
- React
- Vite
- React-router-dom
- React-youtube

## Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
