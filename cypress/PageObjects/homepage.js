class homepage
{

    logo='a[aria-label="Amaysim"]';
    showMore='a.plan-table-heading-link';

    verifyLogo()
    {
        cy.get(this.logo).should('be.visible')
    }

    clickShowMore()
    {
        cy.get(this.showMore).click()
    }
    
}

export default homepage;