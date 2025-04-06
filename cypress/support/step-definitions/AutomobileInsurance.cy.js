import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessou o portal Tricentis na categoria Automobile', () => {
    cy.visit('/')
    cy.irAoAutomobile()
})

When('o usuário satisfaz todos os campos obrigatórios', () => {
    cy.PassoEnterVehicleData()
    cy.PassoEnterInsuranceData()
    cy.PassoEnterProductData()
    cy.PassoSelectPriceOption()
    cy.PassoSendQuote()
})

And('o usuário envia a quote', () => {
    cy.enviarQuote()
})

Then('o sistema notificará que o e-mail foi enviado com sucesso', () => {
    cy.validaSucessoEnvioEmail()
})

When('o usuário satisfaz preenche os quatro primeiros passos', () => {
    cy.PassoEnterVehicleData()
    cy.PassoEnterInsuranceData()
    cy.PassoEnterProductData()
    cy.PassoSelectPriceOption()
})

And('não preenche corretamente o último passo', () => {
    cy.PassoSendQuoteMalPreenchido()
})

Then('o sistema acusará a necessidade de {string}', (message) => {
    cy.LoaderMessagem(message)
})

When('o usuário seleciona o {string}', (step) => {
    cy.clicaCategory(step)
})

And('o usuário atualiza a página', () => {
    cy.reload()
})

Then('o sistema mostrará o fórmulário vazio', () => {
    cy.formularioVazio()
})

When('o usuário satisfaz todos os campos obrigatórios com informações já enviadas', () => {
    cy.reenviarFormulario()
})

Then('o sistema notificará que o e-mail foi reenviado com sucesso', () => {
    cy.validaSucessoReenvioEmail()
})