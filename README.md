# Rick and Morty App

Aplicação web desenvolvida com **Next.js** que consome a API de Rick and Morty para exibir personagens, permitindo busca, visualização em grid/lista e acesso a detalhes individuais.

---

## Funcionalidades

* Busca de personagens pelo nome
* Alternância entre visualização em **grid** e **lista**
* Página de **detalhes do personagem** ao clicar no card
* Interface personalizada com estilo inspirado em *Rick and Morty*
* Layout responsivo e centralizado

---

## Preview

Tela principal com listagem de personagens e busca:

* Cards com imagem, nome, status e espécie
* Botão para mudar visualização
* Interface com tema escuro e cores neon

Tela de detalhes:

* Informações completas do personagem
* Layout centralizado
* Imagem destacada com bordas arredondadas

---

## Tecnologias utilizadas

* **Next.js 16**
* **React**
* **TypeScript**
* **CSS inline (style)**
* API pública:

  * https://rickandmortyapi.com/

---

## Estrutura do projeto

```
src/
 ├── app/
 │   ├── page.tsx
 │   ├── layout.tsx
 │   └── detalhes/
 │       └── [id]/
 │           └── page.tsx
 │
 ├── components/
 │   ├── Header.tsx
 │   ├── Footer.tsx
 │   ├── CharacterCard.tsx
 │   └── SearchBar.tsx
 │
 └── components/API.ts
```

---

## Como rodar o projeto

1. Clone o repositório:

```
git clone https://github.com/SEU-USUARIO/NOME-REPO.git
```

2. Acesse a pasta:

```
cd NOME-REPO
```

3. Instale as dependências:

```
npm install
```

4. Rode o projeto:

```
npm run dev
```

5. Acesse no navegador:

```
http://localhost:3000
```

---

## API utilizada

Este projeto utiliza a API pública de Rick and Morty:

https://rickandmortyapi.com/

---

## Autor

Projeto desenvolvido por **[Marialinda Melo de Lucena]**

---

## Licença

Este projeto é apenas para fins educacionais.
