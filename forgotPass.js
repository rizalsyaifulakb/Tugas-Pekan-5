describe('Testing UI Forgor Password', () => {
    it('Visit Parabank Homepage', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > p:nth-child(2) > a').click()
        cy.get('#firstName').type('rizal')
        cy.get('#lastName').type('akbar')
        // cy.get('//*[@id="address.street"]').type('bandung')
        // cy.get('//*[@id="address.city"]').type('bandung')
        // cy.get('//*[@id="address.state"]').type('bandung')
        // cy.get('//*[@id="address.zipCode"]').type(123)
        // cy.get('//*[@id="ssn"]').type(123)
        cy.get('#lookupForm > table > tbody > tr:nth-child(8) > td:nth-child(2) > input').click()


    })
})