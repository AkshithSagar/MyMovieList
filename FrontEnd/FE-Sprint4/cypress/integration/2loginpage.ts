describe('Testing login page',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/login');
    });
    it('has the correct title',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('clicks the submit button with wrong credentials',()=>{
        cy.get('#login').type("Harry Potter ");
        cy.get('#password').type("Password@123");
        cy.get("#submitbutton").click();
    })
    it('clicks the submit button with right credentials',()=>{
        cy.get('#login').type("dpakanati");
        cy.get('#password').type("password@123");
        cy.get("#submitbutton").click();
    })
});