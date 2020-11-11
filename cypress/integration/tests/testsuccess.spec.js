
describe('Test environment', () => {
  it('Testing the app success', () => {

    cy.visit('/')

    cy.get("[data-cy=input-test]").type('Belém')

    cy.should('to.have.length', 1)

    cy.should('have.focus')

    cy.get("[data-cy=button-test]").trigger('mouseover').click()

    cy.should('have.focus')

    
    cy.get("[data-cy=find-test]").find('.weather-2b__img')
    
    cy.get("[data-cy=find-test]").find('[data-cy=info-test]')

    cy.get("[data-cy=find-test]").find('.weather-2b__humidity')

    cy.get("[data-cy=find-test]").find('.weather-2b__sunrise')

    cy.get("[data-cy=find-test]").find('.weather-2b__sunset')

    cy.get("[data-cy=click-test]").click()

    
    
    

    
  })
  
})
