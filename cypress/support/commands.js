/* eslint-disable cypress/unsafe-to-chain-command */
import { login } from '../e2e/elements/login'

Cypress.Commands.add('clicarIconeLogin',  (titulo) => {
  cy.get(login.fields.navbar).should('be.visible')
  cy.get('.icon-user-unfollow').click()
  cy.get(login.fields.titlePage).should('have.text', titulo)
})

Cypress.Commands.add('preencherUsuario',  () => {
  cy.get(login.fields.username)
    .should('be.visible')
    .type('aluno_ebac@teste.com')
    .should('have.value', 'aluno_ebac@teste.com')
})

Cypress.Commands.add('preencherSenha',  () => {
  cy.get(login.fields.password)
    .should('be.visible')
    .type('teste@teste.com')
    .should('have.value', 'teste@teste.com')
})

Cypress.Commands.add('clicarBtnLogin',  () => {
  cy.get(login.fields.btnLogin).should('be.visible').click()
})

Cypress.Commands.add('mensagemBoasVindas',  (mensagem) => {
  // cy.get('span.hidden-xs').should('have.value', mensagem)
  cy.contains('span', mensagem).should('be.visible')
} )