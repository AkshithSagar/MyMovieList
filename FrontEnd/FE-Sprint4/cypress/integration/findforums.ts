describe('Testing page to find data',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/findforums');
    });
    it('has the correct title and gives all movies',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('can search using the filter',()=>{
        cy.wait(1000)
        cy.get("#keyword").type("Batman")
    }) 
});