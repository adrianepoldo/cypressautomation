class cart
{

    header="h4#product-header-price-desktop";
    newNumTab="label.css-14b8rqd";
    phySim="span.css-1tisfka";

    verifyHeader()
    {
        cy.get(this.header).contains('$10/7 days');
    }

    clickNewNumTab()
    {
        cy.get(this.newNumTab).click();
    }

    selectPhySim()
    {
        cy.get('span.css-1tisfka').click();
    }
}

export default cart;
