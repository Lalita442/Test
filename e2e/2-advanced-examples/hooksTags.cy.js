//before
//after
//beforeEach
//afterEach
describe ("Hooks and tags",()=>
{
    before(()=>{
        cy.log("*** launch app ***");
    })
    after(()=>{
        cy.log("*** close app ***");
    })
    beforeEach(()=>{
        cy.log("*** login ***");
    })
    afterEach(()=>{
        cy.log("*** logout ***");
    })

    it('search',()=>{
        cy.log("first it");
    })

    it('adv search',()=>{
        cy.log("second it");
    })
    it('listing products',()=>{
        cy.log("third it");
    })
})