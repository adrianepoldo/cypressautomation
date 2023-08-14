class plan
{

    plan7days="a[href='/mobile/cart/7-day-10gb']";


    click7days()
    {
        cy.get(this.plan7days).click()
    }
}

export default plan;