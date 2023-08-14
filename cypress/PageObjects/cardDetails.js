class cardDetails
{

    iFramecardNum="iframe[title='Secure card number input frame']";
    inputCardNum="[name='cardnumber']";
    iFrameExpDate="iframe[title='Secure expiration date input frame']";
    inputExpDate="[name='exp-date']";
    iFrameCVC="iframe[title='Secure CVC input frame']";
    inputCVC="[name='cvc']";
    checkbox="input[type='checkbox']";
    btnProceed="a.css-1957xzp";
    errorMessage="div.css-cqbrkr";


    fillStripeCard()
    {
        cy.frameLoaded(this.iFramecardNum);
        cy.iframe(this.iFramecardNum)
        .find(this.inputCardNum).click().type("4242424242424242");
        cy.frameLoaded(this.iFrameExpDate);
        cy.iframe(this.iFrameExpDate)
        .find(this.inputExpDate).click().type("0127");
        cy.frameLoaded(this.iFrameCVC);
        cy.iframe(this.iFrameCVC)
        .find(this.inputCVC).click().type("123");
        cy.get(this.checkbox).check({ force: true });
        cy.get(this.btnProceed).click();
        cy.get(this.errorMessage).contains("Credit Card payment failed");
    }
}

export default cardDetails;