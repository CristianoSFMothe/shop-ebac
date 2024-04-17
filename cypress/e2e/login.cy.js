///<reference types='Cypress' />
import cenario from './gerkin/cenarios'

context('DADO que esteja na tela de login do Shopping EBAC', () => {
  before(() => {
    cy.visit('/minha-conta')
  })
  it('ENTÃO preencher as credenciais validas', () => {
    cy.allure().descriptionHtml(cenario.AcessarTelaLogin)
    cy.preencherUsuario()
    cy.preencherSenha()
  })
  it('E clicar no botão "Login"', () => {
    cy.allure().descriptionHtml(cenario.AcessarTelaLogin)
    cy.clicarBtnLogin()
  })
  it('ENTÃO deverá realizar o login com sucesso', () => {
    cy.allure().descriptionHtml(cenario.AcessarTelaLogin)
    cy.mensagemBoasVindas('Welcome aluno_ebac !')
  })
})
