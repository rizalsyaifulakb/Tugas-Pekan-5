describe('Testing UI Login', () => {
    it('Visit Parabank Homepage', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > form > div:nth-child(2) > input').type('akuntesting1')
        cy.get('#loginPanel > form > div:nth-child(4) > input').type('akuntesting1')
        cy.get('#loginPanel > form > div:nth-child(5) > input').click()


    })
})