[Mudar para português](README.md)

# 🌍 Where in the world?

An interactive web application that allows you to view information about all countries in the world. It supports dark mode, neighboring country navigation, and a search with continent filtering.

![Project preview](./design/desktop-preview.jpg)

## 🔗 Live Demo

👉 [witw-map.vercel.app](https://witw-map.vercel.app/)

## 🧰 Technologies Used

- **TypeScript**
- **HTML + CSS**
- **REST Countries API**
- **Webpack** (for compilation and minification)
- **Dark Mode**
- **Responsive Design**

## ✨ Features

- 🌐 Country listing with information like name, capital, region, population, and flag  
- 🔍 Filter by continent and search field  
- 🌙 Toggle between light and dark themes  
- 📍 Country details with navigation through neighboring countries  
- 📱 Fully responsive layout  

## 📁 Project Structure

```
├── dist/
│   ├── index.html
│   ├── scripts/
│   └── styles/
├── src/
│   ├── scripts/
│   ├── styles/
│   └── assets/
├── design/
│   └── desktop-preview.jpg
├── package.json
├── tsconfig.json
├── webpack.config.js
```

## ⚙️ Running the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/jvssvj/where-in-the-world.git
cd where-in-the-world
```

2. Install the dependencies:

```bash
npm install
```

3. Run the project in development mode:

```bash
npm run dev
```

4. To generate the minified files in dist/:

```bash
npm run build
```

🤝 Credits
- REST Countries API
- Inspired by the [desafio do Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
