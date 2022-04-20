describe('Testing page to add data test',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/add-data');
    });
    it('has the correct title',()=>{
        cy.title().should('equal','My Movie List');
    });
    it('clicks the add movies/discussions tab',()=>{
        cy.get('#nameinput').type("Test Movie Name");
        cy.get("#genre").click().get('mat-option').contains("Action").click();
        cy.get("#description").type("Some description to test the application");
        cy.get("#review").type("Best movie of the decade, could be..");
        cy.get("#rating").click().get('mat-option').contains("1").click();
        //cy.get("#imageurl").type("https://m.media-amazon.com/images/I/91BT--NUiKL._AC_UY436_FMwebp_QL65_.jpg");
        cy.get("#submitbutton").click();
        cy.get('#mat-tab-label-0-1').click();
        cy.get("#forumname").type("Best movie of this month");
        cy.get("#forumdescription").type("In my opinion, Batman will break all the box office records");
        cy.get("#submitbutton").click();
    })
});