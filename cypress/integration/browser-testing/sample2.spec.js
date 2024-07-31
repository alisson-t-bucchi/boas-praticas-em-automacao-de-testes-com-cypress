describe('Browser testing bad practice', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html');
  })

  it('tests a browser feature instead of an app feature', () => {
    cy.contains('a', 'Política de Privacidade')
        .should('have.attr', 'href', 'privacy.html')
        .and('have.attr', 'target', '_blank')

    // Assert that a new tab was opened in the correct URL
  })
})
