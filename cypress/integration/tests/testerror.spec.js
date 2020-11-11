describe('Test environment error', () => {
    
  it('Testing the app error', () => {

    cy.visit('/')

    /* Retirando esses três comandos simula a procura vazia */
    cy.get("[data-cy=input-test]").type('Belémmm')

    cy.should('to.have.length', 1)

    cy.should('have.focus')
    /********************************************************/

    cy.get("[data-cy=button-test]").trigger('mouseover').click()

    cy.should('have.focus')

  })
     
})