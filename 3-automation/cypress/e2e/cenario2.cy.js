describe('Maior e menor valor dos produtos', () => {
    it('Encontrar o maior valor', () => {
        cy.login('standard_user','secret_sauce')
        cy.getHighItem().click()
        cy.get('.inventory_details_name').should('contain','Sauce Labs Fleece Jacket')
    });

    it('Encontrar o menor valor', () => {
        cy.login('standard_user','secret_sauce')
        cy.getLowItem().click()
        cy.get('.inventory_details_name').should('contain','Sauce Labs Onesie')
    });

});