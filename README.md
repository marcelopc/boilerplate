Boilerplate
===========

Este projeto é um boilerplate que incorpora uma série de tecnologias e práticas comuns para iniciar um projeto TypeScript com Express e seguir a arquitetura hexagonal.

Tecnologias Utilizadas
----------------------

*   **Arquitetura Hexagonal**: Estrutura de código que promove a separação de preocupações e dependências.
*   **Docker**: Utilizado para criar e gerenciar containers.
*   **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
*   **dotenv**: Carrega variáveis de ambiente de um arquivo `.env` para o processo `process.env`.
*   **TSX**: é um comando CLI (alternativa a node) para executar perfeitamente TypeScript e ESM em ambos os tipos de pacote commonjs& module.
*   **tsup**: Ferramenta de empacotamento e compilação TypeScript.
*   **ESLint**: Ferramenta de linting para manter um código consistente.
*   **Express**: Framework web para Node.js utilizado para criar APIs RESTful.
*   **Vitest**: Um test runner para aplicações Vite que suporta testes unitários e end-to-end.

Como Usar
---------

### Pré-requisitos

*   Docker (opcional, para execução usando containers)

### Instalação

1.  Clone o repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2.  Instale docker

### Rodando o Projeto

*   Para iniciar o servidor em modo de desenvolvimento: `make up`
*   Para rodar os testes: `npm test`

### Estrutura do Projeto

*   `src/`: Contém o código-fonte da aplicação.
*   `src/core/`: Camada central da arquitetura hexagonal, contendo entidades e casos de uso.
*   `src/adapters/`: Adaptadores para integrar componentes externos à aplicação.
*   `src/infrastructure/`: Camada de infraestrutura, contendo implementações concretas (repositórios, serviços externos).
*   `src/infrastructure/persistence/`: Implementações concretas dos repositórios.
*   `src/web/`: Configurações do Express, rotas e controladores.

Contribuindo
------------

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Abra uma issue ou submeta um pull request.


* * *