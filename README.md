<h1 align="center">Test E2E Tricents</h1>

<h3 align="center">Projeto desenvolvido em Cypress</h3>

![Aplicação testada](https://github.com/user-attachments/assets/8dcc6e24-9a89-428b-8b29-75542f437249)

<br>

## 💻 Projeto

Este projeto foi criado para aplicar os conhecimentos em testes automatizados utilizando Cypress e Gherkin. Ele cobre cenários da funcionalidade 'tricentis-01 - Automobile Insurance', validando diferentes fluxos e regras de negócio da aplicação.

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en)
- [Cucumber](https://cucumber.io/docs/)
- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)
- [Faker](https://fakerjs.dev/guide/)

## 👨‍🏫 Práticas Adotadas

Esse projeto foi desenvolvido segundo essas práticas:

- Automação no padrão: Page Object
- Features no formato Gherkin
- Segue as validações estabelecidas para os testes
- Os dados sensíveis são armazenados no arquivo `Cypress.env` e os dados utilizados nos testes foram estruturados em fixtures.


## ⚙️ Configuração do Ambiente
Siga os passos abaixo para configurar o ambiente e rodar os testes localmente:

- Instale o NodeJS
- Instale o Visual Studio Code
- Clone o repositório
- Abra o projeto com VSCode
- Abra o terminal no VSCode
- Rode o comando `npm install`, `yarn install` ou `pnpm install` para instalar as dependências de acordo com o gerenciador de pacotes
- Verifique o arquivo de configuração do Cypress, fazendo ajuste caso necessário

## 🚀 Como executar

- Rode o comando `npx cypress open` para abrir a interface gráfica do cypress ou `npx cypress run` para rodar em background.

## 📱 Exemplos de telas
![Envio com sucesso](https://github.com/user-attachments/assets/4b9fcdad-69cc-43c6-831a-60712c0c79d9)

![Último step com informações faltando](https://github.com/user-attachments/assets/4b117993-fc63-4379-b429-dee8d1f5ee4f)

![Regra de negócio no 4° passo: preencher os 3 primeiros passos](https://github.com/user-attachments/assets/f5752fdc-be2d-485c-984c-9de33552f8ae)

![Regra de negócio no 5° passo: escolher uma opção de preço no 4° passo](https://github.com/user-attachments/assets/5971cf37-b208-469f-98ec-f81e1ccfc35a)

## 🔭 OBSERVAÇÕES

- Atualizar a página faz com que os dados sejam perdidos
- É possível reenviar as mesmas informações
- É possível enviar o formulário sem os valores opcionais

## 👷 COLABORADOR

#### Nome: Ronny Lima Ribeiro da Silva
- LinkedIn: [ronnylrsd](https://www.linkedin.com/in/ronnylrsd/)
- GitHub: [ronnylrsd](https://github.com/ronnylrsd)
