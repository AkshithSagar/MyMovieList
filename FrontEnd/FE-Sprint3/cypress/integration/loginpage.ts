describe('Testing login page',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/login');
    });
    it('has the correct title',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('clicks the login button',()=>{
        cy.get('#login').type("Harry Potter ");
        cy.get('#password').type("Password@123");
        cy.get("#submitbutton").click();
    })
});