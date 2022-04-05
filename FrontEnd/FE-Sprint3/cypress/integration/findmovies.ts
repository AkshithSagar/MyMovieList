describe('Testing page to find data',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/findmovies');
    });
    it('has the correct title',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('clicks the find movies button',()=>{
        
        cy.get("#allmovieslink").click();
    })
});