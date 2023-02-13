<a href="./LICENSE">![GitHub](https://img.shields.io/github/license/pedro-afonso/cart?style=plastic)</a>
![GitHub repo size](https://img.shields.io/github/repo-size/pedro-afonso/cart?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/pedro-afonso/cart?color=yellow&style=plastic)

<h1 align="center">Projeto Cart</h1>

<br />

# :pushpin: Índice de conteúdos

- [Screenshots do Projeto](#camera_flash-screenshots-do-projeto)
- [Sobre o Projeto](#monocle_face-sobre-o-projeto)
- [Tecnologias](#globe_with_meridians-tecnologias-usadas)
- [Features](#triangular_flag_on_post-features)
- [Instalação](#question-como-instalar-e-executar-o-projeto)
- [Autor](#closed_book-autor)

</br>

---

# :camera_flash: Screenshots do Projeto


##  <p align="center" >:sparkles: Tela de listagem dos produtos com um design responsivo :sparkles:</p> 

---

 ![cart-desktop](https://user-images.githubusercontent.com/50973575/217561998-ed0740de-ad59-4f0e-b128-ca0ebea3f2d0.png)      

<br/>

---

 ## <p align="center" >:sparkles: Tela de listagem dos produtos com um design responsivo :sparkles:</p> 
 ---


<img src='https://user-images.githubusercontent.com/50973575/217566730-afe7f83f-5ea3-4013-a80c-c8fc0a7ae958.png' height='auto' width='60.2%' /><img src='https://user-images.githubusercontent.com/50973575/217566737-159505bd-0d00-4ba4-bd43-364704a8bfa4.png' height='auto' width='35%' /> 



---

# :monocle_face: Sobre o Projeto

Este projeto tem o objetivo de listar os produtos da API, para que o usuário possa adicionar, incrementar ou retirar os produtos no carrinho.

Motivação: Aplicar testes de integração usando o jest/testing library em uma aplicação que envolva a lógica do redux-toolkit e Nextjs (sem SSR) 

Descrição:  O site lista os produtos da api criada no Nextjs, o usuário pode adicionar os produtos em um carrinho, alterar a quantidade ou remover do carrinho. O RTK (redux toolkit) foi usado para gerenciar o estado do carrinho, e o estado do menu lateral que foi criado com o React.createPortal. O RTK Query foi usado para controlar o cache da requisição. 

Foi realizados testes de integração (sem “mockar” a lógica do redux) usando o jest/testing library e o Mock Server Working (msw) para interceptar as requisições, como recomenda a documentação do redux.

O desing foi retirado do processo de seleção da MKS system

<br />

---

# :globe_with_meridians: Tecnologias Usadas

✅ [Next.js](https://nextjs.org) - Framework JS.

✅ [Typescript](https://www.typescriptlang.org) - Para fazer a tipagem.

✅ [Redux Toolkit](https://redux-toolkit.js.org) - Conjunto de ferramentas para simplificar o desenvolvimento Redux

✅ [Styled Components](https://styled-components.com) - Biblioteca que nos permite escrever códigos CSS dentro do JavaScript

✅ [Jest](https://jestjs.io) - Framework de Testes em JavaScript

✅ [Testing Library](https://testing-library.com) - Família de pacotes que ajudam a testar componentes de UI do ponto de vista do usuário.

<br />

---

# :triangular_flag_on_post: Features

- [x] Listar os produtos
- [x] Adicionar ou remover item do carrinho.
- [x] Incrementar ou reduzir a quantidade itens do carrinho.
- [x] Layout responsivo.

<br />

---

# :question: Como instalar e executar o projeto

<br />

## Acessando direto pelo site:

- Você pode clicar nesse [link](https://cart-murex.vercel.app) e acessar a aplicação que está hospedada na plataforma da Vercel.

## Executar na máquina local:

(certifique-se de ter instalado na sua máquina o [Node](https://nodejs.org/en/).

1. Abra o terminal na pasta desejada para clonar o repositório e execute o comando:

```bash
git clone https://github.com/pedro-afonso/random-user.git
```

2. Depois de concluído, execute os seguintes comandos para iniciar:

```bash
cd cart
```

Para instalar as dependências:

```bash
npm install
```

Com isso já é possível iniciar a aplicação

```bash
npm run dev
```

3. Por fim, abra a pasta clonada em seu editor de códigos favorito e faça as suas alterações! xD

<br />

---

# :closed_book: Autor

Feito por [Pedro Afonso](https://github.com/pedro-afonso).

### :link: Portfólio: https://pedro-afonso-portfolio.netlify.app
### :link: LinkedIn: https://www.linkedin.com/in/pedro-a-fonso/


