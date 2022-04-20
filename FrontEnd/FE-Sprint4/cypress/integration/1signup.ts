describe('Testing page for signup',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/signup');
    });
    it('has the correct title',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('clicks the signup button',()=>{
        cy.get('#email').type("dpakanati@ufl.edu ");
        cy.get("#username").type("dpakanati");
        cy.get("#password").type("password@123");
        cy.get("#question").click().get('mat-option').contains("Name of your hometown").click();

        cy.get("#answer").type("Hanmakonda");
        cy.get("#submitbutton").click();
        cy.get('.loginbutton').click();
    })
});