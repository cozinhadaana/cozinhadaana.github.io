
<div align="center">

<img src=".github/cozinhadaanav4.svg">

</div>

## **ℹ️ Sobre**

Este projeto é um teste proposto pela [Menew](https://www.menew.com.br/) para a preenchimento da vaga de Desenvolvedor Frontend Júnior.

A idea do **Cardap.io** consiste em uma plataforma (simples) ao qual o usuário possa visualizar os produtos (lanches e bebidas) dos sopases cadastrados no sistema. As demais features encontram-se na seção abaixo. O layout elaborado por mim, no Figma, pode ser visualizado clicando [aqui](https://www.figma.com/file/RH6zQXx8SROVVbDb4wYNCP/Menew-Test?node-id=0%3A1).


---

## **📑 Features Solicitadas**

**Menu**

- [X] Barra de navegação

**Usuários**

- [X] Cadastro de usuários
- [X] Login de usuários

**Itens**

- [X] Listagem de itens
- [X] Edição de itens

---

## **🚀 Features adicionais**

**Usuários**

- [x] Logout de usuários

**Itens**
- [X] Deletar item

**Filtros _(Itens)_**

- [ ] Filtrar por preço
- [ ] Filtrar por nome
- [ ] Filtrar por sopase

---

## **🛠️ Tecnologias Utilizadas**

- [React](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI .v5](https://mui.com/pt/)
- [Vite](https://vitejs.dev/)

---

## 👨‍💻 Como executar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/HumbertoDiego/cozinhadaana

cd cozinhadaana
npm install -g yarn

# para dev:
yarn
yarn dev --host 0.0.0.0 --port 80

# para produção:
yarn build
yarn preview --host 0.0.0.0 --port 80
```

Por fim, abra seu navegador na URL `http://localhost`

```bash
# Clone este repositório
$ cd dist

git init
git add -A
git commit -m "build"
git checkout -b gh-pages

git remote add origin https://github.com/cozinhadaana/cozinhadaana
git push -u origin gh-pages
```
<br>
