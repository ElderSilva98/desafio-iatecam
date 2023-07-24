describe('Realizar Login na página ', () => {
  it('Realizar o login com standard_user', () => {
    cy.login('standard_user','secret_sauce')
    cy.get('.title').should('contain','Products')
  })

  it('Realizar o login com locked_out_user', () => {
    cy.login('locked_out_user','secret_sauce')
    cy.get('[data-test="error"]').should('contain','Epic sadface: Sorry, this user has been locked out.')
  })

})