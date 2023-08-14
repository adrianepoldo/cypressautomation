class Customer
{

    frName="input[name='firstName']";
    lsName="input[name='lastName']";
    cusDob="input[name='dateOfBirth']";
    cusEmail="input[name='email']";
    cusPassword="input[name='password']";
    cusContactNum="input[name='contactNumber']";
    cusAddress="input.react-autosuggest__input";
    chkAgreement="input[type='checkbox']";
    btnContinue="button[value='continue']";

    fillForm()
    {
    cy.get(this.frName).type("Test")
    cy.get(this.lsName).type("Test")
    cy.get(this.cusDob).type("02031990")
    cy.get(this.cusEmail).type("ad@amaysim.com")
    cy.get(this.cusPassword).type("Password")
    cy.get(this.cusContactNum).type("0412345678")
    cy.get(this.cusAddress).type('Level 6, 17-19 Bridge St, SYDNEY NSW 2000').wait(3000).type('{enter}')
    cy.get(this.chkAgreement).check({ force: true })
    cy.get(this.btnContinue).click()
    }

}

export default Customer;