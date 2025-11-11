# 🚀 Conexão Social (Projeto de Plataforma ONG)

Este é o projeto final desenvolvido para a disciplina de Front-end, focado na criação de uma plataforma web completa, responsiva e acessível para Organizações Não Governamentais (ONGs).

O projeto foi construído como uma **Single Page Application (SPA)**, utilizando HTML semântico, CSS moderno (com Design System, Flexbox, Grid) e JavaScript modular para interatividade, roteamento e validação.

## ✨ Funcionalidades Principais

* **Design System Robusto:** Utilização de variáveis CSS para uma paleta de 8 cores, 5 tamanhos de fonte e espaçamento modular.
* **Layout Responsivo (Mobile-First):** Interface 100% adaptável com 5 breakpoints, usando CSS Grid para o layout principal e Flexbox para componentes.
* **Sistema de Grid de 12 Colunas:** Layout customizado para alinhamento profissional dos componentes.
* **Navegação Sofisticada:** Inclui menu com dropdown e menu hambúrguer interativo para mobile.
* **Componentes de UI:** Cards, botões com estados (`hover`, `focus`), badges e formulários estilizados.
* **SPA (Single Page Application):** Roteamento de cliente feito com JavaScript (sem recarregamento da página) usando a History API (`fetch`, `pushState`).
* **Validação Avançada:** Sistema de verificação de consistência de dados em formulários (em tempo real) com feedback claro para o usuário.
* **Acessibilidade (WCAG 2.1 AA):**
    * Navegação completa por teclado.
    * Estrutura semântica (HTML5) e uso de ARIA.
    * Alto contraste de cores.
    * **Modo Escuro / Alto Contraste** com salvamento da preferência do usuário no `localStorage`.

## 🛠️ Tecnologias Utilizadas

* **HTML5** (Semântico)
* **CSS3** (Variáveis, Grid, Flexbox, Módulos)
* **JavaScript (ES6+)** (Manipulação do DOM, Fetch API, History API, LocalStorage, Roteamento SPA)
* **Git / GitHub** (GitFlow, Commits Semânticos, Issues, PRs)

## 🏃 Como Rodar o Projeto Localmente

Este projeto é um SPA e usa `fetch()` para carregar as páginas. Ele **não funciona** abrindo o `index.html` diretamente (devido à política CORS).

Você **precisa** de um servidor local:

**Método 1: (Recomendado) VS Code + Live Server**
1.  Abra o projeto no VS Code.
2.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
3.  Clique com o botão direito no `index.html` e selecione "Open with Live Server".

**Método 2: Python**
1.  Navegue até a pasta raiz do projeto no seu terminal.
2.  Execute o comando:
    ```bash
    python -m http.server
    ```
3.  Abra seu navegador e acesse `http://localhost:8000`.

## 📈 Processo de Versionamento (GitFlow)

O projeto segue a metodologia GitFlow simplificada:
* `main`: Contém apenas o código de produção (releases estáveis).
* `develop`: Branch de integração para novas funcionalidades.
* `feature/...`: Branches criadas a partir da `develop` para implementar novas `features` (ex: `feature/modo-escuro`).

Todo o trabalho é gerenciado através de **Issues** (para tarefas) e **Pull Requests** (para revisão de código) antes de ser integrado à `develop`.

*(Fim do README)*
