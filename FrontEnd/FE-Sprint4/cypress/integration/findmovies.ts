describe('Testing page to find data',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/findmovies');
    });
    it('has the correct title',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('clicks the find AllMovies button',()=>{
        
        cy.get("#allmovieslink").click();
        cy.wait(2000);
    })
    it('go back and clicks the find Action moives button',()=>{
        cy.wait(1000);
        cy.visit('http://localhost:4200/findmovies');
        cy.get("#actionMovies").click();
        cy.wait(2000);
    })
    
});