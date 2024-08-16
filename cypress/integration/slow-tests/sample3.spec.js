describe('unnecessary waiting bad pratice', () => {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })

    it('searches for a meal by typeing and click the submit button', () => {
        cy.get('[data-test-id="search-field"]').type('Ramen')
        cy.get('[data-test-id="search-button"]')
        .click()
        .blur()
        //cy.wait(10000)

        cy.contains('h2', 'Ramen (sopa)', {timeout: 10000})
        .should('be.visible')
    })
})