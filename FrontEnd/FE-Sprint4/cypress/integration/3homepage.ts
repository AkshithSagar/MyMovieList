import { curry } from "cypress/types/lodash";

describe('Testing page to find data',()=>{
    before(()=>{
        cy.visit('http://localhost:4200/home');
    });
    it('has the correct title and gives all movies',()=>{
        cy.title().should('equal','My Movie List');
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
    });
    it('change tab to get suggested discussions',()=>{
       
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();

    })
    
});