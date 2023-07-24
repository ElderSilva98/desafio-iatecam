describe(' Realizar a compra de dois produtos', () => {
    it('Comprar os itens com maior e menor valor', () => {

        cy.login("standard_user","secret_sauce")
        cy.getHighItem().click()
        cy.get('.inventory_details_desc_container').find('button').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.getLowItem().click()
        cy.get('.inventory_details_desc_container').find('button').click()
        cy.get('[data-test="back-to-products"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type("test")
        cy.get('[data-test="lastName"]').type("test")
        cy.get('[data-test="postalCode"]').type("00000")
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain','Thank you for your order!')
        
    });
});