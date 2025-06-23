[Change to english](README.EN.md)

# 🌍 Where in the world?

Uma aplicação web interativa que permite visualizar informações de todos os países do mundo, com suporte a tema escuro, navegação entre países vizinhos e busca com filtro por continente.

![Preview do projeto](./design/desktop-preview.jpg)

## 🔗 Acesse o projeto

👉 [witw-map.vercel.app](https://witw-map.vercel.app/)

## 🧰 Tecnologias utilizadas

- **TypeScript**
- **HTML + CSS**
- **REST Countries API**
- **Webpack** (compilação e minificação)
- **Dark Mode**
- **Responsividade**

## ✨ Funcionalidades

- 🌐 Listagem de países com informações como nome, capital, região, população e bandeira
- 🔍 Filtro por continente e campo de busca
- 🌙 Alternância entre tema claro e escuro
- 📍 Detalhes do país com navegação entre países fronteiriços
- 📱 Design totalmente responsivo

## 📁 Estrutura do projeto

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

## ⚙️ Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/jvssvj/where-in-the-world.git
cd where-in-the-world
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Para gerar os arquivos minificados em `dist/`:

```bash
npm run build
```

🤝 Créditos
- REST Countries API
- Inspiração no [desafio do Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
