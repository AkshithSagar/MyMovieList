describe('Testing page to add discussions - test',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/add-data');
    });
    it('has the correct title',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('clicks the add discussions tab',()=>{
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        cy.get('#forumname').type("Harry Potter 4 ");
        cy.get("#forumdescription").type("testing scroll functionlaity in cypress");
        cy.get("#submitbutton").click();
    })
    it('checking if the discussion is added',()=>{
        cy.visit('http://localhost:4200/findforums');
    })
});